import React from 'react'
import { Link } from 'react-router-dom'
import herodesktop from '../Assets/shared/desktop/bg-beta.jpg'
import herotablet from '../Assets/shared/tablet/bg-beta.jpg'
import heromobile from '../Assets/shared/mobile/bg-beta.jpg'
import useWindowWidth from './UseWindowWidth'




function Cta() {

    const windowwidth = useWindowWidth()
    const imageurl = windowwidth >= 1100 ? herodesktop : windowwidth > 520 ? herotablet : heromobile

    return (
        <section className="cta__section container">
            <div className="cta__section-img-container">
                <img src={imageurl} alt="backbround display" />
            </div>
            <div className="cta-text">
                <h1>WE'RE IN BETA.<br/> GET YOUR INVITE <br/> TODAY!</h1>
                <Link to="#">
                    <p>GET AN INVITE</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6" /></g></svg>
                </Link>
            </div>
        </section>
    )
}

export default Cta
