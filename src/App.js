import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import TestSelect from './pages/TestSelect'
import Test from './pages/Test'
import Hotplace from './pages/Hotplace'
import LetterWrite from './pages/LetterWrite'
import Board from './pages/Board'
import ShowLetter from './pages/ShowLetter'
import Result from './pages/Result'


import PositionInput from './components/PositionInput'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  //db 연동 테스트 
  //const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8888/api/users')
            .then(response => {
                //db 연동 테스트 
                // setUsers(response.data);
            })
            .catch(error => {
                console.error('에러 :', error);
            });
    }, []);

  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Routes>
    //       <Route path='/' element={<Home />}></Route>
    //       <Route path='/testselect' element={<TestSelect />}></Route>
    //       <Route path='/test' element={<Test />}></Route>
    //       <Route path='/hotplace' element={<Hotplace />}></Route>
    //       <Route path='/letterwrite' element={<LetterWrite />}></Route>
    //       <Route path='/board' element={<Board />}></Route>
    //       <Route path='/showletter' element={<ShowLetter/>}></Route>
    //       <Route path='/result' element={<Result />}></Route>
    //       <Route path='/positioninput' element={<PositionInput />}></Route>
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <div className="App">
            <h1>Users</h1>
            <ul>
                {/* db 연동 테스트
                  {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))} */}
            </ul>
        </div>
  );
}
export default App;
