import { useState } from 'react';
import './App.css';
import cardifylogo from './images/Cardify Logo.png';
import { Link } from 'react-router-dom';
import { IoCubeSharp } from 'react-icons/io5';
import { CgArrowTopRight, CgArrowBottomLeft } from 'react-icons/cg';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Overview');
  const [isSystemsDropdownOpen, setIsSystemsDropdownOpen] = useState(false);
  const [isBillsDropdownOpen, setisBillsDropdownopen] = useState(false);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsSystemsDropdownOpen(false); // Close Systems dropdown when another option is selected
    
  };

  const handleSystemsOptionClick = () => {
    setIsSystemsDropdownOpen(!isSystemsDropdownOpen);
  };

  const handleBillsOptionClick =() => {
    setisBillsDropdownopen(!isBillsDropdownOpen);
  }
  

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
          
          <div className="sidebar-option" onClick={handleBillsOptionClick}>
            <IoCubeSharp /> Bills
            {isBillsDropdownOpen && (
              <div className="dropdown-content">
                <div onClick={() => handleOptionClick('Topup')}>Topup</div>
                <div onClick={() => handleOptionClick('Vouchers')}>Vouchers</div>
              </div>
            )}
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
            onClick={() => handleOptionClick('Settings')}
          >
            Settings
          </div>
        </div>

        {/* Right Content Area */}
        <div className="content" style={{}}>
          {/* Render the selected component based on the state */}
          {selectedOption === 'Overview' && <Overview />}
          {selectedOption === 'Systems' && <Systems />}
          {selectedOption === 'Bills' && <Bills />}
          {selectedOption === 'Prices' && <Prices />}
          {selectedOption === 'History' && <History />}
          {selectedOption === 'Settings' && <Settings />}
          {selectedOption === 'Wallets' && <Wallets />}
          {selectedOption === 'Cards' && <Cards />}
          {selectedOption === 'Topup' && <Topup />}
          {selectedOption === 'Vouchers' && <Vouchers/>}
        </div>
      </div>
    </div>
  );
};

const Overview = () => (
  <div>
      <div style={{ backgroundColor: 'rgb(209,231,221)', margin: '5px', padding: '10px', borderRadius: '10px' }}>
      <div>
        <h5>Hello daniel efemena</h5>
      </div>
      <div>
        <p>congratuilations you are now level 1 verified. Verify level 2 below|:</p>
      </div>
      <div>
        <p>Turn on 2FA here </p>
      </div>
      <div>BVN verification here </div>
    </div>

    <div style={{ marginTop: '10px' }}>
      <h2>Wallets</h2>
    </div>

    <hr className="mt-5" />

    <div style={{ display: 'flex', gap: '50px' }}>
      <div style={{ flex: 1, backgroundColor: 'rgb(245, 247, 250)', padding: '20px', borderRadius: '10px', width: '100%' }}>
        <div>
          <p>NGN</p>
        </div>
        <div>
          <p># 0</p>
        </div>
        <div style={{ display: 'flex', gap: '8rem' }}>
          <div>
            <button className="btn btn-primary" style={{ backgroundColor: 'rgb(18,167,51)', display: 'flex' }}>
              <CgArrowTopRight className="mt-1" /> Send
            </button>
          </div>
          <div>
            <button className="btn btn-primary" style={{ backgroundColor: 'rgb(18,167,51)', display: 'flex' }}>
              <CgArrowBottomLeft className="mt-1" /> Receive
            </button>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, backgroundColor: 'rgb(245, 247, 250)', padding: '20px', borderRadius: '10px', width: '100%' }}>
        <div>
          <p>USD</p>
        </div>
        <div>
          <p>$ 0</p>
        </div>
        <div style={{ display: 'flex', gap: '8rem' }}>
          <div>
            <button className="btn btn-primary" style={{ backgroundColor: 'rgb(18,167,51)', display: 'flex' }}>
              <CgArrowTopRight className="mt-1" /> Send
            </button>
          </div>
          <div>
            <button className="btn btn-primary" style={{ backgroundColor: 'rgb(18,167,51)', display: 'flex' }}>
              <CgArrowBottomLeft className="mt-1" /> Receive
            </button>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, backgroundColor: 'rgb(245, 247, 250)', padding: '20px', borderRadius: '10px', width: '100%' }}>
        <div>
          <p>GBP</p>
        </div>
        <div>
          <p> 0</p>
        </div>
        <div style={{ display: 'flex', gap: '8rem' }}>
          <div>
            <button className="btn btn-primary" style={{ backgroundColor: 'rgb(18,167,51)', display: 'flex', gap: '5px' }}>
              <CgArrowTopRight className="mt-1" /> Send
            </button>
          </div>
          <div>
            <button className="btn btn-primary" style={{ backgroundColor: 'rgb(18,167,51)', display: 'flex' }}>
              <CgArrowBottomLeft className="mt-1" /> Receive
            </button>
          </div>
        </div>
      </div>
    </div>

    <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between' }}>
      <div className="mt-4">
        {' '}
        <h2>History</h2>
      </div>
      <div className="mt-4">
        <Link >All records</Link>
      </div>
    </div>

    <hr className="mt-2" />
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
    History content
  </div>
);

