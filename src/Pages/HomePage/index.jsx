import React from 'react'
import "./style.css"
export default function HomePage() {
    return (
        <div>
            <div className='homepage h-[100vh] justify-center items-center flex flex-col'>
                <div className="cursiveFont text-[50px] md:text-[90px] text-gray-300 text-center">
                    here, there, and everywhere..
                </div>

                <button className='getStartedButton text-[17px] shadow-2xl'>
                    let's get started
                </button>
            </div>

            <div className="lowerSections maxwidth">
                <div className="sericesSection">
                    <div className="cursiveFont text-[30px] md:text-[60px] text-black text-center">
                        Our Services
                    </div>

                    <div className="services">
                        <div className="service">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
