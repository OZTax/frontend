"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  return (
    <nav className="sticky top-0 z-10 bg-Ireng backdrop-filter backdrop-blur-lg">
        <div className="max-w-full mx-auto px-16">
            <div className="flex items-center justify-between h-20">
                <Link href="/" className="flex-row logo_text text-white">
                    CBRE
                </Link>

                <div className="flex items-center space-x-8 text-white">
                    <Link href="#" className="nav_text">Services</Link>
                    <Link href="#" className="nav_text">Insights & Research</Link>
                    <Link href="#" className="nav_text">Properties</Link>
                    <Link href="#" className="nav_text">Offices</Link>
                    <Link href="#" className="nav_text">Careers</Link>
                    <Link href="#" className="nav_text">About Us</Link>
                    <Link href="/">
                        <Image 
                        src="/assets/images/usa.svg"
                        alt="Frontend Site"
                        width={30}
                        height={30}         
                        />
                    </Link>
                    <Link href="/">
                        <Image 
                        src="/assets/icons/search.svg"
                        alt="Frontend Site"
                        width={30}
                        height={30}  
                        className="fill-white"  
                        />
                    </Link>
                </div>
                
            </div>
        </div>
    </nav>  

    //     <Link href="/" className="nav_text">
    //         Services 
    //     </Link>
        
    //     <Link href="/" className="nav_text">
    //         Insights & Research
    //     </Link>

    //     <Link href="/" className="nav_text">
    //         Properties
    //     </Link>

    //     <Link href="/" className="nav_text">
    //         Offices
    //     </Link>

    //     <Link href="/" className="nav_text">
    //         Careers
    //     </Link>

    //     <Link href="/" className="nav_text">
    //         About Us
    //     </Link>

        



    //     <Link href="/">
    //         <Image 
    //         src="/assets/icons/search.svg"
    //         alt="Frontend Site"
    //         width={30}
    //         height={30}
    //         />
    //     </Link>


    // </nav>
  )
}

export default Nav