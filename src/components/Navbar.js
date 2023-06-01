import { Link } from "react-router-dom";

import "../styles/navbar.css"

const Navbar = ({
    toggle
}) => {
    return ( 
        <div className="navbar-container">
            <ul className="Link-List">
                <li className="Link"><Link to="/">Home</Link></li>
                <li className="Link"><Link to="/about">About</Link></li>
                <li className="Link"><Link to="/contact">Contact</Link></li>
                <li className="Link" onClick={toggle}>Cart</li>
            </ul>

        </div>
);
}
// help
export default Navbar;
