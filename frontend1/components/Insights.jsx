import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Insights = () => {
  return (
      <div className="insights_text text-left md:mt-32 md:ml-10">
        Meet our lovely Co-Workers

        <div className="container md:mt-16 grid grid-cols-3  space-x-16">
           <section className=''>
              <div className='font-satoshi sm:text-sm text-Ireng md:pb-4'>
                Director | Ecology Sector
              </div>
              <Link href="https://arknights.fandom.com/wiki/Muelsyse/File">
                Muelsyse
              </Link>
              <div className='font-satoshi sm:text-sm text-Ireng md:pt-4'>
                " Sorry sir the diagnosis just came in... you have ligma "
              </div>
              <div className='flex md:pt-32  justify-end'>
              <Image src="/assets/images/muelsyse2.png"
                alt="Muelsyse"
                width={300}
                height={325}
                className='hover-img'
                href="https://arknights.fandom.com/wiki/Muelsyse/File"
              />
              </div>
           </section>

           <section className=''>
              <div className='font-satoshi sm:text-sm text-Ireng md:pb-4'>
                Director | Defense Division
              </div>
              <Link href="https://arknights.fandom.com/wiki/Saria/File">
                Saria
              </Link>
              <div className='font-satoshi sm:text-sm text-Ireng md:pt-4'>
                " Retirement pls "
              </div>
              <div className='flex md:pt-32 md:pl-16 justify-end'>
              <Image src="/assets/images/saria.png"
                alt="Saria"
                width={300}
                height={325}
                className='hover-img'
                href="https://arknights.fandom.com/wiki/Saria/File"
              />
              </div>
           </section>

           <section className=''>
              <div className='font-satoshi sm:text-sm text-Ireng md:pb-4'>
                Director | Originium Arts Sector
              </div>
              <Link href="https://arknights.fandom.com/wiki/Dorothy/File">
                Dorothy
              </Link>
              <div className='font-satoshi sm:text-sm text-Ireng md:pt-4'>
                " Take a picture "
              </div>
              <div className='flex md:pt-32 justify-end'>
              <Image src="/assets/images/dorothy.png"
                alt="Dorothy"
                width={300}
                height={325}
                className='hover-img'
                href="https://arknights.fandom.com/wiki/Dorothy/File"
              />
              </div>
           </section>
            
        </div>
    </div>
  )
}

export default Insights