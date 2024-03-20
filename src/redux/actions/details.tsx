import { Dispatch } from "redux";
import { getDataFromService } from "../../service";
import { DETAILS_API_URL } from "../../service/config";
import REDUX_CONSTANTS from "../../utils/reduxConstant";


export const setMovieDetails = (data:any) =>{
    return async (dispatch:Dispatch) => {
        dispatch({ type: REDUX_CONSTANTS.MOVIE_DETAILS, data: data });
    }
}

export const serviceGetMoviesDetails = (id:String) => (dispatch:Dispatch) => Promise.resolve().then(async () => {
    try {
        dispatch({ type: REDUX_CONSTANTS.SERVICE_GET_MOVIE_DETAILS_LOADING });
        const response = await getDataFromService({ url: DETAILS_API_URL+id})
        if(response?.status == 200){
            dispatch(setMovieDetails(response?.data))
        }
        dispatch({ type: REDUX_CONSTANTS.SERVICE_GET_MOVIE_DETAILS_SUCCESS });
        return response;
    } catch (e) {
        dispatch({ type: REDUX_CONSTANTS.SERVICE_GET_MOVIE_DETAILS_FAILURE });
        return e;
    }
});