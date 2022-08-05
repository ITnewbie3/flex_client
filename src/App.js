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
      <Route path='/main' element={<Main/>} />
      <Route path='/detail/:id' element={<Detail/>} />
      <Route path='/inser' element={<InsertMovie/>} />
      <Route path='/allmovie' element={<Allmovie/>} />
      <Route path='/join' element={<Join/>} />
      <Route path='/favorite/:id' element={<Favorites/>} />
      <Route path='/best/:keyword' element={<Bestmovie />} />
      </Routes>
    </div>
  );
}

export default App;
