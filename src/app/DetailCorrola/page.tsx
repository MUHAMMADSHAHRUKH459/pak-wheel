"use client";
import React from "react";
import Link from "next/link";

export default function Corolla() {
  return (
    <div>
      <div className="bg-white">
        <h1 className="text-sm text-gray-600 px-6 py-3">
          Home / New Cars / Toyota / Toyota Corolla
        </h1>
      </div>

      <div className="bg-white flex justify-center">
        <h1 className="text-3xl font-bold text-blue-800 text-center px-20 py-4">
          Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>
      </div>

      <div className="flex justify-center flex-col items-center bg-white">
        <div className="h-80">
          <img
            className="cursor-pointer w-full items-center h-80"
            src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674"
            alt="Toyota Corolla"
          />
        </div>

        <div className="bg-white px-10 text-gray-800">
          <p className="text-center items-center px-20 font-medium">
            The price of Toyota Corolla 2024 in Pakistan ranges from PKR 5,969,000 for the base variant Altis X Manual 1.6 to PKR 7,549,000 for the top of the line Altis Grande X CVT-i 1.8 Black Interior variant. These prices of Toyota Corolla in Pakistan are ex-factory.
          </p>
          <h2 className="text-green-500 py-3 text-center text-2xl font-bold">
            PKR 70.5 lacs
          </h2>
        </div>

        <div className="bg-white py-4 w-full flex justify-center">
          <Link href="/PageCorrola">
            <button className="py-2 bg-blue-950 text-white flex justify-center text-center w-32 h-10 rounded-md hover:bg-blue-800">
              Make Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
