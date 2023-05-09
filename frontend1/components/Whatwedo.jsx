import React from 'react'
import Link from 'next/link'

const Whatwedo = () => {
  return (
    <section className="flex flex-row">
        <div className="whatwedo_text text-left md:mt-32 md:ml-10">
        What We Do
        </div>
        <div className="container md:mt-32 md:pl-32 md:mr-20 grid grid-cols-1 divide-y">
            <section className='columns-1 flex flex-row md:pt-8 md:pb-24 '>
                <div className='-rotate-90 font-satoshi sm:text-sm'>
                    Insights & Research
                </div>
                <div className='whatwedo_text'>
                    Deliver market knowledge and global insights
                </div>
                <div className='font-satoshi sm:text-sm'>
                    Our 500 global researchers offer actionable 
                    intelligence and a multi-dimensional perspective 
                    that is unparalleled in the industry.<br/>
                    <br/>
                    <Link href="/" className='font-bold'>
                        <span className='line-through text-hijau-ketupat'>------</span>  Explore Insights & Research
                    </Link>
                </div>       
            </section>

            <section className='columns-1 flex flex-row md:pt-8 md:pb-24'>
                <div className='-rotate-90 font-satoshi sm:text-sm'>
                    Services
                </div>
                <div className='whatwedo_text'>
                    Create the real estate solutions of tomorrow 
                </div>
                <div className='font-satoshi sm:text-sm'>
                    Let us help you:<br/>
                    - Invest in real estate
                    - Plan, lease & occupy
                    - Design & build
                    - Manage properties & portfolios
                    - Transform business outcomes
                    <br/>
                    <Link href="/" className='font-bold'>
                        <span className='line-through text-hijau-ketupat'>------</span>  Explore Services
                    </Link>
                </div>       
            </section>

            <section className='columns-1 flex flex-row md:pt-8 md:pb-24'>
                <div className='-rotate-90 font-satoshi sm:text-sm'>
                    Careers
                </div>
                <div className='whatwedo_text'>
                    Join Us to realize your visions
                </div>
                <div className='font-satoshi sm:text-sm'>
                    We don't just realize the potential in real estate. 
                    We help you realize your potential.<br/>
                    <br/>
                    <Link href="/" className='font-bold'>
                        <span className='line-through text-hijau-ketupat'>------</span>  Explore Careers
                    </Link>
                </div>       
            </section>
            
        </div>
    </section>
    

  )
}

export default Whatwedo