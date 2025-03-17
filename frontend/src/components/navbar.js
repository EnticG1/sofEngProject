import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Landing page (edit later)</h1>
                </Link>
                <div className="navbarNavigation">
                    {/* Link to other part of the website */}
                </div>
            </div>
        </header>
    )
}

export default Navbar