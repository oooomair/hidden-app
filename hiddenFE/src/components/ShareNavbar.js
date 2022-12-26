import sun from '../assets/sun.svg'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import moon from '../assets/moon.svg'


const ShareNavbar = () => {

  const [{ themeBody, themeInput, isDark }, toggleTheme] = useContext(ThemeContext);

    return (
        <div className="navbar">
                <ul>
                    <Link style={{ textDecoration: 'none', color: themeBody.color }} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: themeBody.color }} to='/stories'>
                        <li>Stories</li>
                    </Link>
                </ul>
                <img src={isDark?sun:moon} onClick={toggleTheme} alt="sun" />
            </div>
    )
}

export default ShareNavbar