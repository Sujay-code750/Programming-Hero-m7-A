import React from 'react';
import footerLogo from '../assets/logo-xl.png'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='text-white bg-[#244d3f] text-center'>
           <div className='container mx-auto'>
               <div className='pt-20 pb-10 space-y-4 border-b border-gray-500'>
                 <img src={footerLogo} alt="" className='mx-auto'/>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h4 className='text-xl'>Social Links</h4>
                <div>
                    <ul className='flex gap-5 justify-center text-black'>
                        <li className='bg-white p-3 rounded-full'><a href="#" className='bg-white'><FaInstagram className='text-black text-xl'/></a></li>
                        <li className='bg-white p-3 rounded-full'><a href="#"><FaFacebookSquare className='text-black text-xl'
                         /></a></li>
                        <li className='bg-white p-3 rounded-full'><a href="#"><FaXTwitter className='text-black text-xl'/></a></li>
                    </ul>
                </div>

               </div>
               <div className='flex items-center justify-between py-5 text-[#8fa49d] flex-col-reverse md:flex-row'>
                <p className='mt-5 md:mt-0'>© 2026 KeenKeeper. All rights reserved.</p>
                <div>
                    <ul className='flex gap-5'>
                        <li><a href="#" className='hover:text-white transition'>Privacy Policy</a></li>
                        <li><a href="#" className='hover:text-white transition'>Terams of Service</a></li>
                        <li><a href="#" className='hover:text-white transition'>Sooikes </a></li>
                    </ul>
                </div>
               </div>
           </div>
        </div>
    );
};

export default Footer;