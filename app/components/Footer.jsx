import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div>
      <div className='mt-20'>
        <Image src={isDarkMode ?  assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            nfahleviabdi8@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@2025 Nabil Fahlevi Abdi. All right reserved</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='-blank' href="https://www.linkedin.com/in/nabil-fahlevi-abdi/">Linkedin</a></li>
            <li><a target='-blank' href="https://github.com/NABIL-F-A-8">Github</a></li>
            <li><a target='-blank' href="https://dribbble.com/Nabil_Fahlevi_A">Dribble</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
