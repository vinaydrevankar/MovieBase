import { combineReducers } from 'redux';
import { PropsWithChildren } from 'react';
import REDUX_CONSTANTS from '../../utils/reduxConstant';

type ActionProps = PropsWithChildren<{
    type: string,
    data: any
}>;


const moviesList = (state = [], action:ActionProps) =>{
    switch (action.type) {
        case REDUX_CONSTANTS.MOVIE_LIST:
            return action.data;
        default:
            return state;
    }
}

const isLoadingMoviesList = (state = false, action:ActionProps) => {
    switch (action.type) {
        case REDUX_CONSTANTS.SERVICE_GET_MOVIE_LIST_LOADING:
            return true;
        case REDUX_CONSTANTS.SERVICE_GET_MOVIE_LIST_SUCCESS:
        case REDUX_CONSTANTS.SERVICE_GET_MOVIE_LIST_FAILURE:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    moviesList,
    isLoadingMoviesList
});