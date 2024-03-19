import { Dispatch } from "redux";
import { getDataFromService } from "../../service";
import { DETAILS_API_URL } from "../../service/config";
import REDUX_CONSTANTS from "../../utils/reduxConstant";


export const serviceGetMoviesDetails = (id:String) => (dispatch:Dispatch) => Promise.resolve().then(async () => {
    try {
        dispatch({ type: REDUX_CONSTANTS.SERVICE_GET_MOVIE_DETAILS_LOADING });
        const data = {
        }
        const response = await getDataFromService({ url: DETAILS_API_URL+id})
        dispatch({ type: REDUX_CONSTANTS.SERVICE_GET_MOVIE_DETAILS_SUCCESS });
        return response;
    } catch (e) {
        dispatch({ type: REDUX_CONSTANTS.SERVICE_GET_MOVIE_DETAILS_FAILURE });
        return e;
    }
});