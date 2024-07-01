import "./styles/Header.css"

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
                        <button>New Video</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
