import { combineReducers } from "redux";
import searchmovies from "./movies";
//rootReducer 만들기~~~~~
 //검색했을때 조건에 맞게 room list를 출력해주는 리듀서
const rootReducer = combineReducers({ searchmovies })
export default rootReducer;


