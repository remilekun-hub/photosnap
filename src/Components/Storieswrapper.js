import React, { useState } from 'react'
import data from '../stories.json'
import Story from './Story'


function Storieswrapper() {
    const [stories] = useState(data)

    return (
        <section className="stories__wrapper container">
            {stories.map((story) => (
                <Story
                    link={story}
                    key={story.id}
                />

            ))}


        </section>
    )
}

export default Storieswrapper
