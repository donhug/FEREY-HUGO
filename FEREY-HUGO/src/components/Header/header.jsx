import './header.css'
import {useState } from 'react'
import { HashLink } from 'react-router-hash-link'

function Header() {
    const [Open, setOpen] = useState(false)
    return (
        <header>
            <div className="header-container">
                <div className="header-top">
                    <div className="header-logo">
                        <a href="/">
                            H.
                        </a>
                    </div>
                    <button onClick={() => setOpen(!Open)} className="header-btn">
                        <i className={Open ?"fa-solid fa-xmark" : "fa-solid fa-bars" }></i>
                    </button>
                </div>
                <div className={`header-nav ${Open ? 'open' : ''}`}>
                    <HashLink to="/#projets">Projets</HashLink>
                    <HashLink to="/#section-technos">Compétences</HashLink>
                    <HashLink to="/#section-about">A propos</HashLink>
                    <HashLink to="/#contact">Contact</HashLink>
                </div>
            </div>
        </header>
    )
}
export default Header;