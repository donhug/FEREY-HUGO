import './header.css'
import {HashLink} from 'react-router-hash-link'
import {useContext, useState} from "react"
import {ThemeContext} from "../../context/ThemeContext.jsx"

function Header() {
    const [Open, setOpen] = useState(false)
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <header>
            <div className="header-container">
                <div className="header-top">
                    <div className="header-logo">
                        <a href="/">
                            H.
                        </a>
                    </div>
                    <div className="header-actions">
                        <button onClick={toggleTheme} className="theme-btn theme-btn--mob" aria-label="mode sombre">
                            <i className={theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
                        </button>
                        <button onClick={() => setOpen(!Open)} className="header-btn" aria-label="Menu de navigation">
                            <i className={Open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                        </button>
                    </div>

                </div>

                <div className={`header-nav header-color ${Open ? 'open' : ''}`}>
                    <HashLink to="/#projets">Projets</HashLink>
                    <HashLink to="/#section-technos">Compétences</HashLink>
                    <HashLink to="/#section-about">A propos</HashLink>
                    <HashLink to="/#contact">Contact</HashLink>

                    <button onClick={toggleTheme} className="theme-btn theme-btn--desk" aria-label="mode sombre">
                        <i className={theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
                    </button>
                </div>

            </div>
        </header>
    )
}
export default Header;