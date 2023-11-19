
import Landing from './Landing';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Landing' element={<Landing/>}/>

      <Route path='/Signup' element={<Signup/>}/>

      

    </Routes>
    </BrowserRouter>
    </>

   
  );
}

export default App;
