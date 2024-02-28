
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage'
import Signup from './components/Signup';
import Dashboard from './components/Dahboard';
import Overview from './components/Dashboard/Overview';
import System from './components/Dashboard/System';
import Bills from './components/Dashboard/Bills';
import Prices from './components/Dashboard/Prices';
import History from './components/Dashboard/History';
import Settings from './components/Dashboard/Settings';
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
          <Route path='bills' element={<Bills/>}></Route>
          <Route path='prices' element={<Prices/>}></Route>
          <Route path='history' element={<History/>}></Route>
          <Route path='settings' element={<Settings/>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
