import React from 'react'
import useWindowWidth from './UseWindowWidth'
import { Link } from 'react-router-dom'


function Story({link: {date, title, author, picture}}) {
    const windowwidth = useWindowWidth()
    return (
        <div className="story-container">
            <div className="story-img-container">
                <img src={windowwidth >= 550
                            ? require('../Assets/stories/desktop/' + picture).default 
                                : require('../Assets/stories/mobile/' + picture).default} 
                    alt={picture} 
                    className="story-image"
                />
            </div>
            
            <div className="text-wrapper">
                <p>{date}</p>
                <h3>{title}</h3>
                <p className="author">{`by ${author}`}</p>
                <Link to='#'>
                    <p>READ STORY</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="white"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                </Link>

            </div>
        </div>
    )
}

export default Story
