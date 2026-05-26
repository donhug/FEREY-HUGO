import './header.css'
import {useState} from 'react'

function Header() {
    const [Open, setOpen] = useState(false)
    return (
        <header>
            <div className="header-container">
                <div className="header-top">
                    <div className="header-logo">
                        <h1>
                            H.
                        </h1>
                    </div>
                    <button onClick={() => setOpen(!Open)} className="header-btn">
                        <i className={Open ?"fa-solid fa-xmark" : "fa-solid fa-bars" }></i>
                    </button>
                </div>
                <div className={`header-nav ${Open ? 'open' : ''}`}>
                    <a href="/">A propos</a>
                    <a href="/">Projets</a>
                    <a href="/">Compétences</a>
                    <a href="/">Contact</a>
                </div>
            </div>
        </header>
    )
}
export default Header;