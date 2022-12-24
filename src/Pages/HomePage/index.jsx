import React from 'react'
import "./style.css"
import  serviceData from "../../JSON/services.json"
export default function HomePage() {
    return (
        <div className='w-[100%]'>
            <div className='homepage h-[100vh] justify-center items-center flex flex-col '>
                <div className="cursiveFont text-[50px] md:text-[90px] text-gray-300 text-center">
                    here, there, and everywhere..
                </div>

                <button className='getStartedButton text-[17px] shadow-2xl'>
                    let's get started
                </button>
            </div>

            <div className="lowerSections maxwidth ">
                <div className="servicesSection">
                    <div className="cursiveFont text-[50px] md:text-[90px]  text-center text-[#246883]">
                        Our Services
                    </div>

                    <div className="services flex flex-row justify-between  overflow-scroll md:overflow-auto">
                        {
                            serviceData.map((data) => {
                                return (
                                    <div className="service flex flex-col justify-around min-w-[300px] m-8 shadow-xl rounded-[10px]">
                                        <div className="img flex justify-center items-center mb-4">
                                            <img className='w-[60%] ' src={data.img} alt="" />
                                        </div>

                                        <div className="headingFont font-bold text-[18px] mb-4 text-[#246883]">
                                            {data.type}
                                        </div>

                                        <div className="para textFont text-[15px] text-justify mb-4">
                                            {data.detail}
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                <div className="destinationsSection">
                    
                </div>
            </div>
        </div>
    )
}
