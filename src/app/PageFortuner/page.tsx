"use client"
import React from "react";
import Link from "next/link";

export default function PageTwoOne() {
    return (
        <div>
            <div className="bg-white">
                <h1 className="text-3xl font-bold text-blue-900 text-center pt-4">
                    Toyota Fortuner Price in Pakistan 2024, Images, Reviews & Specs
                </h1>
            </div>
            <div className="flex justify-center flex-col items-center bg-white">
                <div className="h-80">
                    <img 
                        className="cursor-pointer w-full items-center h-80" 
                        src="https://cache4.pakwheels.com/system/car_generation_pictures/7335/original/Fortuner_-_PNG.png?1677568997" 
                        alt="Toyota Fortuner 2024"
                    />
                </div>

                {/* Buttons Section */}
                <div className="bg-white px-5 py-2 w-full gap-6 flex flex-row justify-center">
                    <Link href="/PageFortuner">
                        <button className="py-1 bg-sky-200 text-blue-900 outline-none outline-blue-400 flex justify-center text-center w-32 h-8 rounded-sm hover:bg-blue-800 hover:text-white">
                            Book a Test Drive
                        </button>
                    </Link>

                    <Link href="/PageFortuner">
                        <button className="py-1 bg-sky-200 text-blue-900 outline-none outline-blue-400 flex justify-center text-center w-32 h-8 rounded-sm hover:bg-blue-800 hover:text-white">
                            Bank Finance
                        </button>
                    </Link>

                    <Link href="/PageFortuner">
                        <button className="py-1 bg-sky-200 text-blue-900 outline-none outline-blue-400 flex justify-center text-center w-32 h-8 rounded-sm hover:bg-blue-800 hover:text-white">
                            Visit Place
                        </button>
                    </Link>

                    <Link href="/PageFortuner">
                        <button className="py-1 bg-sky-200 text-blue-900 outline-none outline-blue-400 flex justify-center text-center w-32 h-8 rounded-sm hover:bg-blue-800 hover:text-white">
                            Car Inspection
                        </button>
                    </Link>
                </div>

                <div className="bg-white">
                    <h1 className="text-blue-900 text-center text-3xl font-semibold py-4">Vehicle Description</h1>

                    <div className="bg-white px-20 py-2 w-full gap-4 flex flex-col justify-center">
                        <div className="bg-white px-20 py-1 w-full gap-10 flex flex-row justify-start">
                            <h1 className="font-semibold text-gray-900">Number Of Door: 4</h1>
                            <h1 className="font-semibold text-gray-900">Fuel Type: High Octane</h1>
                            <h1 className="font-semibold text-gray-900">Engine: 2755 CC</h1>
                            <h1 className="font-semibold text-gray-900">Condition: 100%</h1>
                        </div>
                        <div className="bg-white px-20 py-1 w-full gap-10 flex flex-row justify-center">
                            <h1 className="font-semibold text-gray-900">Driven: 98,000 KM</h1>
                            <h1 className="font-semibold text-gray-900">Suspension Type: Soft</h1>
                            <h1 className="font-semibold text-gray-900">Avg: 20 Km Per Ltr</h1>
                            <h1 className="font-semibold text-gray-900">Transmission: Automatic</h1>
                        </div>
                    </div>
                    <h2 className="text-green-500 py-1 text-center text-2xl font-semibold">PKR 1.99 crore</h2>
                </div>
            </div>
        </div>
    )
}
