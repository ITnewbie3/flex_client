import axios from "axios";
import { API_URL } from "../config/amuguna";

const initialState = {
    favorit:{
        loading : false,
        data : null,
        error : null
    }
}

const GET_FAVORIT = "GET_FAVORIT";
const GET_FAVORIT_SUCCESS = "GET_FAVORIT_SUCCESS"
const GET_FAVORIT_ERROR ="GET_FAVORIT_ERROR"


export const getfavorit = (id) => async dispatch => {
    dispatch({type:GET_FAVORIT})
    try{
        const response = await axios.get(`${API_URL}/favorit/${id}`)
        console.log(response)
        const result = response.data;
        dispatch({type:GET_FAVORIT_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_FAVORIT_ERROR,error:e})
    }
}


export default function searchfavorit(state=initialState, action){
    switch(action.type){
            case GET_FAVORIT:
                return{
                    ...state,
                    favorit:{
                        loading:true,
                        data:null,
                        error:null
                    }
                }
            case GET_FAVORIT_SUCCESS:
                return{
                    ...state,
                    favorit:{
                        loading:false,
                        data:action.result,
                        error:null
                    }
                }
            case GET_FAVORIT_ERROR:
                return{
                    ...state,
                    favorit:{
                        loading:false,
                        data:null,
                        error:action.error
                    }
                }
                default:
                    return state;
            }
        }