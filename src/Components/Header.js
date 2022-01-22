import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/shared/desktop/logo.svg'
import useWindowWidth from './UseWindowWidth'
import navtoggle from '../Assets/shared/mobile/menu.svg'
import navclose from '../Assets/shared/mobile/close.svg'


function Header() {
    const [Menu, OpenMenu] = useState(false)
    const windowwidth = useWindowWidth()
    function hidemenu() {
        let links = [...document.querySelectorAll('.mobile-link')];
        console.log(links)
        links.forEach(link => link.addEventListener('click', () => {
            OpenMenu(false)        
        }));
    }
    hidemenu()
    return (
        <header>
            <nav>
                <Link to="/">
                    <img src={logo} alt="header logo" />
                </Link>
                {windowwidth > 767 && <div className="desktopmenu">
                    <ul className="nav-menu">
                            
                        <li className="nav-item"><Link to="/stories">Stories</Link></li>
                        <li className="nav-item"><Link to="/features">Features</Link></li>
                        <li className="nav-item"><Link to="/pricing">Pricing</Link></li>
                    </ul>        
                </div>}

                {windowwidth > 767 && <Link to="#" className="cta">GET AN INVITE</Link>}

                {windowwidth <= 767 && <div className={`mobilemenu ${Menu ? 'showmenu' : "" }`}>
                    <ul className="nav-menu">
                        
                        <li className="nav-item mobile-link"><Link to="/stories">Stories</Link></li>
                        <li className="nav-item mobile-link"><Link to="/features">Features</Link></li>
                        <li className="nav-item mobile-link"><Link to="/pricing">Pricing</Link></li>
                    </ul>   
                    <Link to="#" className="cta">GET AN INVITE</Link>
                </div>}

               
                {windowwidth <= 767 && 
                <div className="nav-toggle" onClick={()=> OpenMenu(!Menu)}>
                    {Menu ? <img src={navclose} alt="toggle"/> : <img src={navtoggle} alt="toggle"/>}
                </div>}
            </nav>
            
        </header>
        )
    }

export default Header
