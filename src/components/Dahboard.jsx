import { useState } from 'react';
import './App.css';
import cardifylogo from './images/Cardify Logo.png';
import  airtel from './images/airtel.png';
import  glo  from './images/glo.png';
import  mtn from './images/mtn.png';
import  mobile from './images/9mobile.jpeg';
import  gift from './images/giftbox.png'
import { Link } from 'react-router-dom';
import { IoCubeSharp } from 'react-icons/io5';
import { CgArrowTopRight, CgArrowBottomLeft  } from 'react-icons/cg'
import { PiNote } from "react-icons/pi";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Overview');
  const [isSystemsDropdownOpen, setIsSystemsDropdownOpen] = useState(false)
  const [isBillsDropdownOpen, setisBillsDropdownopen] = useState(false);

 
  

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsSystemsDropdownOpen(false); 
    
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
          {selectedOption === 'History' &&  <History  />}
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

    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1, backgroundColor: 'rgb(245, 247, 250)', padding: '20px', borderRadius: '10px', width: '20%' }}>
        <div>
          <p>NGN</p>
        </div>
        <div>
          <p># 0</p>
        </div>
        <div style={{ display: 'flex', gap: '4rem' }}>
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

      <div style={{ flex: 1, backgroundColor: 'rgb(245, 247, 250)', padding: '20px', borderRadius: '10px', width: '20%' }}>
        <div>
          <p>USD</p>
        </div>
        <div>
          <p>$ 0</p>
        </div>
        <div style={{ display: 'flex', gap: '3rem' }}>
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

      <div style={{ flex: 1, backgroundColor: 'rgb(245, 247, 250)', padding: '20px', borderRadius: '10px', width: '20%' }}>
        <div>
          <p>GBP</p>
        </div>
        <div>
          <p> 0</p>
        </div>
        <div style={{ display: 'flex', gap: '3rem' }}>
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
    <div>
      <h3>Activity</h3>
      <hr />

            <div>
                  <div>
                  <p>Sort</p>
                       
          <ul className="dropdown-content">
            <li>All</li>
            <li>Pending</li>
            <li>Successful</li>
            <li>Processing</li>
            <li>Incoming</li>
            <li>Canceled</li>
            <li>Scam Flagged</li>
          </ul>
        
                  </div>


            </div>



              







      
      <div style={{textAlign:"end"}}><input type="text" placeholder='Search...' style={{borderRadius:"5px", border:"1px light black", width:"30%", height:"35px"}} /></div>


      <div>
        <div style={{fontSize:"150px", textAlign:"center"}}><PiNote /></div>
        <p  style={{textAlign:"center", fontWeight:"bold"}}>No transactions available</p>
        <p style={{textAlign:"center"}}>When you makee a trade, the details will show here </p>
      </div>
    </div>
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
    
  </div>
);

