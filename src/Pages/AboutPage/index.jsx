import React, { useEffect } from 'react'
import ContactIcons from '../../Components/Contact'

export default function About() {
    useEffect(() => {
        document.title = "True NR Holidays | About Us "
    })
    return (
        <div className='md:p-8 pt-[80px] px-4 pb-8'>
            <div className='cursiveFont text-[55px] md:text-[60px] text-[#246883] '>Hello Wanderer,</div>
            <div className="headingFont font-bold text-[20px]  text-[#246883]">Welcome to True NR Holidays</div>

            <div className='flex flex-col-reverse justify-between items-center md:items-start md:flex-row px-2 md:px-0 itmes-center'>
                <div className='w-[100%] md:w-1/2 textFont text-justify m-4'>
                    We are very excited to introduce 'True NR Holidays' as the one stop provider for all your travel needs and requirements whether it's Domestic or International. We label ourselves as leading, innovative, and highly efficient and look forward to demonstrate these qualities at the earliest possible chance.
                    <br />
                    Since established in 2019, our primary aim was to provide quality travel services to business and leisure travellers. The agency continued to grow and branch out its interests to rise as one of the exponents in the travel industry.
                    <br />
                    Supported by our impressive customer satisfaction and constant improvement, True NR Holidays has expanded to cover various facts of the industry. Our experience led to perfection in both our outbound and inbound units.
                </div>
                <div className='w-[100%] md:w-1/2 m-4 rounded-[10px] '>
                    <img className='w-[90%] rounded-[10px] shadow-2xl m-auto' src="/assets/about.jpg" alt="" />
                </div>
            </div>
               
            <div className='md:w-[20%] w-[50%]'>
                <ContactIcons/>
            </div>
        </div>
    )
}
