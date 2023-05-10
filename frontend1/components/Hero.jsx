"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions';
import arrayCeil from '@utils/arrayCeil';
//import Button from './ui/Button';


export default function Hero() {
    const [heroImage, setHeroImage] = useState('hero-1920.jpg')
    const imageSizes = [600, 1280, 1920]

    const { observe, unobserve, width, height, entry } = useDimensions({
        onResize: ({ observe, unobserve, width, height, entry }) => {
            setHeroImage(`hero-${arrayCeil(imageSizes, width)}.jpg`)

            unobserve(); // To stop observing the current target element
            observe(); // To re-start observing the current target element
        },
    });

    return (
        <div
            ref={observe}
            className="w-full h-screen flex justify-center items-center overflow-hidden relative">
            <Image
                src='/assets/images/Rhine_Lab_HQ.jpg'
                alt="Hero Image"
                className="object-cover"
                fill
            />
            
            
            
            <div className="z-10 mb-20 flex flex-col justify-left items-left py-16 px-12 backdrop-blur-md bg-Ireng/30">
                <div className=" text-left text-3xl md:text-5xl text-white drop-shadow-lg">
                    Robotics <br />
                    and Biology <br/> 
                    Research
                </div>
                <hr className="h-2 bg-white border-0  md:my-10"></hr>
                <p className=" text-left font-satoshi text-sm text-white opacity-90">
                    100 % Ethical trust me
                </p>

                <Link href="/" className="mt-16 font-satoshi font-bold text-left text-basic text-white opacity-90">
                    <span className='line-through text-hijau-ketupat'>------</span>   Read The Report
                </Link>
                
                {/* <Button href="/">Get Started</Button> */}
            </div>
        </div>
    )
}
