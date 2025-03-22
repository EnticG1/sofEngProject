import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
  const { logout } = useLogout()

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
                <div> {/*Later replace with profile*/}
                  <button onClick={handleLogoutClick}>Logout</button>
                </div>
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