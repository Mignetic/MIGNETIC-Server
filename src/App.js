import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import TestSelect from './pages/TestSelect'
import Test from './pages/Test'
import Hotplace from './pages/Hotplace'
import LetterWrite from './pages/LetterWrite'

import PositionInput from './components/PositionInput'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/testselect' element={<TestSelect />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='/hotplace' element={<Hotplace />}></Route>


          <Route path='/positioninput' element={<PositionInput />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
