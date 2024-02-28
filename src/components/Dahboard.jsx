import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"


const Dahboard = () => {
  return (
    <div className="d-flex align-items-center justify-content-start">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Dahboard
