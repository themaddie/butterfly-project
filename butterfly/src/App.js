import { Route, Routes } from 'react-router-dom';
// Styles
import "./Styles/App.css"
// Components
import Landing from './Components/Landing';
import About from './Components/About';
import Login from './Components/Plot/Login';
import Signup from './Components/Plot/Signup';
import Home from './Components/Plot/Home';
import Tasks from './Components/Plot/Tasks';
import Goals from './Components/Plot/Goals';
import Index from './Components/Bazinga/Index';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/about' element={<About />}></Route>

        <Route path='/plot' element={<Login />}></Route>
        <Route path='/plot/signup' element={<Signup />}></Route>
        <Route path='/plot/home' element={<Home />}></Route>
        <Route path='/plot/todo' element={<Tasks />}></Route>
        <Route path='/plot/goals' element={<Goals />}></Route>
        {/* <Route path='/plot/check' element={<Todo />}></Route> */}

        <Route path='/bazinga' element={<Index />}></Route>
      </Routes>
    </>
  );
}

export default App;
