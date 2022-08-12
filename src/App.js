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
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { API_URL2 } from './config/amuguna';
const socket =  io.connect(`${API_URL2}`)

function App() {
  const [chat, setChat] = useState([]);
  const divbox = useRef();
  useEffect(() => {
    socket.on("message", ({nicname, message}) => {
     setChat([...chat,{nicname,message}]);
    });
    if(chat.length>6){
      deletechat();
     }
  }, [chat]);
  const [state, setState] = useState({
    nicname : "",
    message : ""
})
function deletechat() {
do{
  let arr = chat.shift()
  setChat(chat);
  }while(chat.length > 6); 
}
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
   console.log(chat.length)
  const {nicname, message} =state
  socket.emit('message',{nicname, message})
  setState({nicname,message : ''})
  e.target.message.value = ""

}
  const [view, setView] = useState(false);
  const onClick = () => {
    if(view){
    setView(false)
    document.querySelector('#chatbtn').innerHTML = 'O<br/>P<br/>E<br/>N'
  }else{
    setView(true);
    document.querySelector('#chatbtn').innerHTML = 'C<br/>L<br/>O<br/>S<br/>E'
  }
  }
  return (
    <div className="App">
      {sessionStorage.getItem('user_id') ? 
        <div id='chatbox' className={view ? "on" : "" }>
          <button onClick={onClick} id='chatbtn'>O<br/>P<br/>E<br/>N</button>
         
          <div id='textbox' ref={divbox}>
            {chat.map(chat => (
             <p className={(sessionStorage.getItem('nicname') === chat.nicname) ? "right" : "left" }>
              <h2><img src='img/right.png'/></h2><span>{chat.nicname} : {chat.message}</span>
              </p> 
           ))} 
          </div>
          <form onSubmit={onMessageSubmit}>
          <div id='insertbox'>
            <input name='message' placeholder='두줄글은 사용하지 말아주세요 죄송합니다..' onChange={onChange} type='text' />
            <button type='submit'>전송</button>
          </div>
          </form>
        </div>
         : "" }
  
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
