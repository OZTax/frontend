"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
    const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-6">
        <Link href="/" className="logo_text">
            CBRE
        </Link>

        {/* Mobile Navigation
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className = "flex gap-3 md:gap-5">
                    <Link>
                        Create Post
                    </Link>

                </div>
            ): (
                <>

                </>
            )}
        </div> */}





        <Link href="/" className="flex gap-2 flex-center">
            <Image 
            src="/assets/icons/search.svg"
            alt="Frontend Site"
            width={30}
            height={30}
            className="object-contain"
            />
        </Link>


    </nav>
  )
}

export default Nav