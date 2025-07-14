import React from 'react'
import { Lightbulb, Rocket, Trophy } from 'lucide-react'

const Card = () => {
  return (
    <section className='py-20 bg-white'>
        <div className='w-full p-12 flex flex-row justify-evenly items-center gap-6 text-black'>
            <div className='w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4'>
                <Lightbulb color='black' size={40} />
                <h3 className='text-[#4A6893] text-xl font-semibold'>Ready to Lead the Market?</h3>
                <p className='text-[#4B4848] text-md text-center'>Let’s craft your next big move. Request a proposal and let’s grow, together.</p>
                <button className='w-50 h-12 bg-[#4A6893] text-[#F9F9F9] rounded-md text-lg'>Request Proposal</button>
            </div>
            <div className='w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4'>
                <Rocket color='black' size={40} />
                <h3 className='text-[#4A6893] text-xl font-semibold'>Brands That Break Through</h3>
                <p className='text-[#4B4848] text-md text-center'>We don’t just build brands we craft success stories that leave a mark.</p>
                <button className='w-50 h-12 bg-[#4A6893] text-[#F9F9F9] rounded-md text-lg'>Learn More</button>
            </div>
            <div className='w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4'>
                <Trophy color='black' size={40} />
                <h3 className='text-[#4A6893] text-xl font-semibold'>Total Brand Solutions</h3>
                <p className='text-[#4B4848] text-md text-center'>From strategy to execution everything your brand needs, under one roof.</p>
                <button className='w-50 h-12 bg-[#4A6893] text-[#F9F9F9] rounded-md text-lg'>Visit Our Work</button>
            </div>
        </div>
    </section>
  )
}

export default Card