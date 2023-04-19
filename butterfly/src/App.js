import { Route, Routes } from 'react-router-dom';
// Styles
import "./Styles/App.css"
// Components
import Landing from './Components/Landing';
import About from './Components/About';
import Bazinga from './Components/Bazinga';
import Login from './Components/Plot/Login';
import Home from './Components/Plot/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/about' element={<About />}></Route>

        <Route path='/plot' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/bazinga' element={<Bazinga />}></Route>
      </Routes>
    </>
  );
}

export default App;
