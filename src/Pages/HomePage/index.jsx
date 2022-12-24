import React, { useEffect, useState } from 'react'
import "./style.css"
import serviceData from "../../JSON/services.json"
import internationDestination from "../../JSON/international.json"
export default function HomePage() {
    const [internationalIndex, setInternationalIndex] = useState(0);


    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         internationalIndex === 8 ? setInternationalIndex(0) : setInternationalIndex(internationalIndex + 1);
    //     }, 2500)
    //     return () => clearInterval(intervalId);
    // }, [internationalIndex])

    return (
        <div className='w-[100%] mb-8'>
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
                    <div className="cursiveFont text-[50px] md:text-[90px]  text-center text-[#246883]">
                        Explore Destinations
                    </div>

                    <div className="international flex flex-col md:flex-row justify-center items-center w-[90%] p-4 m-auto rounded-[10px] shadow-xl">
                        <div className="img md:w-1/2 md:mr-8">
                            <div className="cursiveFont text-[40px] md:text-[50px]  text-[#246883]  md:mt-[5px] ml-4 ">
                                {internationDestination[internationalIndex].country}
                            </div>
                            <div className='h-[250px] overflow-hidden rounded-[15px]'>
                                <img src={internationDestination[internationalIndex].img} className='image md:w-[100%] rounded-[19px]' alt="" />
                            </div>

                        </div>
                        <div className='md:w-1/2 mt-4 md:mt-0'>
                            <div className="headingFont font-bold text-[26px] mb-4 text-[#246883]">
                                International
                            </div>

                            <div className="para textFont text-[15px] text-justify mb-4">
                                This is your Travel Tips Article. Add a full article with helpful travel tips or a short memo with an exciting update regarding you, your business, or your recent. This is your Travel Tips Article. Add a full article with helpful travel tips or a short memo with an exciting update regarding you, your business, or your recent.
                            </div>
                        </div>
                    </div>


                    <div className="international flex flex-col md:flex-row-reverse justify-between items-center w-[90%] p-4 m-auto rounded-[10px] shadow-xl mt-12">
                        <div className="img md:w-1/2 flex flex-col md:ml-8  md:items-right">
                            <div className="cursiveFont text-[40px] md:text-[50px] md:text-right text-[#246883]  md:mt-[5px] ml-4 mr-4 ">
                                {internationDestination[internationalIndex].country}
                            </div>
                            <div className='h-[250px] overflow-hidden rounded-[15px]'>
                                <img src={internationDestination[internationalIndex].img} className='image md:w-[100%] rounded-[19px]' alt="" />
                            </div>

                        </div>
                        <div className='md:w-1/2 mt-4 md:mt-0'>
                            <div className="headingFont font-bold text-[26px] mb-4 text-[#246883]">
                                Domestic
                            </div>

                            <div className="para textFont text-[15px] text-justify mb-4">
                                This is your Travel Tips Article. Add a full article with helpful travel tips or a short memo with an exciting update regarding you, your business, or your recent. This is your Travel Tips Article. Add a full article with helpful travel tips or a short memo with an exciting update regarding you, your business, or your recent.
                            </div>
                        </div>
                    </div>








                </div>
            </div>
        </div>
    )
}
