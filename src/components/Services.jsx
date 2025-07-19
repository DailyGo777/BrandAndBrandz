import React from 'react'
import { Paintbrush, CodeXml, Laptop } from 'lucide-react'

const Services = () => {
  return (
    <section className='pb-20 bg-white'>
        <div className='w-full flex flex-col justify-center items-center gap-6'>
            <h1 className='lg:text-4xl text-3xl text-[#496791] font-bold text-center'>Our Core Services</h1>
            <h3 className='lg:text-2xl text-lg text-black font-semibold text-center'>End-to-end solutions designed to expand your brand’s reach and influence.</h3>
        </div>
        <div className='w-full p-12 flex lg:flex-row flex-col justify-evenly items-center gap-6 text-black'>
            <div className='w-full lg:w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4'>
                <Paintbrush color='black' size={40} />
                <h3 className='text-[#4A6893] lg:text-xl text-lg font-semibold text-center'>Creative Design & Branding</h3>
                <p className='text-[#4B4848] text-md text-center'>Logos, UI/UX, and visual assets that define and elevate your brand.</p>
                <button className='w-50 h-12 text-[#4A6893] text-lg'>Learn More &rarr;</button>
            </div>
            <div className='w-full lg:w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4'>
                <CodeXml color='black' size={40} />
                <h3 className='text-[#4A6893] lg:text-xl text-lg font-semibold text-center'>Website Design & Development</h3>
                <p className='text-[#4B4848] text-md text-center'>Responsive, fast-loading websites and landing pages built to perform.</p>
                <button className='w-50 h-12 text-[#4A6893] text-lg'>Learn More &rarr;</button>
            </div>
            <div className='w-full lg:w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4'>
                <Laptop color='black' size={40} />
                <h3 className='text-[#4A6893] lg:text-xl text-lg font-semibold text-center'>Digital Marketing</h3>
                <p className='text-[#4B4848] text-md text-center'>SEO, Social Media, Ads & Email strategies that drive traffic and sales.</p>
                <button className='w-50 h-12 text-[#4A6893] text-lg'>Learn More &rarr;</button>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <button className='lg:w-50 lg:h-16 w-44 h-12 text-white bg-[#4A6893] font-bold lg:text-xl text-lg rounded-md text-center'>View All Services</button>
        </div>
    </section>
  )
}

export default Services