import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <nav>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Vimlogo.svg"
                    width="100px"
                    heigth="100px"
                />
                <ul>
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button><Link to="/video">New Video</Link></button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
