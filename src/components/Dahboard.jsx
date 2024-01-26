import  { useState } from 'react';
import './App.css'; // Assuming you have a stylesheet for styling
import cardifylogo from './images/Cardify Logo.png'
import {Link} from 'react-router-dom'
import { FaHouseChimney } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoCubeSharp } from "react-icons/io5";


import { CgArrowTopRight } from "react-icons/cg";
import { CgArrowBottomLeft } from "react-icons/cg";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Overview');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
          <nav>
                <div className='container d-flex justify-content-between'>
                <div><img src={cardifylogo} style={{width:"20px"}} /></div>

                <div>
                    <h1>Daniel efemena</h1>
                </div>
                </div>
          </nav>



          <div className='dashboard-container container'>
                                   {/* Left Sidebar */}
                                              <div className="sidebar">
                                                <div
                                                  className={`sidebar-option ${selectedOption === 'Overview' && 'active'}`}
                                                  onClick={() => handleOptionClick('Overview')}
                                                >
                                                 <FaHouseChimney />  Overview
                                                </div>
                                                <div
                                                  className={`sidebar-option ${selectedOption === 'Systems' && 'active'}`}
                                                  onClick={() => handleOptionClick('Systems')}
                                                >
                                                 <IoCubeSharp /> Systems
                                                </div>
                                                <div
                                                  className={`sidebar-option ${selectedOption === 'Bills' && 'active'}`}
                                                  onClick={() => handleOptionClick('Bills')}
                                                >
                                                 <FaEnvelope /> Bills
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












     
      </div>

     
  );
};


const Overview = () => <div>

                            <div style={{backgroundColor:'rgb(209,231,221)', margin:'5px', padding:"10px", borderRadius:"10px"}}>
                                 <div ><h5>Hello daniel efemena </h5></div>
                                 <div><p>congratuilations you are now level 1  verified. Verify level 2 below|:</p></div>
                                 <div><p>Turn on 2FA here </p></div>
                                 <div>BVN verification here </div>
                            </div>

                            <div style={{marginTop:"10px"}}>
                                <h2>Wallets</h2>
                            </div>

                            <hr className='mt-5' />






        <div style={{ display: "flex", gap: "50px" }}>
                    <div style={{ flex: 1, backgroundColor: "rgb(245, 247, 250)", padding: "20px", borderRadius: "10px",  width:"100%" }}>
                                   <div><p>NGN</p></div>
                                   <div><p># 0</p></div>
                                   <div style={{ display: "flex",  gap: "8rem" }}>
                                          <div><button className="btn btn-primary"style={{backgroundColor:'rgb(18,167,51)'}}><CgArrowTopRight />Send</button></div>
                                          <div><button className="btn btn-primary"style={{backgroundColor:'rgb(18,167,51)'}}><CgArrowBottomLeft />Receive</button></div>
                                    </div>
                  </div>


                    <div style={{ flex: 1, backgroundColor: "rgb(245, 247, 250)", padding: "20px", borderRadius: "10px", width:"100%" }}>
                              <div><p>USD</p></div>
                              <div><p>$ 0</p></div>
                              <div style={{ display: "flex",  gap: "8rem" }}>
                                    <div><button className="btn btn-primary"style={{backgroundColor:'rgb(18,167,51)'}}><CgArrowTopRight />Send</button></div>
                                    <div><button className="btn btn-primary"style={{backgroundColor:'rgb(18,167,51)'}}><CgArrowBottomLeft />Receive</button></div>
                              </div>
                  </div>


                  <div style={{ flex: 1, backgroundColor: "rgb(245, 247, 250)", padding: "20px", borderRadius: "10px", width:"100%"}}>
                              <div><p>GBP</p></div>
                              <div><p> 0</p></div>
                              <div style={{ display: "flex",  gap: "8rem" }}>
                                   <div><button className="btn btn-primary" style={{backgroundColor:'rgb(18,167,51)'}}><CgArrowTopRight />Send</button></div>
                                   <div><button className="btn btn-primary" style={{backgroundColor:'rgb(18,167,51)'}}><CgArrowBottomLeft />Receive</button></div>
                              </div>
                  </div>
        </div>


                <div style={{marginTop:"10px", display:"flex", justifyContent:"space-between"}}>
                    <div> <h2>History</h2></div>
                    <div className='mt-4'><Link>All records</Link></div>
                </div>

                <hr className='mt-5' />



                          
  </div>;
const Systems = () => <div>Systems Content</div>;
const Bills = () => <div>Bills Content</div>;
const Prices = () => <div>Prices Content</div>;
const History = () => <div>History Content</div>;
const Settings = () => <div>Settings Content</div>;

export default Dashboard;
