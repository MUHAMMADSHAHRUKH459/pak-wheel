"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex flex-col justify-center">
            <nav className="px-4 flex justify-center items-center flex-row w-full text-white font-medium bg-slate-900">
                <div className="mb-4 sm:mb-0">
                    <Link href="/" passHref>
                        <img
                            className="px-3 py-3 h-auto w-56 text-lg sm:text-xl md:text-2xl lg:text-2xl cursor-pointer"
                            src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <ul className="flex flex-row">
                        <li>
                            <Link href="/banner" className="hidden lg:inline hover:text-red-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium">Search</Link>
                        </li>
                        <li>
                            <Link href="/Feactured" className="hover:text-red-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium">New Cars</Link>
                        </li>
                        <li>
                            <Link href="/bikes" className="hover:text-red-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium">Bikes</Link>
                        </li>
                        <li>
                            <Link href="/autostore" className="hover:text-red-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium">Auto store</Link>
                        </li>
                        <li>
                            <Link href="/vidios" className="hover:text-red-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium">Vidios</Link>
                        </li>
                        <li>
                            <Link href="/Forms" className="hidden lg:inline hover:text-red-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium">Forums</Link>
                        </li>
                        <li>
                            <Link href="/Footer" className="hidden lg:inline hover:text-red-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/Form" className="hidden lg:inline hover:text-red-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium">Booking</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="flex flex-row gap-2">
                        <Link href="/blog" className="hidden lg:inline hover:text-red-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                        <Link href="/register" className="hidden lg:inline hover:text-red-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium"></Link>
                        <Link href="/post-ad" className="bg-red-600 hover:bg-red-800 rounded-md text-sm font-medium px-3 py-2">Post an Ad</Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
