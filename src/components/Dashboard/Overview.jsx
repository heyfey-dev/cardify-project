
const Overview = () => {
  return (
    <div>
            <section>
                <div className="" style={{backgroundColor:"rgb(209,231,221)"}}>
                            <div className="m-3"><p>Hello, daniel efemena</p></div>
                            <div className="m-3"><p>Congratulations, you are now Level 1 verified. Verify Level 2 below:</p></div>
                            <div className="m-3"><p>Turn on 2FA Here</p></div>
                            <div className="m-3"><p>BVN verification Here</p></div>
                </div>


                <p>Wallets</p>
                <hr />

                {/* cards */}
                <div className="d-flex" style={{gap:"50px"}}>

                    <div className="p-3" style={{border:"1px solid black", borderRadius:"8px", backgroundColor:"rgb(245,247,250)"}}>
                        <div>
                            <span>NGN</span>
                        </div>
                        <div>
                            <span>#</span>
                            <span>0</span>
                        </div>
                        <div style={{gap:"20px"}} className="d-flex"> 
                            <div><button  style={{backgroundColor:"rgb(18,167,51)", color:"white", border:"none",height:"40px", borderRadius:"8px"}}>Send</button></div>
                            <div><button  style={{backgroundColor:"rgb(18,167,51)", color:"white", border:"none", height:"40px", borderRadius:"8px"}}>receive</button></div>
                            
                        </div>
                    </div>



                    <div className="p-3" style={{border:"1px solid black", borderRadius:"8px", backgroundColor:"rgb(245,247,250)"}}>
                        <div>
                            <span>USD</span>
                        </div>
                        <div>
                            <span>$</span>
                            <span>0</span>
                        </div>
                        <div style={{gap:"20px"}} className="d-flex"> 
                            <div><button  style={{backgroundColor:"rgb(18,167,51)", color:"white", border:"none",height:"40px", borderRadius:"8px"}}>Send</button></div>
                            <div><button  style={{backgroundColor:"rgb(18,167,51)", color:"white", border:"none",height:"40px", borderRadius:"8px"}}>receive</button></div>
                            
                        </div>
                    </div>



                    <div className="p-3" style={{border:"1px solid black", borderRadius:"8px", backgroundColor:"rgb(245,247,250)"}}>
                        <div>
                            <span>GBP</span>
                        </div>
                        <div>
                            <span>0</span>
                        </div>
                        <div style={{gap:"20px"}} className="d-flex"> 
                            <div><button>Send</button></div>
                            <div><button>receive</button></div>
                            
                        </div>
                    </div>

                </div>

              <div className="d-flex mt-4" style={{justifyContent:"space-between"}}>
                <div><span>History</span></div>
                <div><span>All records</span></div>
              </div>
                <hr />
            </section>
    </div>
  )
}

export default Overview
