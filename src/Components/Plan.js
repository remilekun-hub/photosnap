import React, { useState, useEffect } from 'react'



function Plan() {
    const [Monthly, setMonthly] = useState(true)
    
    useEffect(() => {
        setMonthly(false)
    }, [])


    return (
        <section className="plan__section container">
            <div className="switch-wrapper">
                <p className={`${Monthly ? "" : "monthly"}`}>Monthly</p>
                    <button onClick={()=> setMonthly(!Monthly)} className={`${Monthly ? "bg" : ""}`}>
                        <span className={`${Monthly ? "active" : ""} ${Monthly ? "bg" : ""}`}></span>
                    </button>
                <p className={`${Monthly ? "monthly" : ""}`}>Yearly</p>
            </div>
            <div className="plan__section-wrapper">
                <div className="plan-item">
                    
                    <div className="plan">
                        <h2>Basic</h2>
                        <p>Includes basic usage of our platform. Recommended for new and aspiring photographers</p>
                        <div className="price">
                            <h2>{Monthly ? "$190" : "$19.00"}</h2>
                            <p>{Monthly ? "per year" : "per month"}</p>
                        </div>
                        <button>PICK PLAN</button>
                    </div>

                    <div className="plan">
                        <h2>Pro</h2>
                        <p>More advanced features available. Recommended for photography veterans and professionals.</p>
                        <div className="price">
                            <h2>{Monthly ? "$390" : "$39.00"}</h2>
                            <p>{Monthly ? "per year" : "per month"}</p>
                        </div>
                        <button>PICK PLAN</button>
                    </div>

                    <div className="plan">
                        <h2>Business</h2>
                        <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
                        <div className="price">
                            <h2>{Monthly ? "$990" : "$99.00"}</h2>
                            <p>{Monthly ? "per year" : "per month"}</p>
                        </div>
                        <button>PICK PLAN</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plan
