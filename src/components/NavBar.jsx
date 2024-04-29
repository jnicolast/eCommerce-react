import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar-container" role="navigation">            
            <div className="burger-menu">
                <Link to="/"><img src="src\assets\logo.jpg" style={{ width: '60px' }} /></Link>               
            </div>
            <nav>
                <Link to="/category/smartphones">Smartphones</Link>
                <Link to="/category/laptops">Laptops</Link>
                <Link to="/category/home-decoration">Hogar</Link>
            </nav>
            <CartWidget />
        </div>
    )
}

export default NavBar