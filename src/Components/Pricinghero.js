import React from 'react'
import useWindowWidth from './UseWindowWidth'
import pricedesktop from '../Assets/pricing/desktop/hero.jpg'
import pricetablet from '../Assets/pricing/tablet/hero.jpg'
import pricemobile from '../Assets/pricing/mobile/hero.jpg'

function Pricinghero() {
    const windowwidth = useWindowWidth()
    const imageurl = windowwidth >= 1100 ? pricedesktop : windowwidth > 520 ? pricetablet : pricemobile
    return (
        <section className="pricinghero__section container">
            <div className="pricinghero__section-hero-text-container">
                <div className="pricinghero__section-hero-text">
                <div className="pricinghero__section-text">
                    <h1>PRICING</h1>
                    <p>
                        Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos
                    </p>
                </div>
                </div>

            </div>
            <div className="pricinghero__section-image-container">
                <img src={imageurl} alt="tripod camera" />
            </div>

        </section>
    )
}

export default Pricinghero
