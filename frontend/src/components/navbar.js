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
              <Link to="/">
                  <h1>Name (edit later)</h1>
              </Link>
              <nav className='nav-menu'>
                {user && ( // User When logged in
                  <div> 
                    <span>{user.email}</span>
                    <button onClick={handleLogoutClick}>Logout</button>
                  </div>
                )}
                {!user && ( // User when logged out
                  <div>
                      <Link to="/login">Login</Link>
                  </div>
                )}
                <div className="navbarNavigation">
                    {/* User when logged out */}
                </div>
              </nav>
          </div>
      </header>
  )
}

export default Navbar