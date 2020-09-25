import Link from 'next/link'
import '../styles/navbarComponent.scss'

class Navbar extends React.Component {
    render() {
        return (
            <div className="nbc-container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img className="nbc-brand-icon" src="icons/wtc-icon.ico" />
                            <a>WorldTimeData</a>
                        </a>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nbc-li nav-item active">
                                <Link href="/">
                                    <a className="nav-link">Home</a>
                                </Link>
                            </li>
                            <li className="nbc-li nav-item active">
                                <Link href="/about">
                                    <a className="nav-link">About</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    };
};


export default Navbar;