import React from 'react'
import "./style.css"
export default function Footer() {
    return (
        <div className='footer md:p-8 p-4 m-0'>
            <div className="upperPart flex flex-wrap justify-between ">

                <div className='md:w-[30%] mt-4'>
                    <div className='text-[white] '>
                        Truenrholidays.com
                    </div>
                    <div className='text-gray-400  text-justify'>
                        We are very excited to introduce. "True NR Holidays" as the one stop provider for all your travel needs and requirements whether it is Domestic or International. We label ourselves as leading, innovative, and highly efficient and look forward to demonstrate these qualities at the earliest possible chance.
                    </div>
                </div>



                <div>
                    <div className='text-[white] mt-4'>
                        Address & Contact Info
                    </div>
                    <div className='text-gray-400 text-justify' >
                        136, Shree Nagar Extension, Shree Nagar,<br />
                        Indore, Madhya Pradesh 452010, India <br />
                        truenrholidays@gmail.com <br />
                        +91 7587686086
                    </div>
                </div>

                <div className='mt-4'>
                    <div className='text-[white] '> Support & Help</div>
                    <div className='text-gray-400'>
                        About Us
                    </div>
                    <div className='text-gray-400'>Terms & Conditions</div>
                    <div className='text-gray-400'>Contact Us</div>
                </div>

            </div>
            <div className='text-white text-center mt-4'>
                Copyrights © 2022 True NR Holidays. All Rights Reserved.
            </div>
        </div>
    )
}
