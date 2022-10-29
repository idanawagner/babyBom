
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        
        <nav className="navbar ">
            <div className="container">
                <a className="navbar-brand" href="#"></a>

                <div className="nav">
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">INICIO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">PRODUCTOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">DUDAS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACTO</a>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-outline-success">
                            <CartWidget/>
                        </button>
                    </li>
                </div> 
            </div>
      </nav>
    )
}
  
  export default NavBar

