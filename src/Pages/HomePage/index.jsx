import React from 'react'
import "./style.css"
import  serviceData from "../../JSON/services.json"
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

            <div className="lowerSections maxwidth ">
                <div className="sericesSection">
                    <div className="cursiveFont text-[30px] md:text-[60px] text-black text-center">
                        Our Services
                    </div>

                    <div className="services flex flex-row justify-between md:justify-around  overflow-scroll md:overflow-auto">
                        {
                            serviceData.map((data) => {
                                return (
                                    <div className="service flex flex-col justify-around min-w-[300px] m-8">
                                        <div className="img flex justify-center items-center">
                                            <img className='md:w-[50%] ' src={data.img} alt="" />
                                        </div>

                                        <div className="heading font-bold">
                                            {data.type}
                                        </div>

                                        <div className="para">
                                            {data.detail}
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
