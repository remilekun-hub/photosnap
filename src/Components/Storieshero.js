import React from 'react'
import { Link } from 'react-router-dom'
import storyherodesktop from '../Assets/stories/desktop/moon-of-appalacia.jpg'
import storyherotablet from '../Assets/stories/tablet/moon-of-appalacia.jpg'
import storyheremobile from '../Assets/stories/mobile/moon-of-appalacia.jpg'
import useWindowWidth from './UseWindowWidth'


function Storieshero() {

    const windowwidth = useWindowWidth()
    const imageurl = windowwidth >= 1100 ? storyherodesktop : windowwidth > 520 ? storyherotablet : storyheremobile
    return (
        <section className="storieshero__section container">
            <div className="storieshero__section-image-container">
                <img src={imageurl} alt="moon-of-appalacia"/>
            </div>
            <div className="storieshero__section-text-container">
                <div className="storieshero__section-text-container-text">
                    <div className="storieshero__section-text-container-text--paragraph">
                        <h5>LAST MONTH'S FEATURED STORY</h5>
                        <h1>
                            HAZY FULL <br/>
                            MOON OF <br/>
                            APPALACHIA
                        </h1>
                        <p>March 2nd 2021 <span>by Jonhn AppleSeed</span></p>
                        <p>
                            The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.
                        </p>
                        <Link to="#">
                            <p>READ THE STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="" fill-rule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Storieshero
