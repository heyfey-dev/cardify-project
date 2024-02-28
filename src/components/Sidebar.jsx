import { Link } from "react-router-dom"


const Sidebar = () => {
  return (
      <main>
        <div>
            <Link to='/dashboard'><p>Overview</p></Link>
            <Link to={'system'}><p>Systems</p></Link>
            <Link to={'bills'}><p>Bills</p></Link>
            <Link to={'prices'}><p>Prices</p></Link>
            <Link to={'history'}><p>History</p></Link>
            <Link to={'settings'}>Settings</Link>
        </div>
      </main>
  )
}

export default Sidebar
