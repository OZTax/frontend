import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Coworkers = () => {
  return (
    <section className="flex flex-col md:mx-10 divide-y">
        <div className="commitment_text text-left md:mt-32">
            Meet our Lovely Co-Workers
        </div>

        <div className="md:mt-8 grid grid-cols-3 space-x-16">
            <div className='md:pt-8'>
                <div className='font-satoshi text-justify-left sm:text-sm'>
                    Director | Ecology Sector
                </div>
                <div className='commitment_child_text md:pb-4'>
                    Muelsyse
                </div>
                <div className='font-satoshi text-justify-left sm:text-sm'>
                    " Sir you have ligma "
                </div>
                <div className='flex md:pt-20 md:pl-16 justify-end'>
                    <Link href="https://arknights.fandom.com/wiki/Muelsyse/File">
                        <Image src="/assets/images/muelsyse2.png"
                        alt="Muelsyse"
                        width={500}
                        height={325}
                        className='hover-img'
                        />
                    </Link>             
                </div>    
            </div>

            <div className='md:pt-8'>
                <div className='font-satoshi text-justify-left sm:text-sm'>
                    Director | Defense Division
                </div>
                <div className='commitment_child_text md:pb-4'>
                    Saria
                </div>
                <div className='font-satoshi text-justify-left sm:text-sm'>
                    " Retirement where "
                </div>
                <div className='flex md:pt-20 md:pl-16 justify-end'>
                    <Link href="https://arknights.fandom.com/wiki/Saria/File">
                        <Image src="/assets/images/jesselton.png"
                        alt="Saria"
                        width={500}
                        height={325}
                        className='hover-img'
                        />
                    </Link>             
                </div>    
            </div>

            <div className='md:pt-8'>
            <div className='font-satoshi text-justify-left sm:text-sm'>
                    Director | Originium Arts Sector
                </div>
                <div className='commitment_child_text md:pb-4'>
                    Dorothy
                </div>
                <div className='font-satoshi text-justify-left sm:text-sm'>
                    " Sir you have ligma "
                </div>
                <div className='flex md:pt-20 md:pl-16 justify-end'>
                    <Link href="https://arknights.fandom.com/wiki/Dorothy/File">
                        <Image src="/assets/images/dorothy.png"
                        alt="Dorothy"
                        width={500}
                        height={325}
                        className='hover-img'
                        />
                    </Link>             
                </div>    
            </div>
            
        </div>
    </section>
    

  )
}

export default Coworkers