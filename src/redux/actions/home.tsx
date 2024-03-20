import { Dispatch } from "redux";
import { getDataFromService } from "../../service";
import { HOME_API_URL } from "../../service/config";
import REDUX_CONSTANTS from "../../utils/reduxConstant";
import { AppDispatch } from "../store";


export const serviceGetMoviesList = () => (dispatch:AppDispatch) => Promise.resolve().then(async () => {
    try {
        dispatch({ type: REDUX_CONSTANTS.SERVICE_GET_MOVIE_LIST_LOADING });
        const response:any = await getDataFromService({ url: HOME_API_URL })
        if(response?.status == 200){
            dispatch({ type: REDUX_CONSTANTS.MOVIE_LIST, data: response?.data?.description });
        }
        dispatch({ type: REDUX_CONSTANTS.SERVICE_GET_MOVIE_LIST_SUCCESS });
        return response;
    } catch (e) {
        dispatch({ type: REDUX_CONSTANTS.SERVICE_GET_MOVIE_LIST_FAILURE });
        return e;
    }
});