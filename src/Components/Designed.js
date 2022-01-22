import React from 'react'
import { Link } from 'react-router-dom'
import  { ReactComponent as Arrow} from '../Assets/shared/desktop/arrow.svg'
import designedesktop from '../Assets/home/desktop/designed-for-everyone.jpg'
import designedtablet from '../Assets/home/tablet/designed-for-everyone.jpg'
import designedmobile from '../Assets/home/mobile/designed-for-everyone.jpg'
import useWindowWidth from './UseWindowWidth'


function Designed() {
    const windowwidth = useWindowWidth()
    const imageurl = windowwidth > 1150 ? designedesktop : windowwidth > 520 ? designedtablet : designedmobile
    return (
        <section className="designed__section container">
            <div className="designed__section-text-container">
                <div className="designed__section-text">
                    <h1>DESIGNED FOR <br/> EVERYONE</h1>

                    <p className="paragraph">
                        Photosnap can help you create stories that resonate with your audience. Our tools are designed for photographers of all levels, brand, businesses you name it.
                    </p>

                    <Link><p>VIEW THE STORIES</p> <Arrow className="arrow"/></Link>

                </div>
            </div>
            <div className="designed__section-image-container">
                <img src={imageurl} alt="" />
            </div>
        </section>
    )
}

export default Designed
