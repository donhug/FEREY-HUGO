import './header.css'
import {useState} from 'react'

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
                    <a href="#section-about">A propos</a>
                    <a href="#projets">Projets</a>
                    <a href="#section-technos">Compétences</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </header>
    )
}
export default Header;