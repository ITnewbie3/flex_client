import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Main from './main/Main';
import InsertMovie from './insert/InsertMovie';


function App() {
  return (
    <div className="App">
         <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/main' element={<Main/>} />
      <Route path='/inser' element={<InsertMovie/>} />
      </Routes>
    </div>
  );
}

export default App;
