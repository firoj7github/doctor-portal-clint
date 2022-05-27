
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appionment from './pages/appionment/Appionment';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Header from './pages/share/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appionment' element={<Appionment></Appionment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
