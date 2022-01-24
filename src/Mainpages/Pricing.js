import React from 'react'
import Plan from '../Components/Plan'
import Pricinghero from '../Components/Pricinghero'
import Cta from '../Components/Cta'
import Footer from '../Components/Footer'
import Pricingtable from '../Components/Pricingtable'

function Pricing() {
    return (
        <div>
            <Pricinghero/>
            <Plan/>
            <Pricingtable/>
            <Cta/>
            <Footer/>
        </div>
    )
}

export default Pricing
