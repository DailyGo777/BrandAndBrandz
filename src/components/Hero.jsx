import React from 'react'
import img from '../../public/hero.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative bg-white overflow-hidden'>
      <div className='flex justify-center items-center gap-8'>
        {/* Content - 70% */}
        <div className='w-[70%] flex flex-col justify-center items-center gap-8'>
          <h1 className='text-6xl font-bold mb-4 text-[#4A6893] text-center'>
            Your Strategic Growth Partner in Premium Marketing
          </h1>
          <h3 className='text-3xl font-medium mb-6 text-black text-center'>
            We don’t just run campaigns — we help your business grow.
          </h3>
          <div className='flex gap-4'>
            <button className='px-6 py-2 bg-[#4A6893] text-white text-center text-lg font-bold rounded-md'>
              Let’s Elevate Your Brand
            </button>
            <button className='px-6 py-2 border border-[#4A6893] text-[#4A6893] text-center text-lg font-bold rounded-md'>
              Our Services
            </button>
          </div>
        </div>

        {/* Image - 30% */}
        <div className='w-[30%]'>
          <Image src={img} alt='Hero Image' className='w-full h-auto' />
        </div>
      </div>

      {/* Ellipses at the Bottom Center */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] overflow-hidden pointer-events-none z-0'>
        <svg width="600" height="600">
          <circle cx="300" cy="300" r="200" stroke="#4A6893" strokeWidth="6" fill="none" />
          <circle cx="300" cy="300" r="160" stroke="#4A6893" strokeWidth="6" fill="none" />
          <circle cx="300" cy="300" r="120" stroke="#4A6893" strokeWidth="6" fill="none" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
