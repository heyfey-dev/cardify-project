import  { useState } from 'react';
import './App.css'; // Assuming you have a stylesheet for styling

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Overview');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div
          className={`sidebar-option ${selectedOption === 'Overview' && 'active'}`}
          onClick={() => handleOptionClick('Overview')}
        >
          Overview
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Systems' && 'active'}`}
          onClick={() => handleOptionClick('Systems')}
        >
          Systems
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Bills' && 'active'}`}
          onClick={() => handleOptionClick('Bills')}
        >
          Bills
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Prices' && 'active'}`}
          onClick={() => handleOptionClick('Prices')}
        >
          Prices
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'History' && 'active'}`}
          onClick={() => handleOptionClick('History')}
        >
          History
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Settings' && 'active'}`}
          onClick={() => handleOptionClick('Settings')}
        >
          Settings
        </div>
      </div>

      {/* Right Content Area */}
      <div className="content">
        {/* Render the selected component based on the state */}
        {selectedOption === 'Overview' && <Overview />}
        {selectedOption === 'Systems' && <Systems />}
        {selectedOption === 'Bills' && <Bills />}
        {selectedOption === 'Prices' && <Prices />}
        {selectedOption === 'History' && <History />}
        {selectedOption === 'Settings' && <Settings />}
      </div>
    </div>
  );
};

// Sample content components
const Overview = () => <div>Overview Content</div>;
const Systems = () => <div>Systems Content</div>;
const Bills = () => <div>Bills Content</div>;
const Prices = () => <div>Prices Content</div>;
const History = () => <div>History Content</div>;
const Settings = () => <div>Settings Content</div>;

export default Dashboard;
