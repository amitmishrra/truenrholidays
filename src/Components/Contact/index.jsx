import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';

export default function ContactIcons() {
    return (
        <div className='flex justify-around gap-4'>
            <a href="https://www.instagram.com/truenrholidays/" target="_blank" rel="noopener noreferrer"><InstagramIcon className='text-[#246883] m-auto  '   fontSize="large"/></a>
            {/* <a href="https://www.facebook.com/truenrholiday?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FacebookIcon className='text-[#246883] m-auto  '  fontSize="large" /></a> */}
            <a href="https://wa.me/917587686086?text=Hello" target="_blank" rel="noopener noreferrer"><WhatsAppIcon className='text-[#246883] m-auto '  fontSize="large" /></a>
            <a href="mailto:truenrholidays@gmail.com"><AlternateEmailIcon className='text-[#246883] text-[55px] m-auto icon'  fontSize="large" /></a>
            <a href="tel:+917587686086"><CallIcon className='text-[#246883] m-auto '  fontSize="large"/></a>
        </div>
    )
}
