import React from 'react'
import Link from 'next/link'

const Commitment = () => {
  return (
    <section className="flex flex-col md:mx-10 divide-y">
        <div className="commitment_text text-left md:mt-32">Our Commitment
        </div>
        <div className="container md:mt-8  grid grid-cols-4">
          <section className='columns-1 grid grid-rows-3 md:pt-8 md:pb-26 '>
                <div className='commitment_child_text'>
                    Our Story
                </div>
                <div className='font-satoshi text-justify md:pl-20 sm:text-sm'>
                We bring the diverse knowledge of our people, clients, and partners to realize 
                potential in every business and every person.
                    <br/>
                  <div className='md:pt-12'> 
                    <Link href="/" className='font-bold'>
                        <span className='line-through text-hijau-ketupat'>------</span>  Read More
                    </Link>
                  </div>
                    
                </div>       
            </section>

            <section className='columns-2 grid grid-rows-3 md:pt-8 md:pb-26 '>
                <div className='commitment_child_text'>
                    Corporate Responsibility
                </div>
                <div className='font-satoshi text-justify md:pl-20 sm:text-sm'>
                We take great pride in our reputation for upholding the highest standards in the way we do business.
                    <br/>
                  <div className='md:pt-12'> 
                    <Link href="/" className='font-bold'>
                        <span className='line-through text-hijau-ketupat'>------</span>  Read More
                    </Link>
                  </div>
                    
                </div>       
            </section>

            <section className='columns-3 grid grid-rows-3 md:pt-8 md:pb-26 '>
                <div className='commitment_child_text'>
                    Sustainability
                </div>
                <div className='font-satoshi text-justify md:pl-20 sm:text-sm'>
                Minimizing the environmental impact of the built environment is both a responsibility and an opportunity. We’re making proactive decisions to ensure a sustainable future.
                    <br/>
                  <div className='md:pt-12'> 
                    <Link href="/" className='font-bold'>
                        <span className='line-through text-hijau-ketupat'>------</span>  Read More
                    </Link>
                  </div>
                    
                </div>       
            </section>

            <section className='columns-4 grid grid-rows-3 md:pt-8 md:pb-26 '>
                <div className='commitment_child_text'>
                    Diversity, Equity & Inclusion
                </div>
                <div className='font-satoshi text-justify md:pl-20 sm:text-sm'>
                An inclusive culture is a thriving culture. We are committed to our employees feeling safe, valued and heard.
                    <br/>
                  <div className='md:pt-12'> 
                    <Link href="/" className='font-bold'>
                        <span className='line-through text-hijau-ketupat'>------</span>  Read More
                    </Link>
                  </div>
                    
                </div>       
            </section>
            
        </div>
    </section>
    

  )
}

export default Commitment