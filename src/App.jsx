
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage'
import Signup from './components/Signup';
import Dashboard from './components/Dahboard';
import Overview from './components/Dashboard/Overview';
import System from './components/Dashboard/System';
const App = () => {
  return (
    <div>
      <Routes>
      
        <Route path="/" element={<Homepage />} />
        <Route path="/auth/login" element={<Login />} />
        
        <Route path="/auth/signup" element={<Signup />} />
        {/* ,<Route path='/dashboard' element={<Dashboard/>}></Route> */}
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='' element={<Overview/>} />
          <Route path='system' element={<System/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
