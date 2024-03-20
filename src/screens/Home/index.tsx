import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    FlatList
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { serviceGetMoviesList } from '../../redux/actions/home';
import { Dispatch, UnknownAction } from 'redux';
import { errorHandler } from '../../service/errorHandler';
import { SERVICE } from '../../service/config';
import { AppDispatch } from '../../redux/store';
import SearchBar from './components/SearchBar';
import MovieItem from './components/MovieItem';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import { setMovieDetails } from '../../redux/actions/details';

const Home = () => {
    const dispatch = useDispatch<any>();
    const navigation = useNavigation<any>();
    const moviesList = useSelector(state => state?.home?.moviesList)
    const isLoadingMoviesList = useSelector(state => state?.home?.isLoadingMoviesList)

    const [displayedMovies, setDisplayedMovies] = useState([])


    const getMoviesList = () => {
        dispatch(serviceGetMoviesList()).then(async (response: any) => {
            if (response?.status != 200) {
                errorHandler(SERVICE.HOME, response);
            }
        })
    }

    const onChangeText = (text: String) => {
        const filteredList = moviesList.filter((item: any) => {
            if (item["#TITLE"]?.toLowerCase().includes(text.toLowerCase())) {
                return true
            } else {
                return false
            }
        })
        setDisplayedMovies(filteredList)
    }

    const formatData = (data: any, numColumns: number) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
            data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
            numberOfElementsLastRow++;
        }
        return data;
    };

    const onPressItem = (item: any) => {
        navigation.navigate('details', { id: item["#IMDB_ID"] })
    }

    useEffect(() => {
        getMoviesList()
    }, [])

    useEffect(() => {
        if (moviesList) {
            setDisplayedMovies(moviesList);
        }
    }, [moviesList])

    // console.log('moviesList: ' + JSON.stringify(moviesList, null, 2));


    return <View style={styles.mainContainer}>
        <Header title={"MovieBase"} isBackButtonDisplayed={false} navigation={navigation} />
        <SearchBar onChangeText={onChangeText} />
        <FlatList
            numColumns={2}
            data={formatData(displayedMovies, 2)}
            keyExtractor={(item, index) => item["#IMDB_ID"]}
            renderItem={({ item, index }) => <MovieItem item={item} index={index} onPress={onPressItem} />}
        />
        {isLoadingMoviesList ? <Loader /> : null}
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#464a4f",
    }
})

export default Home;