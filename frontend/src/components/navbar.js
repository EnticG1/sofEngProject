import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Name (edit later)</h1>
                </Link>
                <nav>            
                  <div className="navbarNavigation">
                      {/* Link to other part of the website */}
                      <Link to="/login">Login</Link>
                  </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar