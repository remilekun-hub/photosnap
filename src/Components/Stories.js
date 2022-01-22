import React from 'react'
import useWindowWidth from './UseWindowWidth'
import { Link } from 'react-router-dom'


function Stories() {
    const windowwidth = useWindowWidth()

    let picture1 = "mountains.jpg"
    let picture2 = "cityscapes.jpg"
    let picture3 = "18-days-voyage.jpg"
    let picture4 = "architecturals.jpg"

    return (
        <section className="stories__section container">

            <div className="stories__section-image-container">
                <img src={windowwidth >= 1024
                            ? require('../Assets/stories/desktop/' + picture1).default 
                                : require('../Assets/stories/mobile/' + picture1).default} 
                    alt="mountains" 
                    className="stories-image"
                />
                <div className="text-wrapper">
                    <h3>The Mountains</h3>
                    <p className="author">by John Appleseed</p>
                    <Link to="#">
                        <p>READ STORY</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                    </Link>

                </div>
            </div>

            <div className="stories__section-image-container">
                <img src={windowwidth >= 1024 
                            ? require('../Assets/stories/desktop/' + picture2).default 
                                : require('../Assets/stories/mobile/' + picture2).default} 
                    alt="cityscapes" 
                    className="stories-image"
                />
                <div className="text-wrapper">
                    <h3>Sunset Cityscapes</h3>
                    <p className="author">by Benjamin Cruz</p>
                    <Link to="#">
                        <p>READ STORY</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                    </Link>

                </div>
            </div>

            <div className="stories__section-image-container">
                <img src={windowwidth >= 1024 
                            ? require('../Assets/stories/desktop/' + picture3).default 
                                : require('../Assets/stories/mobile/' + picture3).default} 
                    alt="mountains" 
                    className="stories-image"
                />
                <div className="text-wrapper">
                    <h3>18 Days Voyage</h3>
                    <p className="author">Alexei Borodin</p>
                    <Link to="#">
                        <p>READ STORY</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                    </Link>

                </div>
            </div>

            <div className="stories__section-image-container">
                <img src={windowwidth >= 1024 
                            ? require('../Assets/stories/desktop/' + picture4).default 
                                : require('../Assets/stories/mobile/' + picture4).default} 
                    alt="mountains" 
                    className="stories-image"
                />
                <div className="text-wrapper">
                    <h3>Architecturals</h3>
                    <p className="author">by Samantha Brooke</p>
                    <Link to="#">
                        <p>READ STORY</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Stories
