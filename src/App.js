
import Landing from './Landing';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Landing' element={<Landing/>}/>

      <Route path='/Signup' element={<Signup/>}/>

      

    </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>

   
  );
}

export default App;
