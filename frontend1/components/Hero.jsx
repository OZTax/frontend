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
            class="w-full h-screen flex justify-center items-center overflow-hidden relative">
            <Image
                src='/assets/images/carousel3.jpg'
                alt="Hero Image"
                className="object-cover"
                fill
            />

            <div class="z-10 mb-20 flex flex-col justify-left items-left py-16 px-12 backdrop-blur-md bg-Ireng/30">
                <div class=" text-left text-3xl md:text-5xl text-white drop-shadow-lg">
                    Strenghtening <br />
                    Value <br/> 
                    Through ESG
                </div>

                <p class="mt-24 text-left text-sm text-white opacity-90">
                    Survey of Global Property Professionals
                </p>

                <Link href="/" className="mt-16 text-left text-basic text-white opacity-90">
                    Read The Report
                </Link>
                {/* <Button href="/">Get Started</Button> */}
            </div>
        </div>
    )
}
