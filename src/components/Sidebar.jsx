import { Link } from "react-router-dom"


const Sidebar = () => {
  return (
      <main>
        <div>
            <Link to='/dashboard'><p>Overview</p></Link>
            <Link to={'system'}><p>Systems</p></Link>
            <div><p>Bills</p></div>
            <div><p>Prices</p></div>
            <div><p>History</p></div>
            <div>Settings </div>
        </div>
      </main>
  )
}

export default Sidebar
