import React from 'react'
import Animated from '../components/Animated'

const About = () => {
  return (
    <section id='about' className='px-auto mt-44'>
        <div className='flex flex-col md:flex-row gap-14 md:gap-18 max.w.7xl mx-auto'>
         {/* Left Side: Main Image */}
         <Animated scale={0.8} y={0}>
             <img src="/assets/about.png" alt="Dish" className="max-w-137
             w-full h-full object-cover rounded-3xl"/>
         </Animated>

         {/* Right Side: Content Details */}
         <div>
            <Animated scale={0.8} y={0} className="flex items-center gap-2">
                <img src="/assets/iconL.png" alt="iconLeft" />
                <span className='font-medium uppercase'>
                    Crafted with Passion
                </span>
                <img src="/assets/iconR.png" alt="iconRight" />
            </Animated>

            <Animated>
                <h2 className='mt-5 text-4xl md:text-5xl text-balance'>
                    Experience dining beyond expectations
                </h2>
            </Animated>

            <Animated delay={0.2}>
                <p className='mt-4.5 text-zinc-600 max-w-sm'>
                    We combine fresh local ingredients, creative recipes and elegant presentation to
                    deliver a memorable experience with every visit.
                </p>
            </Animated>

            <Animated className="mt-9  bg-orange-500 text-white p-2 pr-8 
            rounded-lg flex items-center gap-3 w-fit">
                <img src="/assets/about.png" alt="Bistro Royale Location Preview" 
                className='size-15 rounded-lg object-cover shrink-0' />
                <div className ='flex flex-col gap-2'>
                    <p className='font-medium'>Bistro Royale, NY</p>
                    <a href="#"> View on Map</a>
                </div>
            </Animated>
              
         </div>
        </div>

    </section>
  )
}

export default About