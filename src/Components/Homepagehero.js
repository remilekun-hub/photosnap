import React from 'react'
import { Link } from 'react-router-dom'
import herodesktop from '../Assets/home/desktop/create-and-share.jpg'
import herotablet from '../Assets/home/tablet/create-and-share.jpg'
import heromobile from '../Assets/home/mobile/create-and-share.jpg'
import useWindowWidth from './UseWindowWidth'

function Homepagehero() {
    const windowwidth = useWindowWidth()
    const imageurl = windowwidth >= 1150 ? herodesktop : windowwidth > 520 ? herotablet : heromobile
    return (
        <section className="homehero-section container">
            
            <div className="hero-text-container">
                <div className="hero-text">
                    <div className="text">
                
                        <h1>CREATE AND <br/>SHARE YOUR <br/> PHOTO STORIES.</h1>

                        <p className="paragraph">
                            Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
                        </p>

                        <Link to="/#">
                            <p>GET AN INVITE</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </Link>
                    </div>
                </div>    
            </div>

            <div className="image-container">
                <img src={imageurl} alt="create and share" className="hero-image"/>
            </div>

        </section>
    )
}

export default Homepagehero
