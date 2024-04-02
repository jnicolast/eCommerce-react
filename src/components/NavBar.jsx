import CartWidget from "./CartWidget"

function NavBar(){
    return <div className="navbar-container" role="navigation">
        <div className="burger-menu">
            <img src="src\assets\logo.jpg" style={{ width: '60px' }} />
        </div>
        <nav className="nav">
            <a>PRODUCTOS</a>
        </nav>
        <CartWidget />
    </div>
}

export default NavBar