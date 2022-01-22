import React from 'react'
import useWindowWidth from './UseWindowWidth'
import featuredesktop from '../Assets/features/desktop/hero.jpg'
import featuretablet from '../Assets/features/tablet/hero.jpg'
import featuremobile from '../Assets/features/mobile/hero.jpg'

function Featureshero() {

    const windowwidth = useWindowWidth()
    const imageurl = windowwidth >= 1100 ? featuredesktop : windowwidth > 520 ? featuretablet : featuremobile
    return (
        <section className="featurehero__section container">
            <div className="featurehero__section-text-container">
                <div className="featurehero__section-text">
                    <div className="text">
                        <h1>FEATURES</h1>
                        <p>
                            We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.
                        </p>
                    </div>

                </div>
            </div>
            <div className="image-container">
                <img src={imageurl} alt="close up camera shot" />
            </div>

        </section>
    )
}

export default Featureshero
