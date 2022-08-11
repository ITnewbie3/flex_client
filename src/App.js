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
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
const socket =  io.connect('http://localhost:4001')

function App() {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message", ({nicname, message}) => {
     setChat([...chat,{nicname,message}]);
    });
  }, [chat]);
  const [state, setState] = useState({
    nicname : "",
    message : ""
})

  const onChange = (e) => {
    const {name, value} = e.target;
    setState({
        ...state,
        nicname : (sessionStorage.getItem('nicname') ? sessionStorage.getItem('nicname') : ""),
        [name]:value
    })
}
const onMessageSubmit =(e)=>{
  e.preventDefault()
  const {nicname, message} =state
  socket.emit('message',{nicname, message})
  setState({nicname,message : ''})
  e.target.message.value = ""
  if(chat.length>20){
    let arr = chat.shift()
    setChat(chat);
  }
}
  const [view, setView] = useState(false);
  const onClick = () => {
    if(view){
    setView(false)
  }else{
    setView(true);
  }
  }
  return (
    <div className="App">

        <div id='chatbox' className={view ? "on" : "" }>
          <button onClick={onClick} id='chatbtn'>채팅창</button>
          <div id='textbox'>
            {chat.map(chat => (
             <p className={(sessionStorage.getItem('nicname') === chat.nicname) ? "right" : "" }>{chat.nicname} : {chat.message}</p> 
           ))} 
          </div>
          <form onSubmit={onMessageSubmit}>
          <div id='insertbox'>
            <p>{sessionStorage.getItem('nicname')}</p>
            <input name='message' onChange={onChange} type='text' />
            <button type='submit'>전송</button>
          </div>
          </form>
        </div>
  
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
