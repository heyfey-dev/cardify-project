import logo from './images/Cardify Logo.png';
import homepic from './images/homepic.svg'
import appstore from './images/download-app-store-black.svg'
import playstore from './images/download-google-store-black.svg'
import message from './images/message.svg'
import secondicon from './images/secondicon.svg'
import cardifyapp from './images/Cardifyapp.gif'
import cardifywallet from './images/cardifywallets.jpg'
import cardifycards from './images/paybills.png'
import { Link } from 'react-router-dom';



import './App.css'
import Homebuycodes from './Homebuycodes';

const Homepage = () => {

    


  return (
    <div className="App">
      <div className="container">



                <div className='navbar d-flex flex-column flex-md-row align-items-center justify-content-between'>
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
                            <button className='btn '><Link className='text-decoration-none' style={{color:"black", fontWeight:"bold", fontSize:'20px'}} to='/auth/login'>Login</Link></button>
                            <button className='btn2 '><Link className='text-decoration-none' style={{color:"white", fontWeight:'bold',  fontSize:'20px'}} to='/auth/signup'>Sign up</Link></button>
                      </div>
                </div>
      
      </div>










      <section className='container mb-5'>
  <div className='d-flex flex-column flex-md-row align-items-center home-cnt'>
    {/* Left Content */}
    <div className='my-5'>
      <div><h1 className='thiscnt fw-bold'>Unlock more ways to </h1></div>
      <div><h1 className='thatcnt fw-bold'>spend, exchange, save</h1></div>
      <div className='my-4'>
        <p>Cardify Africa lets you exchange, spend, and save money across several digital
          <br /> wallets with NGN -Exchange, Buy vouchers, Pay utility bills leveraging fiat and other
          <br /> digital wallets seamlessly.</p>
      </div>

      <div className='d-flex appplay my-5 flex-wrap'>
        <div className='me-3 mb-3 mb-md-0'>
          <img src={playstore} className='img-fluid' alt="Playstore" />
        </div>
        <div className='me-3'>
          <img src={appstore} className='img-fluid' alt="Appstore" />
        </div>
      </div>

      <div className='d-flex flex-column flex-md-row justify-content-between gap-3'>
        <div className='mb-3 mb-md-0'>
          <div><img src={message} alt="Message" className='img-fluid' /></div>
          <p className='text-center text-md-start'>24/7 human <br />customer service</p>
        </div>

        <div>
          <div><img src={secondicon} alt="Second Icon" className='img-fluid' /></div>
          <p className='text-center text-md-start'>transactions at no <br /> extra fees</p>
        </div>
      </div>
    </div>

    {/* Right Content (Image) */}
    <div className='d-flex justify-content-center'>
      <img src={homepic} alt="Home Picture" className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  </div>
</section>









   <main className='container'>
  <div className='text-center'>
    <h1 className='fw-bold'>Join the cardify tribe</h1>
  </div>
  <div className='text-center mt-4'>
    <p>Exchange, Save, and Spend across digital wallets. We seek to be your one-stop <br /> shop for convenient inter-wallet transactions using the best technologies.</p>
  </div>

  <div className="table-responsive my-5">
    <table className="table mx-auto">
      <tbody className='text-center'>
        <tr>
          <td className='border-0'>
            <div className='Bigt'>30k+</div>
            <div>Verified users</div>
          </td>
          <td className='border-0'>
            <div className='Bigt'>10+</div>
            <div>Assets supported</div>
          </td>
          <td className='border-0'>
            <div className='Bigt'>100k+</div>
            <div>Executed</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>






<div className='container-fluid' style={{ backgroundColor: 'rgb(0,0,0)' }}>
  <div className='text-center py-5'>
    <h6 style={{ color: 'rgb(5,121,40)' }}>CARDIFY AFRICA WALLETS</h6>
    <h1 className='text-light'>Save, Spend & Exchange</h1>
    <p className='text-light'>Unlock more ways to spend, save, and exchange on Cardify Africa wallets.</p>
  </div>

  <div className='row justify-content-center'>
    {/* Left bar */}
    <div className='col-lg-6 col-md-12'>
      {/* Receive and Save option */}
      <div className='card bg-dark text-light my-4 p-4 rounded'>
        <h5 className='text-primary'>RECEIVE & SAVE</h5>
        <p className='text-light'>Cardify Africa NGN and USD wallets allow you to receive and save across multiple digital wallets.</p>
      </div>

      {/* Send with Cardify */}
      <div className='card bg-dark text-light my-4 p-4 rounded'>
        <h5 className='text-primary'>SEND WITH CARDIFY</h5>
        <p className='text-light'>Leverage various digital wallets to send funds to other Cardify users and external wallets seamlessly.</p>
      </div>

      {/* Spend Your Wallets */}
      <div className='card bg-dark text-light my-4 p-4 rounded'>
        <h5 className='text-primary'>SPEND YOUR WALLETS</h5>
        <p className='text-light'>Be limitless by using your Cardify wallets to fund your dollar card, pay bills, and even exchange.</p>
      </div>
    </div>

    {/* Right bar */}
    <div className='col-lg-4 col-md-12'>
      <div className='p-4 bg-dark rounded mt-4'>
        <div className='bg-black rounded'>
          <img src={cardifyapp} alt='Cardify App' className='img-fluid' />
        </div>
      </div>
    </div>
  </div>
</div>








    {/* <div className='container' style={{gap:'5rem' ,marginTop:'6rem', display: 'flex', flexDirection:'column'}} > */}
    <div className='container d-flex flex-sm-colu ' style={{gap:'5rem' ,marginTop:'6rem', }} >
                        
                          {/* left side */}
              <div className='col-lg-6 col-md-8 col-sm-12'><img src={cardifywallet} style={{width:'35rem', borderRadius:'30px'}} /></div>

                          {/* right side */}
              <div className='col-lg-6 col-md-8 col-sm-12 ' style={{marginTop:'70px'}}>
                    <h1 className='my-5' style={{fontSize:'50px', fontWeight:'bold'}}>Cardify Wallets</h1>
                    <div className=' mb-3'>
                      <p>Leverage our fiat and digital wallet options to save, spend and      <a href="">here</a> <br/>exchange.</p>
                      <p >Learn more about the wallets</p>
                    </div>

                    <div className=' mb-3'>
                      <ul>
                        <li>NGN Wallet</li>
                        <li>USD wallet</li>56
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
