import React from 'react'
import { Link } from 'react-router-dom'
import  { ReactComponent as Arrow} from '../Assets/shared/desktop/arrow.svg'
import beautiful from '../Assets/home/desktop/beautiful-stories.jpg';
import beautifultablet from '../Assets/home/tablet/beautiful-stories.jpg';
import beautifulmobile from '../Assets/home/mobile/beautiful-stories.jpg';
import useWindowWidth from './UseWindowWidth';


function Beautiful() {
    const  windowwidth = useWindowWidth()
    const imageurl = windowwidth > 1150 ? beautiful : windowwidth > 520 ? beautifultablet : beautifulmobile
    return (
        <section className="beautiful__section container">

            <div className="beautiful__section-image-container">
                <img src={imageurl} alt="" className="image" />
            </div>
            
            <div className="beautiful__section-text-container">
                <div className="beautiful__section--text">
                    <h1>BEAUTIFUL <br/> STORIES <br/>EVERY TIME</h1>

                    <p className="paragraph">
                        We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.
                    </p>

                    <Link to="#"><p>VIEW THE STORIES</p> <Arrow className="arrow"/></Link>
                </div>

            </div>
            

        </section>
    )
}

export default Beautiful
