import  { useState } from 'react';
import './App.css'; // Import your CSS file for styling

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
          onClick={() => handleOptionClick('dashboard')}
        >
          Dashboard
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'profile' && 'active'}`}
          onClick={() => handleOptionClick('profile')}
        >
          Profile
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'settings' && 'active'}`}
          onClick={() => handleOptionClick('settings')}
        >
          Settings
        </div>
        <div className={`sidebar-option ${selectedOption === `users` && `active`}`}
            onClick={() => handleOptionClick('users')}
        >
        Users
        </div>
      </div>

      {/* Right Content Area */}
      <div className="content">
        {selectedOption === 'dashboard' && <DashboardContent />}
        {selectedOption === 'profile' && <ProfileContent />}
        {selectedOption === 'settings' && <SettingsContent />}
        {selectedOption === 'users' && <UsersContent />}
      </div>
    </div>
  );
};

const DashboardContent = () => {
  return <div>This is the Dashboard content.</div>;
};

const ProfileContent = () => {
  return <div>This is the Profile content.</div>;
};

const SettingsContent = () => {
  return <div>This is the Settings content.</div>;
};
const UsersContent = () => {
    return <div> this is the user content </div>
}

export default Dashboard;
