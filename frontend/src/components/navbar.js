import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleLogoutClick = () =>{
    logout()
  }

  return(
    <header>
      <div className="container">

        <Link to="/" className='logo-name'>
          <h1>Breadily</h1>
        </Link>

        <nav className='nav-menu'>
          <div className="navbarNavigation">
            {/* Menu, about us, FAQ */}
            <Link to="/menu">
              <h1>Menu</h1>
            </Link>
            <Link to="/aboutUs">
              <h1>About Us</h1>
            </Link>
            <Link to="/faq">
              <h1>FAQ</h1>
            </Link>
          </div>

          <div className="divider"></div>
          {user && ( // User When logged in
            <div className='logged-in'>
              <Link to="/" className='logo-name'>
                <h1>Cart</h1>
              </Link>
              <button className="button logoutButton" onClick={handleLogoutClick}>Logout</button>
            </div>
          )}

          {!user && ( // User when logged out
            <div className='login-button'>
              <Link to="/login" className='login-button'><h1>Login</h1></Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar