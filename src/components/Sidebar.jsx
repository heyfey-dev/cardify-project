import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

const Sidebar = () => {
  return (
    <main>
      <div>
        <Link to='/dashboard/index'><p>Overview</p></Link>
        <div className="dropdown">
          <a href=""className="dropdown-toggle"  id="dropdownMenuButton" data-bs-toggle="dropdown" >
            Systems
            </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><Link to="/systems/wallets" className="dropdown-item">Wallets</Link></li>
            <li><Link to="/systems/cards" className="dropdown-item">Cards</Link></li>
          </ul>
        </div>
        <Link to='/bills'><p>Bills</p></Link>
        <Link to='/prices'><p>Prices</p></Link>
        <Link to='/history'><p>History</p></Link>
        <Link to='/settings'><p>Settings</p></Link>
      </div>
    </main>
  )
}

export default Sidebar;
