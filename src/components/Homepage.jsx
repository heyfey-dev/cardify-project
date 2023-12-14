import logo from './images/Cardify Logo.png';
import homepic from './images/homepic.svg'
import appstore from './images/download-app-store-black.svg'
import playstore from './images/download-google-store-black.svg'
import message from './images/message.svg'
import secondicon from './images/secondicon.svg'
import cardifyapp from './images/Cardifyapp.gif'
import cardifywallet from './images/cardifywallets.jpg'
import cardifycards from './images/paybills.png'



import './App.css'
import Homebuycodes from './H/Homebuycodes';

const Homepage = () => {

    


  return (
    <div className="App">
      <div className="container">



                <div className='navbar d-flex  flex-column flex-md-row align-items-center justify-content-between  '>
                      <div className='mb-3 mb-md-0'>
                        <img src={logo} className='card-logo mg-fluid ' alt="" />
                      </div>

                      <div className='d-flex gap-3 flex-column flex-md-row gap-3 mb-3 mb-md-0'>
                            <ul className='list-unstyled d-flex gap-3 mb-0'>
                              <li>Home</li>
                              <li>Systems</li>
                              <li>Learn</li>
                              <li>Company</li>
                            </ul>
                      </div>

                      <div className=' btns gap-3 d-flex flex-column flex-md-row gap-3'>
                            <button className='btn '>Log in</button>
                            <button className='btn2 '>Sign up</button>
                      </div>
                </div>
      
      </div>










      <section className='container mb-5'>
                    <div className='d-flex flex-column flex-md-row home-cnt'>
                              {/* Left Content */}
                              <div className='my-5'>
                                <div><h1 className='thiscnt fw-bold'>Unlock more ways to </h1></div>
                                <div><h1 className='thatcnt fw-bold'>spend, exchange, save</h1></div>
                                <div className='my-4'>
                                  <p>Cardify Africa lets you exchange, spend and save money across several digital
                                    <br /> wallets with NGN -Exchange, Buy vouchers, Pay utility bills leveraging fiat and other
                                    <br /> digital wallets seamlessly.</p>
                                </div>

                                <div className='d-flex appplay my-5'>
                                  <div>
                                    <img src={playstore} className='img-fluid' alt="Playstore" />
                                  </div>

                                  <div>
                                    <img src={appstore} className='img-fluid' alt="Appstore" />
                                  </div>
                                </div>

                                <div className='d-flex flex-column flex-md-row justify-content-between gap-3'>
                                  <div style={{ marginRight: '30px' }}>
                                    <div><img src={message} alt="Message" className='img-fluid' /></div>
                                    <p>24/7 human <br />customer service</p>
                                  </div>

                                  <div style={{ marginRight: '12rem' }}>
                                    <div><img src={secondicon} alt="Second Icon" className='img-fluid' /></div>
                                    <p>transactions at no <br /> extra fees</p>
                                  </div>
                                </div>
                              </div>

                              {/* Right Content (Image) */}
                              <div>
                                <img src={homepic} alt="Home Picture" className='img-fluid' />
                              </div>
                    </div>
    </section>









    <main className='container  '>
              <div className=''>
                      <div className='text-center bigT'><h1 className='fw-bold'>Join the cardify tribe</h1></div>
                      <div className='text-center mt-4 smallT'><p className=''>Exchange, Save and Spend across digital wallets. We seek to be your one stop <br /> shop for convenient inter-wallet transactions using best technologies.</p></div>


                      <table className="table my-5">
                              <tbody className='text-center'>
                                <tr className=''>
                                  <td className='border border-left-0 border-bottom-0' >
                                    <div className='Bigt'>30k+</div>
                                    <div>Verified users</div></td>
                                  <td className='border border-left-0 border-right-0 border-bottom-0'>
                                  <div className='Bigt'>10+</div>
                                    <div>Assests supported</div>
                                  </td>
                                  <td className='border border-left-0 border-right-0 border-bottom-0'><div className='Bigt'>100k+</div>
                                    <div>Executed</div>
                                    </td>
                                </tr>
                              
                                
                              </tbody>
                        </table>

              </div>
    </main>






    <div className='container' style={{backgroundColor:'rgb(0,0,0)',}}>
                    <div className='text-center'>
                        <div><h6 style={{color:'rgb(5,121,40)'}}>CARDIFY AFRICA WALLETS</h6></div>
                        <div><h1 className='text-light'>Save, Spend & Exchange</h1></div>
                        <div><p className='text-light'>Unlock more ways to spend, save and exchange on Cardify Africa wallets.</p></div>
                    </div>



            <div style={{display:'flex', padding:'80px', gap:'10rem'} }className='container'>
                  {/* left bar */}
                    <div className=''>


                          {/* receive and save optio */}
                          <div className='firscard my-5 ' style={{backgroundColor:'rgb(22,22,22)', padding:'50px', borderRadius:'20px', alignItems:'center'}}>
                              <div>
                                {/* icon */}
                                <h5 className='text-primary'>RECEIVE & SAVE</h5>
                              </div>
                              <p className='text-light'>Cardify Africa NGN and USD wallets allow you <br />  receive, save across multiple digital wallets.</p>
                          </div>



                          <div className='my-5' style={{backgroundColor:'rgb(22,22,22)', borderRadius:'20px', padding:'50px' }}>
                              <div >
                                {/* icon */}
                                <h5 className='text-primary'>SEND WITH CARDIFY</h5>
                              </div>
                              <p className='text-light'>Leveraging various digital wallets, send funds <br /> to other cardify users as well as external <br /> wallets seamlessly.</p>
                          </div>




                          <div className='my-5' style={{backgroundColor:'rgb(22,22,22)',borderRadius:'20px', padding:'50px' }} >
                              <div>
                                {/* icon */}
                                <h5 className='text-primary'>SPEND YOUR WALLETS</h5>
                              </div>
                              <p className='text-light'>Be limitless by using your Cardify wallets to <br /> fund your dollar card, pay bills and even <br />exchange.</p>
                          </div>

                    </div>




                    {/* right bar */}
                    <div style={{backgroundColor:'rgb(22,22,22)', marginTop:'50px'}}>
                        <div  className=' p-4' style={{height:'5rem'}}>
                            <div style={{backgroundColor:'black', borderRadius:'20px', marginTop:'50px'}}>
                              <img src={cardifyapp} style={{width:'25rem', height:'30rem'}}/>
                            </div>
                        </div>
                    </div>
            </div>






       





    </div>



    <div className='container d-flex' style={{gap:'5rem' ,marginTop:'6rem'}} >
                        
                          {/* left side */}


              <div><img src={cardifywallet} style={{width:'35rem', borderRadius:'30px'}} /></div>


                          {/* right side */}


              <div className='' style={{marginTop:'70px'}}>
                    <h1 className='my-5' style={{fontSize:'50px', fontWeight:'bold'}}>Cardify Wallets</h1>
                    <div>
                      <p>Leverage our fiat and digital wallet options to save, spend and      <a href="">here</a> <br/>exchange.</p>
                      <p>Learn more about the wallets</p>
                    </div>

                    <div>
                      <ul>
                        <li>NGN Wallet</li>
                        <li>USD wallet</li>
                        <li>GBP wallet (coming soon)</li>
                      </ul>
                    </div>

                    <a href="">Goto Cardify Wallets</a>
              </div>
        </div>





        <div className='container d-flex' style={{gap:'5rem' ,marginTop:'6rem'}} >
                        
                        {/* left side */}
                  <div className='' style={{marginTop:'70px'}}>
                  <h1 className='my-5' style={{fontSize:'50px', fontWeight:'bold'}}>Cardify Virtual Dollar Cards!!!</h1>
                  <div>
                    <p>Pay for monthly subscriptions to services like Apple Music, Spotify, and Netflix
                    as well as shopping/paying at your preferred online checkouts.</p>
                    <p>Learn more about the wallets</p>
                  </div>

                  <div>
                    <ul>
                      <li>NGN & Stablecoins Funding</li>
                      <li>Fund as low as 5USD</li>
                      <li>Fund as low as 5USD</li>
                    </ul>
                  </div>

                  <a href="">Goto Cardify Cards</a>
            </div>

           

                        {/* right side */}

                        <div><img src={cardifycards} style={{width:'35rem', borderRadius:'30px', backgroundColor:'rgb(247,224,205)', }} /></div>

            
      </div>





      <Homebuycodes/> 






    </div>
  );
}

export default Homepage;
