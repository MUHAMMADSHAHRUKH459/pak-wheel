"use client";
import React from "react";
import Link from "next/link";

export default function DetailFour() {
  return (
    <div>
      <div className="bg-white">
        <h1 className="text-sm text-gray-600 px-6 py-3">
          Home / New Cars / Toyota / Toyota Yaris
        </h1>
      </div>

      <div className="bg-white flex justify-center">
        <h1 className="text-3xl font-bold text-blue-800 text-center px-20 py-4">
          Toyota Yaris 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>
      </div>

      <div className="flex justify-center flex-col items-center bg-white">
        <div className="h-80">
          <img
            className="cursor-pointer w-full items-center h-80"
            src="https://cache3.pakwheels.com/system/car_generation_pictures/7721/original/Yaris.png?1716536903"
            alt="Toyota Yaris"
          />
        </div>

        <div className="bg-white px-10 text-gray-800">
          <p className="text-center items-center px-20 font-medium">
            The price of Toyota Yaris 2024 in Pakistan ranges from PKR 4,479,000 for the base variant GLI MT 1.3 to PKR 6,319,000 for the top of the line ATIV X CVT 1.5 Black Interior variant.
            These prices of Toyota Yaris in Pakistan are ex-factory.
          </p>
          <h2 className="text-green-500 py-3 text-center text-2xl font-bold">
            PKR 63.2 lacs
          </h2>
        </div>

        <div className="bg-white py-4 w-full flex justify-center">
          <Link href="/PageYaris">
            <button className="py-2 bg-blue-950 text-white flex justify-center text-center w-32 h-10 rounded-md hover:bg-blue-800">
              Make Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
