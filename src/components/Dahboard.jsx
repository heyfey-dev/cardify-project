import  { useState } from 'react';
import './App.css';



const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div
          className={`sidebar-option ${selectedOption === 'dashboard' && 'active'}`}
          onClick={() => handleOptionClick('Overview')}
        >
          overview
        </div>
      
        <div
          className={`sidebar-option ${selectedOption === 'profile' && 'active'}`}
          onClick={() => handleOptionClick('Systems')}
        >
          systems
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'settings' && 'active'}`}
          onClick={() => handleOptionClick('Bills')}
        >
          bills
        </div>
        <div className={`sidebar-option ${selectedOption === `users` && `active`}`}
            onClick={() => handleOptionClick('Prices')}
        >
        prices
        </div>

        <div
            className={`sidebar-option ${selectedOption === 'dashboard' && 'active'}`}
            onClick={() => handleOptionClick('History')}

        >
            History
        </div>
      </div>

      {/* Right Content Area */}
      <div className="content">
        {selectedOption === 'Overview' && <Overview />}
        {selectedOption === 'Systems' && <Systems />}
        {selectedOption === 'Bills' && <Bills />}
        {selectedOption === 'Prices' && <Prices />}
        {selectedOption === 'History' && <History/>}
        {selectedOption === 'Settings' && <Settings/>}

      </div>
    </div>
  );
};

const Overview= () => {
  return <div><Overview/></div>;
};

const Systems = () => {
  return <div>This is the Profile content.</div>;
};

const Bills= () => {
  return <div>This is the Settings content.</div>;
};
const Prices = () => {
    return <div> this is the user content </div>
};
const History = ()=>{
  return <div> This is the history </div>
};
const Settings =()=>{
    return <div>this is Settings</div>
}


export default Dashboard;
