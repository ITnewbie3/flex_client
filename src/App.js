import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Main from './main/Main';
import InsertMovie from './insert/InsertMovie';
import Detail from './main/Detail';
import Allmovie from './allmovie/Allmovie';


function App() {
  return (
    <div className="App">
         <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/main' element={<Main/>} />
      <Route path='/detail/:id' element={<Detail/>} />
      <Route path='/inser' element={<InsertMovie/>} />
      <Route path='/allmovie' element={<Allmovie/>} />
      
      </Routes>
    </div>
  );
}

export default App;
