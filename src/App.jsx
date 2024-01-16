
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage'
import Signup from './components/Signup';

const App = () => {
  return (
    <div>
      <Routes>
      
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
