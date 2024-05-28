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
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    fetch("http://localhost:8888/api")
    .then(res => res.json())
    .then(data => console.log(data));
  });

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
    <div className='App'>
      Test
    </div>
  );
}
export default App;
