import { Route, Routes } from 'react-router-dom';
// Styles
import "./Styles/App.css"
// Components
import Landing from './Components/Landing';
import About from './Components/About';
import Plot from './Components/Plot';
import Bazinga from './Components/Bazinga';
import Todo from './Components/Plot/Todo'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/plot' element={<Todo />}></Route>
        <Route path='/bazinga' element={<Bazinga />}></Route>
      </Routes>
    </>
  );
}

export default App;
