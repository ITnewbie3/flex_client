
import axios from "axios";

//초기값 지정
const initialState = {
    movies:{
        loading : false,
        data : null,
        error : null
    },  
    onemovie:{
        loading : false,
        data : null,
        error : null
    },
    movie:{
        loading : false,
        data : null,
        error : null
    },
    movieaction:{
        loadinga : false,
        dataa : null,
        errora : null
    }
}

//액션타입 지정하기
//전체값 가져오기
const GET_MOVIES = "GET_MOVIES";
const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
const GET_MOVIES_ERROR = "GET_MOVIES_ERROR";

// 키 값액션타입
const GET_MOVIE = "GET_MOVIE";
const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
const GET_MOVIE_ERROR = "GET_MOVIE_ERROR";

// 키 값액션타입
const GET_MOVIE_ACTION = "GET_MOVIE_ACTION";
const GET_MOVIE_ACTION_SUCCESS = "GET_MOVIE_ACTION_SUCCESS";
const GET_MOVIE_ACTION_ERROR = "GET_MOVIE_ACTION_ERROR";

// 키 값액션타입
const GET_ONEMOVIE = "GET_ONEMOVIE_ACTION";
const GET_ONEMOVIE_SUCCESS = "GET_ONEMOVIE_ACTION_SUCCESS";
const GET_ONEMOVIE_ERROR = "GET_ONEMOVIE_ACTION_ERROR";



//액션생성함수 만들기
// id값으로 자료 가져오기
export const getonemovie = (id) => async dispatch => {
    dispatch({type:GET_ONEMOVIE})
    try{
        const response2 = await axios.get(`http://localhost:3001/detail/${id}`)
        const result2 = response2.data;
        dispatch({type:GET_ONEMOVIE_SUCCESS,result2})
    }
    catch(e){
        dispatch({type:GET_ONEMOVIE_ERROR,error:e})
    }
}
// key값으로 해당 값만 가져오기
export const getmovie = (keyword) => async dispatch => {
    dispatch({type:GET_MOVIE})
    try{
        const response = await axios.get(`http://localhost:3001/movie/${keyword}`)
        const result = response.data;
        dispatch({type:GET_MOVIE_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_MOVIE_ERROR,error:e})
    }
}
// 같은 리덕스 사용으로 값을 관리해줄 액션생성함수 추가
export const getmovieaction = (keywordaction) => async dispatch => {
    dispatch({type:GET_MOVIE_ACTION})
    try{
        console.log(keywordaction);
        const response1 = await axios.get(`http://localhost:3001/movieaction/${keywordaction}`)
        const result1 = response1.data;
        dispatch({type:GET_MOVIE_ACTION_SUCCESS,result1})
    }
    catch(e){
        dispatch({type:GET_MOVIE_ACTION_ERROR,error:e})
    }
}

//전체 데이터 가져오기
export const getmovies = () => async dispatch => {
    dispatch({type:GET_MOVIES})
    try{
        const res = await axios.get(`http://localhost:3001/movies`)
        const result = res.data;
        dispatch({type:GET_MOVIES_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_MOVIES_ERROR,error:e})
    }
}


//리듀서
export default function searchmovies(state=initialState, action){
    switch(action.type){
            case GET_MOVIES:
                return{
                    ...state,
                    movies:{
                        loading:true,
                        data:null,
                        error:null
                    }
                }
            case GET_MOVIES_SUCCESS:
                return{
                    ...state,
                    movies:{
                        loading:false,
                        data:action.result,
                        error:null
                    }
                }
            case GET_MOVIES_ERROR:
                return{
                    ...state,
                    movies:{
                        loading:false,
                        data:null,
                        error:action.error
                    }
                }
             case GET_MOVIE:
                return{
                    ...state,
                    movie:{
                        loading:true,
                        data:null,
                        error:null
                    }
                }
            case GET_MOVIE_SUCCESS:
                return{
                    ...state,
                    movie:{
                        loading:false,
                        data:action.result,
                        error:null
                    }
                }
            case GET_MOVIE_ERROR:
                return{
                    ...state,
                    movie:{
                        loading:false,
                        data:null,
                        error:action.error
                    }
                }
                case GET_MOVIE_ACTION:
                    return{
                        ...state,
                        movieaction:{
                            loadinga:true,
                            dataa:null,
                            errora:null
                        }
                    }
                case GET_MOVIE_ACTION_SUCCESS:
                    return{
                        ...state,
                        movieaction:{
                            loadinga:false,
                            dataa:action.result1,
                            errora:null
                        }
                    }
                case GET_MOVIE_ACTION_ERROR:
                    return{
                        ...state,
                        movieaction:{
                            loadinga:false,
                            dataa:null,
                            errora:action.error
                        }
                    }
             case GET_ONEMOVIE:
                return{
                    ...state,
                    onemovie:{
                        loading:true,
                        data:null,
                        error:null
                    }
                }
            case GET_ONEMOVIE_SUCCESS:
                return{
                    ...state,
                    onemovie:{
                        loading:false,
                        data:action.result2,
                        error:null
                    }
                }
            case GET_ONEMOVIE_ERROR:
                return{
                    ...state,
                    onemovie:{
                        loading:false,
                        data:null,
                        error:action.error
                    }
                }
        default:
            return state;
    }
}

