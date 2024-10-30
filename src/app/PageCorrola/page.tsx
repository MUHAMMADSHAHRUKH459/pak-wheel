"use client"
import React from "react";
import Link from "next/link";

export default function PageTwoOne() {
    return (
        <div>
            <div className="bg-white">
                <h1 className="text-3xl font-bold text-blue-900 text-center pt-4">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
            </div>
            <div className="flex justify-center flex-col items-center bg-white">
                <div className="h-80">
                    <img className="cursor-pointer w-full items-center h-80" src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" alt="Toyota Corolla" />
                </div>

                {/* Button Section */}
                <div className="bg-white px-5 py-2 w-full gap-6 flex flex-row justify-center">
                    <Link href="/PageCorrola">
                        <button className="py-1 bg-blue-100 text-blue-900 outline-none outline-blue-400 flex justify-center text-center w-32 h-8 rounded-sm hover:bg-blue-900 hover:text-white">
                            Book a Test Drive
                        </button>
                    </Link>

                    <Link href="/PageCorrola">
                        <button className="py-1 bg-blue-100 text-blue-900 outline-none outline-blue-400 flex justify-center text-center w-32 h-8 rounded-sm hover:bg-blue-900 hover:text-white">
                            Bank Finance
                        </button>
                    </Link>

                    <Link href="/PageCorrola">
                        <button className="py-1 bg-blue-200 text-blue-900 outline-none outline-blue-400 flex justify-center text-center w-32 h-8 rounded-sm hover:bg-blue-900 hover:text-white">
                            Visit Place
                        </button>
                    </Link>

                    <Link href="/PageCorrola">
                        <button className="py-1 bg-blue-100 text-blue-900 outline-none outline-blue-400 flex justify-center text-center w-32 h-8 rounded-sm hover:bg-blue-900 hover:text-white">
                            Car Inspection
                        </button>
                    </Link>
                </div>

                {/* Vehicle Description Section */}
                <div className="bg-white">
                    <h1 className="text-blue-900 text-center text-3xl font-semibold py-4">Vehicle Description</h1>

                    <div className="bg-white px-20 py-2 w-full gap-4 flex flex-col justify-center">
                        <div className="bg-white px-20 py-1 w-full gap-10 flex flex-row justify-start text-blue-900">
                            <h1 className="font-semibold">Number Of Doors: 4</h1>
                            <h1 className="font-semibold">Fuel Type: High Octane</h1>
                            <h1 className="font-semibold">Engine: 1800 CC</h1>
                            <h1 className="font-semibold">Condition: 8.5/10</h1>
                        </div>
                        <div className="bg-white px-20 py-1 w-full gap-10 flex flex-row justify-center text-blue-900">
                            <h1 className="font-semibold">Driven: 95,000 KM</h1>
                            <h1 className="font-semibold">Suspension Type: Soft</h1>
                            <h1 className="font-semibold">Avg: 13 Km Per Ltr</h1>
                            <h1 className="font-semibold">Transmission: Automatic</h1>
                        </div>
                    </div>
                    <h2 className="text-green-600 py-1 text-center text-2xl font-semibold">PKR 75.5 lacs</h2>
                </div>
            </div>
        </div>
    );
}
