import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
import { Link } from 'react-router-dom'
import { ThemeContext } from "../context/theme";
import { useEffect, useState, useContext  } from "react";

const Home = () => {

    const [{ themeBody, themeInput, isDark }, toggleTheme] = useContext(ThemeContext);
    const [homeBack, setHomeBack ] = useState('')

    useEffect(() => {
        const { innerWidth: width, innerHeight: height } = window;
        if (width < 1200) {
            setHomeBack(themeBody.homeBgRes)
        } else if (height < 750) {
            setHomeBack(themeBody.homeBgRes)
        } else {
            setHomeBack(themeBody.homeBg)
        }
    }, [themeBody])

        window.addEventListener('resize', function () {
            const { innerWidth: width, innerHeight: height } = window;
            if (width < 1200) {
                setHomeBack(themeBody.homeBgRes)
            } else if (height < 750) {
                setHomeBack(themeBody.homeBgRes)
            } else {
                setHomeBack(themeBody.homeBg)
            }
        })

    return (
        <div style={{background: homeBack}} className='home'>
            <div className="home__stuff">
            <div className="home__navbar">
                <h5 id='yellow' className='yellow' > hidden <span className='home__smile'>:)</span></h5>
                <img src={isDark?sun:moon} onClick={() => {toggleTheme()}} alt="sun" />
            </div>
            <div className="home__main">
                <h2>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/share'>
                    <span id='home__share'>share</span>
                </Link>
                your</h2>
                <h1>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/stories'>
                    <span id='home__stories'>Stories</span>
                    </Link>
                </h1>
                <h3>with the world anonymously</h3>
            </div>
            <div className="home__pinky">
                <h4>click on secrets or share</h4>
                <h4>created by OOOOMAIR</h4>
            </div>
            </div>
            <div className="ocean">
                <div style={{background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='${themeBody.wave}'/%3E%3C/svg%3E")`}} className="wave"></div>
                <div style={{background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='${themeBody.wave}'/%3E%3C/svg%3E")`}} className="wave"></div>
                <div style={{background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='${themeBody.wave}'/%3E%3C/svg%3E")`}} className="wave"></div>
            </div>
        </div>
    )
}

export default Home
