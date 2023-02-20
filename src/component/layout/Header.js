import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Header() {
    return (
        <>
            <header>
                <div className="header-left">
                    <img alt="img-logo" />
                </div>
                <div className="header-mid">
                    <ul>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/Animal">Animal</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="header-right">
                    <ul>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>Register</li>
                        <li className="header-right-user">
                            <FaUser />
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
