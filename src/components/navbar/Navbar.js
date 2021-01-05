import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container navbar__content">
                <div className="navbar__brand">
                    <Link to="/">WatchList</Link></div>
                <div className="navbar__actions">
                    <Link to="/watchlist"> Watch List</Link>
                    <Link to="/watched"> Watched</Link>
                    <Link to="/add" className="btn">Add+</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