const Settings = () => (
  <div>
      <div style={{ backgroundColor: 'rgb(209,231,221)', margin: '5px', padding: '10px', borderRadius: '10px' }}>
      <div>
        <h5>Hello daniel efemena</h5>
      </div>
      <div>
        <p>congratuilations you are now level 1 verified. Verify level 2 below|:</p>
      </div>
      <div>
        <p>Turn on 2FA here </p>
      </div>
      <div>BVN verification here </div>
    </div>


    <div><h3>Settings</h3></div>
    <hr />


    <div style={{marginTop:"70px"}}>
      <span>Profile</span>

      <div >
              <div>
                <img src="" alt="" />
              </div>
       
              <div>
                <div><h5>General</h5></div>
                <div><p>View your personal profile information</p></div>
              </div>
      </div>
      <hr />



      <div>
        <div>
          <img src="" alt="" />
        </div>
       
        <div>
          <div><h5>Communications</h5></div>
          <div><p>Control notifications once the user performs a transactionon the platform</p></div>
        </div>
      </div>
      <hr />



      <div>
            <div>
              <img src="" alt="" />
            </div>

            <div>
              <div><h5>Security</h5></div>
              <div><p>Cardify offers two factor authentication, easy password and PIN changes and more to keep your personal information safe </p></div>
            </div>
      </div>
      <hr />


      <div>
            <div>
              <img src="" alt="" />
            </div>

            <div>
              <div><h5>Security</h5></div>
              <div><p>Cardify offers two factor authentication, easy password and PIN changes and more to keep your personal information safe </p></div>
            </div>
      </div>
      <hr />


      <div>
            <div>
              <img src="" alt="" />
            </div>

            <div>
              <div><h5>Limit and levels</h5></div>
              <div><p>Unlock more spending and saving options with our customizable limits and levels. Upgrade your level to set deposit and withdrawal restrictions that suit your needs.</p></div>
            </div>
      </div>
      <hr />

      
    </div>




    <div className='' style={{marginTop:"70px"}}>
      <span>Promotions</span>

      <div>
              <div>
                <img src="" alt="" />
              </div>
       
              <div>
                <div><h5>Invite a friend </h5></div>
                <div><p>Refer and get 200 points once the user performs a transaction on the platform </p></div>
              </div>
      </div>
      <hr />



      <div>
        <div>
          <img src="" alt="" />
        </div>
       
        <div>
          <div><h5>Redeem a code </h5></div>
          <div><p>if you have been invited or have a coupon code, please enter your code </p></div>
        </div>
      </div>
      <hr />


      <div>
        <div>
          <img src="" alt="" />
        </div>
       
        <div>
          <div><h5>Coupon history</h5></div>
          <div><p>View all coupon codes you have used  </p></div>
        </div>
      </div>
      <hr />



      

      


      

      
    </div>






    <div className='mt-5' style={{marginTop:"70px"}}>
      <span>Bank and cards</span>

      <div>
              <div>
                <img src="" alt="" />
              </div>
       
              <div>
                <div><h5>Bank</h5></div>
                <div><p>View and update your bank accouwnts</p></div>
              </div>
      </div>
      <hr />



      <div>
        <div>
          <img src="" alt="" />
        </div>
       
        <div>
          <div><h5>Physical cards  </h5></div>
          <div><p>Manage your physical cards </p></div>
        </div>
      </div>
      <hr />


      <div>
        <div>
          <img src="" alt="" />
        </div>
       
        <div>
          <div><h5>Virtual cards</h5></div>
          <div><p>Manage your virtual cards   </p></div>
        </div>
      </div>
      <hr />



      

      


      

      
    </div>
  </div>
);


const Wallets = () => (
  <div>
    wallets content
  </div>
);

const Cards = () => (
  <div>
    Cards content
  </div>
);

const Topup = () => (
  <div>
    Topup content
  </div>
);

const Vouchers = () => (
  <div>
    Settings   content
  </div>
);






export default Dashboard;
