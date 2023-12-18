import { BsBank2 } from "react-icons/bs";
import { GiShinyPurse } from "react-icons/gi";
import { RiTicket2Line } from "react-icons/ri";
import { TiTicket } from "react-icons/ti"
import './App.css'
import cardifydigitalbusinesscards from "./images/cardifydigitalbusinesscards.png"
import paybills from './images/paybills.png'
import Frequentlyasked from "./Videocomponent";
const Homebuycodes = () => {
  return (
    <div>

<div className='container d-flex' style={{gap:'5rem' ,marginTop:'6rem'}} >
                        
                        {/* left side */}


            <div><img src={cardifydigitalbusinesscards} style={{width:'35rem', borderRadius:'30px'}} /></div>


                        {/* right side */}


            <div className='' style={{marginTop:'70px'}}>
                  <h1 className='my-5' style={{fontSize:'50px', fontWeight:'bold'}}>Cardify Digial Business <br />Cards</h1>
                  <div>
                    <p>Create, customize, and instantly share digital business cards with <a href="">here</a> <br /> anyone, anywhere with a tap or scan.</p>
                    <p>Learn more about Cardigy digital cards</p>
                  </div>

                  <div>
                    <ul>
                      <li>One Tap Magic</li>
                      <li>QR codes</li>
                      <li>Dedicated Link/Page</li>
                    </ul>
                  </div>

                  <a href=""> App Intergrated support</a>
            </div>
      </div>






            <div className="container mt-5  ">

                        <div className="text-center">
                            <h2>Experience freedom with Cardify Bills</h2>
                        </div>


                        <div className="row row-cols-1 row-cols-md-2 g-3">
  <div className="col d-flex gap-3 my-5">
  <div><BsBank2 className="w-100" style={{ color: 'black', fontSize: '8rem' }}/></div>
    <div className="Buy-codes border p-3 custom-width  " style={{borderRadius:'20px'}}>
     
      <div>
        <h4>Buy codes</h4>
        <p>From Jumia codes to shoprite codes in Nigeria, from <br />Uber to Just Eat in the UK, use Cardify bills to buy a <br />  gift code on popular platforms in Nigeria, ghana,<br /> South Africa, USA and UK.</p>
      </div>
    </div>
  </div>

  <div className="col d-flex gap-3  my-5 ">
  <div><GiShinyPurse className="w-100" style={{ color: 'black', fontSize: '8rem' }} /></div>
    <div className="Buy-codes border p-4 custom-vouchers" style={{borderRadius:'20px'}}>
     
      <div>
        <h4>Vouchers</h4>
        <p>Cardify Bills allow you purchase the vouchers you <br />   need, from mtn to other network vouchers to <br /> lycamobile vouchers, we 've got you covered. Always!</p>
      </div>
    </div>
  </div>

  <div className="col d-flex gap-3 ">
  <div><RiTicket2Line className="w-100" style={{ color: 'black', fontSize: '8rem' }}/></div>
    <div className="Buy-codes border p-3 custom-width  " style={{borderRadius:'20px'}}>
      
      <div>
        <h4>Direct Top Up</h4>
        <p>Topping up your lines for mobile data or recharge is seamless with fiat and digital wallet payment options on Cardify Bills.</p>
      </div>
    </div>
  </div>

  <div className="col d-flex gap-3 ">
  <div><TiTicket className="w-100" style={{ color: 'black', fontSize: '8rem' }}/></div>
    <div className="Buy-codes border p-3 custom-width   " style={{borderRadius:'20px'}}>
    
      <div>
        <h4>Tickets</h4>
        <p>A ticket round you is just around when you are around Cardify bills.</p>
      </div>
    </div>
  </div>
</div>


              

             </div>

             <div className="container" style={{marginTop:'100px'}}>
                   
                      <div className="d-flex  "  style={{gap:"80px", backgroundColor:"rgb(250,250,250)", padding:'50px', height:"32rem", borderRadius:"20px"}}>
                          <div  style={{marginTop:"120px"}}>
                             {/* left side */}

                              <div>
                                 <h3 className="fw-bold  " style={{fontSize:"35px", }}>Pay bills on the go</h3>
                                  
                                  <p>Cardify Bills allow you buy digital  items or bills with both Naira and Digital <br /> Currencies, Buy vouchers, gift codes, top up airtime in Nigeria, Ghana, <br /> South Africa, United Kingdom, United States with Naira and Digital <br /> Currencies.</p>
                                </div>  

                              <div>
                                  <button style={{backgroundColor:"rgb(18,167,51)", color:'white', border:"none"}}>Get started</button>
                              </div>
                          </div>

                            {/* right side */}
                            <div>
                              <img src={paybills} style={{width:"30rem"}}/>
                            </div>

                      </div>

                  

             </div>

        <Frequentlyasked/>

    </div>
  )
}

export default Homebuycodes
