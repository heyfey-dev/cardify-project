
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage'
import Signup from './components/Signup';
import Dashboard from './components/Dahboard';

const App = () => {
  return (
    <div>
      <Routes>
      
        <Route path="/" element={<Homepage />} />
        <Route path="/auth/login" element={<Login />} />
        
        <Route path="/auth/signup" element={<Signup />} />
        ,<Route path='/dashboard' element={<Dashboard/>}></Route>
        
      </Routes>
    </div>
  );
};

export default App;
