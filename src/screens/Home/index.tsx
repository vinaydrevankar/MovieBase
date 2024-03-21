import React, { useEffect, useRef, useState } from 'react';
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
    const [searchText, setSearchText] = useState(null)
    const searchRequestTimeout = useRef()

    const getMoviesList = (searchText:String) => {
        dispatch(serviceGetMoviesList(searchText)).then(async (response: any) => {
            if (response?.status != 200) {
                errorHandler(SERVICE.HOME, response);
            }
        })
    }

    const onChangeText = (text: String) => {
        setSearchText(text)
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


    useEffect(() => {

        setDisplayedMovies([])
        /**Clear request if next request comes before 500 mill second */
        if (searchRequestTimeout && searchRequestTimeout.current) {
            clearTimeout(searchRequestTimeout.current)
        }

        if ((searchText && searchText?.length > 2) || !searchText) {
            searchRequestTimeout.current = setTimeout(() => {
                getMoviesList(searchText)
            }, 500);
        }
    }, [searchText])


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