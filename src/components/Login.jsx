
import cardifylogo from "./images/Cardify Logo.png"
const Login = () => {
  return (
    <div>
         <div className="row justify-content-center mt-5">
                 <div className="col-md-6">
                         <div className="card">
                                 <div className="card-body">


                                            <img src={cardifylogo} style={{width:"7rem"}} />
                                            <h2 className=" mb-4" style={{fontFamily:""}}>Login</h2>
                                            <div><p style={{ fontWeight:"bold"}}>Log right into the Cardify experience, with your email address or <br />username, and password.</p></div>


              <form >
                            
                            <div className="mb-3">
                                    <label htmlFor="email" className="form-label" style={{ fontWeight:"bold"}}>
                                        Email or Username
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email address or username"
                                        style={{padding:'15px'}}
                                    />
                            </div>


                            <div className="mb-3">
                                        <label htmlFor="password" className="form-label" style={{ fontWeight:"bold"}}>
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            style={{padding:'15px'}}
                                        />

                                       
                            </div>

                            <div className="mt-5"><button type="submit" style={{backgroundColor:'rgb(24,152,29)', color:"white", width:"120px", height:"58px", border:"none", borderRadius:"8px"}}>
                                        Next</button>
                            </div>


                                <div className="my-3 fw-bold">New to Cardify? <a href="" style={{color:"rgb(24,152,29)",}}>Register now!</a></div>
                                <div className="fw-bold">Forogt password? <a href=""style={{color:"rgb(24,152,29)"}}>Click here</a></div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
