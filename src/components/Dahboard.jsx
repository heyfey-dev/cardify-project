import { useState } from 'react';
import './App.css';
import cardifylogo from './images/Cardify Logo.png';
// import { Link } from 'react-router-dom';
import { IoCubeSharp } from 'react-icons/io5';
// import { CgArrowTopRight, CgArrowBottomLeft } from 'react-icons/cg';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Overview');
  const [isSystemsDropdownOpen, setIsSystemsDropdownOpen] = useState(false);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsSystemsDropdownOpen(false); // Close Systems dropdown when another option is selected
    setIsSettingsDropdownOpen(false); // Close Settings dropdown when another option is selected
  };

  const handleSystemsOptionClick = () => {
    setIsSystemsDropdownOpen(!isSystemsDropdownOpen);
  };

  const handleSettingsOptionClicked = () => {
    setIsSettingsDropdownOpen(!isSettingsDropdownOpen);
  };

  return (
    <div>
      <nav>
        <div className="container d-flex justify-content-between">
          <div>
            <img src={cardifylogo} style={{ width: '20px' }} alt="Cardify Logo" />
          </div>
          <div>
            <h1>Daniel efemena</h1>
          </div>
        </div>
      </nav>

      <div className="dashboard-container container">
        {/* Left Sidebar */}
        <div className="sidebar">
          <div
            className={`sidebar-option ${selectedOption === 'Overview' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Overview')}
          >
             Overview
          </div>
          <div className="sidebar-option" onClick={handleSystemsOptionClick}>
            <IoCubeSharp /> Systems
            {isSystemsDropdownOpen && (
              <div className="dropdown-content">
                <div onClick={() => handleOptionClick('Wallets')}>Wallets</div>
                <div onClick={() => handleOptionClick('Cards')}>Cards</div>
              </div>
            )}
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'Bills' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Bills')}
          >
            Bills
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'Prices' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Prices')}
          >
            Prices
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'History' ? 'active' : ''}`}
            onClick={() => handleOptionClick('History')}
          >
            History
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'Settings' ? 'active' : ''}`}
            onClick={handleSettingsOptionClicked}
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
          {selectedOption === 'Wallets' && <Wallets />}
          {selectedOption === 'Cards' && <Cards />}
        </div>
      </div>
    </div>
  );
};

const Overview = () => (
  <div>
    {/* Overview content */}
  </div>
);

const Systems = () => (
  <div>
    {/* Systems content */}
  </div>
);

const Bills = () => (
  <div>
    {/* Bills content */}
  </div>
);

const Prices = () => (
  <div>
    {/* Prices content */}
  </div>
);

const History = () => (
  <div>
    {/* History content */}
  </div>
);

const Settings = () => (
  <div>
    {/* Settings content */}
  </div>
);

const Wallets = () => (
  <div>
    {/* Wallets content */}
    <h2>Wallets Content</h2>
    {/* Add your wallet content here */}
  </div>
);

const Cards = () => (
  <div>
    {/* Cards content */}
    <h2>Cards Content</h2>
    {/* Add your cards content here */}
  </div>
);

export default Dashboard;
