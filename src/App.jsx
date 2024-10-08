
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage'
import Signup from './components/Signup';
import Dashboard from './components/Dahboard';
import Apitext from './components/Apitext';
import Resetpassword from './components/Resetpassword';
import Autotype from './components/Autotype';




const App = () => {
  return (
    <div>
      <Routes>
      
        <Route path="/" element={<Homepage />} />
        <Route path="/auth/login" element={<Login />} />
        
        <Route path="/auth/signup" element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/API' element={<Apitext/>}></Route>
        <Route path='/auth/reset' element={<Resetpassword/>}></Route>
        <Route path='/type' element={<Autotype/>}></Route>
        
      </Routes>
    </div>
  );
};

export default App;
