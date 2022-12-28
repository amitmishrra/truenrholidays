import React, { useEffect, useState } from 'react'
import "./style.css"
import serviceData from "../../JSON/services.json"
import internationDestination from "../../JSON/international.json"
import domesticDestinantion from "../../JSON/domestic.json"
import { NavLink } from 'react-router-dom'
export default function HomePage() {
    const [internationalIndex, setInternationalIndex] = useState(0);
    const [domesticIndex, setDomesticIndex] = useState(0);

    useEffect(() => {
        document.title = "True NR Holidays | Home"
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            internationalIndex === 8 ? setInternationalIndex(0) : setInternationalIndex(internationalIndex + 1);
            domesticIndex === 7 ? setDomesticIndex(0) : setDomesticIndex(domesticIndex + 1);
        }, 2500)
        return () => clearInterval(intervalId);
    }, [internationalIndex])

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



                <div className="packageSection">
                    <div className="cursiveFont text-[50px] md:text-[90px]  text-center text-[#246883]">
                        Packages
                    </div>

                    <div className="packages flex justify-center items-center flex-col md:flex-row">
                        <div className="pack h-[350px] w-[300px] int shadow-2xl rounded-[10px] p-4 flex flex-col justify-end md:m-8 m-4">
                            <div className="headingFont font-bold text-[21px]  text-[#268eb6]">
                                International
                            </div>
                            <div className="para textFont text-[13px] text-white text-justify mb-2">
                                khsfg hsdf sdkfg s sfh sfs fsfg ih hfsdlshg g gighfdsgfdkgd  hsfgsdf gfghd fg s dfhiosg
                            </div>

                            <div className="buton">
                                <NavLink to="/internationalPackages" className='exploerButton rounded-[10px] py-2 shadow-2xl'>
                                    Explore More
                                </NavLink>
                            </div>
                        </div>
                        <div className="pack h-[350px] w-[300px] dom shadow-2xl rounded-[10px] p-4 flex flex-col justify-end m-4 md:m-8">
                            <div className="headingFont font-bold text-[21px]  text-[#268eb6]">
                                Domestic
                            </div>
                            <div className="para textFont text-[13px] text-white text-justify mb-2">
                                khsfg hsdf sdkfg s sfh sfs fsfg ih hfsdlshg g gighfdsgfdkgd  hsfgsdf gfghd fg s dfhiosg
                            </div>

                            <div className="buton">
                                <NavLink to="/domesticPackages" className='exploerButton rounded-[10px] py-2 shadow-2xl'>
                                    Explore More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="destinationsSection mt-4">
                    <div className="cursiveFont text-[50px] md:text-[90px]  text-center text-[#246883]">
                        Explore Destinations
                    </div>

                    <div className="international flex flex-col md:flex-row justify-center items-center w-[90%] p-4 m-auto rounded-[10px] shadow-xl mt-4">
                        <div className="img md:w-1/2 md:mr-8">
                            <div className="cursiveFont text-[40px] md:text-[50px]  text-[#246883]  md:mt-[5px] ml-4 ">
                                {internationDestination[internationalIndex].country}
                            </div>
                            <div className='h-[250px] overflow-hidden rounded-[15px]'>
                                <img src={internationDestination[internationalIndex].img} className='image md:w-[100%] rounded-[10px]' alt="" />
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
                                {domesticDestinantion[domesticIndex].place}
                            </div>
                            <div className='h-[250px] overflow-hidden rounded-[15px]'>
                                <img src={domesticDestinantion[domesticIndex].img} className='image md:w-[100%] rounded-[10px]' alt="" />
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


                <div className="counter flex justify-around mt-12 text-center flex-wrap px-4">
                    <div className='flex flex-col justify-center items-center m-2'>
                        <div className="countertext1  w-[65px] h-[65px] md:w-[100px] md:h-[100px] p-4 md:text-[23px] font-bold text-[#246883] ">
                            100+
                        </div>
                        <div className="countertext2 md:text-[23px] text-[17px] headingFont text-[#246883] mt-2">
                            Destinations
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center m-2'>
                        <div className="countertext1  w-[65px] h-[65px] md:w-[100px] md:h-[100px] p-4 md:text-[23px] font-bold text-[#246883] ">
                            1K+
                        </div>
                        <div className="countertext2 md:text-[23px] text-[17px] headingFont text-[#246883] mt-2">
                            Journeys
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center m-2'>
                        <div className="countertext1  w-[65px] h-[65px] md:w-[100px] md:h-[100px] p-4 md:text-[23px] font-bold text-[#246883] ">
                            1.5K+
                        </div>
                        <div className="countertext2 md:text-[23px] text-[17px] headingFont text-[#246883] mt-2">
                            Happy Faces
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center m-2'>
                        <div className="countertext1  w-[65px] h-[65px] md:w-[100px] md:h-[100px] p-4 md:text-[33px] text-[28px] font-bold text-[#246883] ">
                            ∞
                        </div>
                        <div className="countertext2 md:text-[23px] text-[17px] headingFont text-[#246883] mt-2">
                            Memories
                        </div>
                    </div>

                </div>

                <div className="cursiveFont text-[35px] md:text-[60px] text-[#246883] text-center mt-12">
                your destination is waiting for you.
                </div>
            </div>
        </div>
    )
}
