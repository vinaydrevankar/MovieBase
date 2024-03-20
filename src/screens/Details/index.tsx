import React, { useEffect } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { serviceGetMoviesDetails, setMovieDetails } from '../../redux/actions/details';
import { errorHandler } from '../../service/errorHandler';
import { SERVICE } from '../../service/config';
import MovieDetailsView from './components/MovieDetailsView';

const Details = (props:any) =>{
    const dispatch = useDispatch<any>()
    const navigation = useNavigation<any>()
    const moviesDetails = useSelector(state => state?.details?.moviesDetails)
    const isLoadingMoviesDetails = useSelector(state => state?.details?.isLoadingMoviesDetails)    
    // console.log('moviesDetails: '+JSON.stringify(moviesDetails));
    

    useEffect(()=>{
        dispatch(serviceGetMoviesDetails(props?.route?.params?.id)).then(async (response: any) => {
            if (response?.status != 200) {
                errorHandler(SERVICE.DETAILS, response);
            }
        })

        return ()=>{
            dispatch(setMovieDetails(null))        
        }
    },[])

    return <View style={styles.mainContainer}>
            <Header title={"Movie Details"} isBackButtonDisplayed={true} navigation={navigation}/>
            {moviesDetails ? <MovieDetailsView moviesDetails={moviesDetails}/> : null}
            {isLoadingMoviesDetails ? <Loader /> : null}
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "lightgrey",
    }
})

export default Details;