import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Main from './main/Main';
import InsertMovie from './insert/InsertMovie';
import Detail from './detail/Detail';
import Allmovie from './allmovie/Allmovie';
import Bestmovie from './bestmovie/Bestmovie'
import Join from './member/Join';
import Favorites from './favorites/Favorites';

function App() {
  return (
    <div className="App">
         <Routes>
      <Route path='/' element={<Home/>} />
      {/* 시작부 */}
      <Route path='/main' element={<Main/>} />
      {/* 메인 */}
      <Route path='/detail/:id' element={<Detail/>} />
      {/* 상세보기　페이지 */}
      <Route path='/inser' element={<InsertMovie/>} />
      {/* 영화등록　페이지 */}
      <Route path='/allmovie' element={<Allmovie/>} />
      {/* 전체보기　페이지 */}
      <Route path='/join' element={<Join/>} />
      {/* 회원가입　페이지 */}
      <Route path='/favorite/:id' element={<Favorites/>} />
      {/* 찜하기　페이지 */}
      <Route path='/best/:keyword' element={<Bestmovie />} />
      {/* 인기목록　페이지 */}
      </Routes>
    </div>
  );
}

export default App;
