import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Web from './component/Web';
import { Routes,Route } from 'react-router-dom';
import { SingleBlog } from './component/SingleBlog';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Web/>}></Route>
      <Route path='/blog/:id' element={<SingleBlog/>}></Route>
    </Routes>      
    </>
  );
}

export default App;
