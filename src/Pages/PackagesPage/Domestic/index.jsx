import React, {useEffect} from 'react'
import "./style.css"
import domData from "../../../JSON/domestic.json"
import { NavLink } from 'react-router-dom'

export default function DomesticPackages() {
    useEffect(() => {
        document.title = "True NR Holidays | Domestic Packages"

    })
    return (
        <div className='md:p-8 pt-[80px]'>
            <div className='cursiveFont text-[55px] md:text-[60px] text-[#246883] pl-2'>
                Domestic Packages
            </div>

            <div className="domPack flex flex-col md:flex-row flex-wrap justify-around items-center">
                {
                    domData.map((data) => {
                        return (
                            <div className="dom-pack rounded-[10px] p-2 shadow-xl mb-8 md:w-[300px] w-[90%]">
                                <div className=' overflow-hidden h-[230px]'>
                                    <img src={data.img} className='rounded-[10px]' alt="" />
                                </div>
                                <div className='textFont'>
                                    <div className='headingFont font-bold text-[21px] text-[#268eb6]'>
                                        {data.place}
                                    </div>
                                    <div>
                                        Starting from : {data.pricing}
                                    </div>
                                    <div className='my-4 '>
                                        <NavLink to={data.path} className='exploerButton rounded-[10px] py-2'>Know More</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
