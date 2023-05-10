import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="flex flex-col md:mx-10">
        <hr class="h-1.5 bg-gray-200 border-0 dark:bg-Ireng"></hr>
        
        <div className="grid grid-cols-10 space-x-16">
          <div className='grid grid-rows-1 md:pb-26'>
              <div>
                <Link href="https://arknights.fandom.com/wiki/Rhine_Lab">
                  <Image 
                  src='/assets/icons/Rhine_Lab.png'
                  width={150}
                  height={150}
                  />
                </Link>
              </div>
          </div>

          <div className='col-start-2 col-span-9 grid grid-rows-1 md:pt-4 md:pb-26 space-y-2'>
              <div className='footer_text space-y-4'>
                <div>
                  <Link href="#" className="">About Rhine Lab</Link>
                </div>
                <div>
                  <Link href="#" className="">Careers</Link>
                </div>
                <div>
                  <Link href="#" className="">Corporate Responsibility</Link>
                </div>
                <div>
                  <Link href="#" className="">Investor Relations</Link>
                </div>
                <div>
                  <Link href="#" className="">Newsroom</Link>
                </div>

                
              </div>         
          </div>
  
        </div>

        <hr class="h-px md:mt-12 md:mb-6 bg-gray-200 border-0 dark:bg-Ireng"></hr>
        
        <div className='grid grid-cols-7'>
          <div className='footer_child_text col-start-1 col-span-6'>
            <Link href="#" className="">Contact Us</Link>
            <Link href="#" className="md:ml-10">Global Privacy and Cookie Notice</Link>
            <Link href="#" className="md:ml-10">Terms of Use</Link>
            <Link href="#" className="md:ml-10">Our Reaction to that Information</Link>
            <Link href="#" className="md:ml-10">Columbia Privacy Notice</Link>
            <Link href="#" className="md:ml-10">CBRE Intranet</Link>
            <Link href="#" className="md:ml-10">Cookies Settings</Link>
          </div>

          <div className='footer_child_text flex justify-end items-end space-x-4'>
            <Link href="http://www.facebook.com">
              <Image 
                src="assets/icons/facebook.svg"
                width={30}
                height={30}
              />
            </Link>
              
            <Link href="http://www.linkedin.com">
              <Image 
                src="assets/icons/linkedin.svg"
                width={30}
                height={30}
              />
            </Link>
            
            <Link href="http://www.twitter.com">
              <Image 
                src="assets/icons/twitter.svg"
                width={30}
                height={30}
              />
            </Link>
            
            
          </div>
        </div>

        <div className='md:mt-10 md:mb-20 font-satoshi sm:text-xs'>
          Copyright © 2023 Rhine Lab. All rights reserved.
        </div>
        
    </section>
    

  )
}

export default Footer