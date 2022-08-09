import axios from "axios";
import { API_URL } from "../config/amuguna";

//초기값 지정
const initialState = {
    favorit:{
        loading : false,
        data : null,
        error : null
    }
}
//액션타입 지정하기
const GET_FAVORIT = "GET_FAVORIT";
const GET_FAVORIT_SUCCESS = "GET_FAVORIT_SUCCESS"
const GET_FAVORIT_ERROR ="GET_FAVORIT_ERROR"

//액션생성함수 만들기
// 찜하기 해당아이디내용만 가져오기
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

//리듀서
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