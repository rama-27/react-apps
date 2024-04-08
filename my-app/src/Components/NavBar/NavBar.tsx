import { Link } from "react-router-dom"
import "./NavBar.css"
export default function NavBar(){
    return  <nav>
      <input type="checkbox" id="check"/>
      <label  className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">DesignX</label>
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><Link to="/movie-list">Movie-List</Link></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </nav>
    
}