const Topup = () => (
  <div>
        <div>
            <div>
                  <div><h2>Bills Top Up</h2></div>
                 
            </div>

            
        </div>

        <hr />

                    <div style={{display:"flex", gap:"20px"}}>
                          <div className='border-0' style={{border:"2px solid ", width:"200px", padding:"9px", backgroundColor:"rgb(245,247,250)", borderRadius:"12px"}}>
                              <img src={mobile} alt="" style={{width:"50px", borderRadius:'100px'}} />
                              <div><p>9 Mobile</p></div>
                              <div style={{display:"flex"}}>
                                <div><p>2% cashback </p></div>
                                <div><p>2%</p></div>
                              </div>
                          </div>





                          <div className='border-0' style={{border:"2px solid ", width:"200px", padding:"9px", backgroundColor:"rgb(245,247,250)", borderRadius:"12px"}}>
                              <img src={airtel} alt="" style={{width:"50px", borderRadius:'100px'}} />
                              <div><p>AIRTEL</p></div>
                              <div style={{display:"flex"}}> 
                                <div><p>2% cashback </p></div>
                                <div><p>2%</p></div>
                              </div>
                          </div>




                          <div className='border-0' style={{border:"2px solid ", width:"200px", padding:"9px", backgroundColor:"rgb(245,247,250)", borderRadius:"12px"}}>
                             <img src={glo} alt="" style={{width:"50px", borderRadius:'100px'}} />
                              <div><p>GLO</p></div>
                              <div style={{display:"flex"}}>
                                <div><p>2% cashback </p></div>
                                <div><p>2%</p></div>
                              </div>
                          </div>




                          <div className='border-0' style={{border:"2px solid ", width:"200px", padding:"9px", backgroundColor:"rgb(245,247,250)", borderRadius:"12px"}}>
                              <img src={mtn} alt="" style={{width:"50px", borderRadius:'100px'}} />
                              <div><p>MTN</p></div>
                              <div style={{display:"flex"}}>
                                <div><p>2% cashback </p></div>
                                <div><p>2%</p></div>
                              </div>
                          </div>
                    </div>




              <div className='d-flex' style={{border:'1px solid rgb(94,171,135)', padding:'10px', marginTop:'80px', borderRadius:'10px', gap:'15rem'}}>
                 <div>
                  <p>Get cashback into your NGN wallet on Cardify Bills transactions</p>
                  <p style={{color:'rgb(39,171,68)', fontWeight:'bold'}}>See cashback </p>
                 </div>

                 <div>
                    <img src={gift} alt="" />
                 </div>
              </div>


              {/* bills history */}
              <div className='d-flex' style={{justifyContent:'space-between', marginTop:'40px'}}>
                    <div><h5>Bills History </h5></div>
                    <div><p>All records</p></div>
              </div>
              <hr />

              <div style={{textAlign:"end"}}><input type="text" placeholder='Search...' style={{borderRadius:"5px", border:"1px light black", width:"30%", height:"35px"}} /></div>


              <div>
        <div style={{fontSize:"150px", textAlign:"center"}}><PiNote /></div>
        <p  style={{textAlign:"center", fontWeight:"bold"}}>No transactions available</p>
        <p style={{textAlign:"center"}}>When you makee a trade, the details will show here </p>
      </div>
                
  </div>
);

const Vouchers = () => (
  <div>
        <div>
            <div>
                  <div><h2>Buy Vouchers</h2></div>
                  <div><p>Choose your preferred vouchers (email delivery)</p></div>
            </div>

            <div>
              <div><h4>NIGERIA</h4></div>
            </div>
        </div>

        <hr />

                    <div style={{display:"flex", gap:"20px"}}>
                          <div style={{border:"2px solid ", width:"200px", padding:"9px"}}>
                              <img src="" alt="" />
                              <div><p>MTN Airtime</p></div>
                              <div style={{display:"flex"}}>
                                <div><p>0% cashback </p></div>
                                <div><p>0%</p></div>
                              </div>
                          </div>





                          <div style={{border:"2px solid ", width:"200px", padding:"9px"}}>
                              <img src="" alt="" />
                              <div><p>IBEDC</p></div>
                              <div style={{display:"flex"}}>
                                <div><p>1% cashback </p></div>
                                <div><p>1%</p></div>
                              </div>
                          </div>




                          <div style={{border:"2px solid ", width:"200px", padding:"9px"}}>
                              <img src="" alt="" />
                              <div><p>Airtel Airtime</p></div>
                              <div style={{display:"flex"}}>
                                <div><p>0% cashback </p></div>
                                <div><p>0%</p></div>
                              </div>
                          </div>




                          <div style={{border:"2px solid ", width:"200px", padding:"9px"}}>
                              <img src="" alt="" />
                              <div><p>IBEDC</p></div>
                              <div style={{display:"flex"}}>
                                <div><p>1% cashback </p></div>
                                <div><p>1%</p></div>
                              </div>
                          </div>
                    </div>




              <div>
                  <div>
                    <div><p>Get cashback into your NGN wallet  on cardify bills </p></div>
                
                  </div>

                  <p>transactoons</p>
                  <p>see cashback</p>
              </div>


              {/* bills history */}
              <div>
                    <div><h1>Bills History </h1></div>
                    <div><p>All records</p></div>
              </div>
              <hr />

                <div><input type="text" placeholder='search...' /></div>

                <div><img src="" alt="" /></div>

  </div>
);






export default Dashboard;
