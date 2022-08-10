import { combineReducers } from "redux";
import searchmovies from "./movies";
import searchfavorit from "./favorit";
import searchreviews from "./review";
//rootReducer 만들기~~~~~
 //검색했을때 조건에 맞게 room list를 출력해주는 리듀서
const rootReducer = combineReducers({ searchmovies, searchfavorit, searchreviews })
export default rootReducer;


