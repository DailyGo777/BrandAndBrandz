import React from 'react'
import { Paintbrush, CodeXml, Laptop } from 'lucide-react'

const Services = () => {
  return (
    <section className='pb-20 bg-white'>
        <div className='w-full flex flex-col justify-center items-center gap-6'>
            <h1 className='text-4xl text-[#496791] font-bold'>Our Core Services</h1>
            <h3 className='text-2xl text-black font-semibold'>End-to-end solutions designed to expand your brand’s reach and influence.</h3>
        </div>
        <div className='w-full p-12 flex flex-row justify-evenly items-center gap-6 text-black'>
            <div className='w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4'>
                <Paintbrush color='black' size={40} />
                <h3 className='text-[#4A6893] text-xl font-semibold'>Creative Design & Branding</h3>
                <p className='text-[#4B4848] text-md text-center'>Logos, UI/UX, and visual assets that define and elevate your brand.</p>
                <button className='w-50 h-12 text-[#4A6893] text-lg'>Learn More &rarr;</button>
            </div>
            <div className='w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4'>
                <CodeXml color='black' size={40} />
                <h3 className='text-[#4A6893] text-xl font-semibold'>Website Design & Development</h3>
                <p className='text-[#4B4848] text-md text-center'>Responsive, fast-loading websites and landing pages built to perform.</p>
                <button className='w-50 h-12 text-[#4A6893] text-lg'>Learn More &rarr;</button>
            </div>
            <div className='w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4'>
                <Laptop color='black' size={40} />
                <h3 className='text-[#4A6893] text-xl font-semibold'>Digital Marketing</h3>
                <p className='text-[#4B4848] text-md text-center'>SEO, Social Media, Ads & Email strategies that drive traffic and sales.</p>
                <button className='w-50 h-12 text-[#4A6893] text-lg'>Learn More &rarr;</button>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <button className='w-50 h-16 text-white bg-[#4A6893] font-bold text-xl rounded-md text-center'>View All Services</button>
        </div>
    </section>
  )
}

export default Services