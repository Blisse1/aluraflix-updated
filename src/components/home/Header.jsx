import "./Header.css"
import { Link } from "react-router-dom";
import img from "/img/aluraflix-logo.png"

function Header({addClass, addSecondClass}) {
    return(
        <header>
            <nav>
                <img 
                    src={img}
                    width="100px"
                    heigth="100px"
                />
                <ul>
                    <li>
                        <Link to="/" className="visited"><button className={addSecondClass}>Home</button></Link>
                    </li>
                    <li>
                        <Link to="/video" className="visited"><button className={addClass}>New Video</button></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
