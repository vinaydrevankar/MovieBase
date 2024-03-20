import { combineReducers } from 'redux';
import { PropsWithChildren } from 'react';
import REDUX_CONSTANTS from '../../utils/reduxConstant';

type ActionProps = PropsWithChildren<{
    type: string,
    data: any
}>;


const moviesDetails = (state = null, action:ActionProps) =>{
    switch (action.type) {
        case REDUX_CONSTANTS.MOVIE_DETAILS:
            return action.data;
        default:
            return state;
    }
}

const isLoadingMoviesDetails = (state = false, action:ActionProps) => {
    switch (action.type) {
        case REDUX_CONSTANTS.SERVICE_GET_MOVIE_DETAILS_LOADING:
            return true;
        case REDUX_CONSTANTS.SERVICE_GET_MOVIE_DETAILS_SUCCESS:
        case REDUX_CONSTANTS.SERVICE_GET_MOVIE_DETAILS_FAILURE:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    moviesDetails,
    isLoadingMoviesDetails
});