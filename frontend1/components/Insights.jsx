import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Insights = () => {
  return (
      <div className="whatwedo_text text-left md:mt-32 md:ml-10 flex w-full divide-y-2">
        <span className= 'md:pr-32'>Our Lovely <br/>Co-workers</span>

        <div className="insights_text grid md:grid-cols-3 xs:grid-rows-3">
            
            <section className='columns-1'>
              <div className='font-satoshi md:pt-4 xs:text-xs sm:text-sm text-Ireng md:pb-4'>
                Director | Ecology Sector
              </div>
              <Link href="https://arknights.fandom.com/wiki/Saria/File">
                Muelsyse
              </Link>
              <div className='font-satoshi sm:text-sm text-Ireng md:pt-4'>
                " Sir you have ligma "
              </div>
              <div className='flex md:pt-20 md:pl-16 justify-end'>
                <Link href="https://arknights.fandom.com/wiki/Saria/File">
                  <Image src="/assets/images/muelsyse2.png"
                    alt="Muelsyse"
                    width={300}
                    height={325}
                    className='hover-img'
                  />
                </Link>
              
              </div>
           </section>

           <section className='columns-1'>
              <div className='font-satoshi md:pt-4 sm:text-sm text-Ireng md:pb-4'>
                Director | Defense Division
              </div>
              <Link href="https://arknights.fandom.com/wiki/Saria/File">
                Saria
              </Link>
              <div className='font-satoshi sm:text-sm text-Ireng md:pt-4'>
                " Retirement pls "
              </div>
              <div className='flex md:pt-20 md:pl-16 justify-end'>
              <Link href="https://arknights.fandom.com/wiki/Saria/File">
                <Image src="/assets/images/saria.png"
                  alt="Saria"
                  width={300}
                  height={325}
                  className='hover-img'
                />
              </Link>
              
              </div>
           </section>

           <section className='columns-1'>
              <div className='font-satoshi md:pt-4 sm:text-sm text-Ireng md:pb-4'>
                Director | Originium Arts Sector
              </div>
              <Link href="https://arknights.fandom.com/wiki/Dorothy/File">
                Dorothy
              </Link>
              <div className='font-satoshi sm:text-sm text-Ireng md:pt-4'>
                " Take a picture- "
              </div>
              <div className='flex md:pr md:pt-20 justify-end'>
              <Link href="https://arknights.fandom.com/wiki/Dorothy/File">
                <Image src="/assets/images/dorothy.png"
                  alt="Dorothy"
                  width={300}
                  height={325}
                  className='hover-img'
                />
              </Link>
              
              </div>
           </section>

           
            
        </div>
    </div>
  )
}

export default Insights