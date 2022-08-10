import axios from "axios";
import { API_URL } from "../config/amuguna";


//초기값 지정
const initialState = {
    review:{
        loading : false,
        data : null,
        error : null
    }
}
//액션타입 지정하기
const GET_REVIEW ="GET_REVIEW";
const GET_REVIEW_SUCCESS = "GET_REVIEW_SUCCESS"
const GET_REVIEW_ERROR = "GET_REVIEW_ERROR"

//액션생성함수 만들기
// 찜하기 해당아이디내용만 가져오기
export const getreview = (name) => async dispatch => {
    dispatch({type:GET_REVIEW})
    try{
        const response = await axios.get(`${API_URL}/review/${name}`)
        const result = response.data;
        dispatch({type:GET_REVIEW_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_REVIEW_ERROR,error:e})
    }
}


//리듀서
export default function searchreviews(state=initialState, action){
    switch(action.type){
            case GET_REVIEW:
                return{
                    ...state,
                    review:{
                        loading:true,
                        data:null,
                        error:null
                    }
                }
            case GET_REVIEW_SUCCESS:
                return{
                    ...state,
                    review:{
                        loading:false,
                        data:action.result,
                        error:null
                    }
                }
            case GET_REVIEW_ERROR:
                return{
                    ...state,
                    review:{
                        loading:false,
                        data:null,
                        error:action.error
                    }
                }
                default:
                    return state;
            }
        }