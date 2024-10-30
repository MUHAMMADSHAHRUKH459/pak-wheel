"use client";
import React from "react";
import Link from "next/link";

export default function DetailOne() {
  return (
    <div>
      <div className="bg-white">
        <h1 className="text-sm text-gray-600 px-6 py-3">
          Home / New Cars / Toyota / Toyota Land Cruiser
        </h1>
      </div>

      <div className="bg-white flex justify-center">
        <h1 className="text-3xl font-bold text-blue-800 text-center px-20 py-4">
          Toyota Land Cruiser 2024 Price in Pakistan, Pictures & Reviews
        </h1>
      </div>

      <div className="flex justify-center flex-col items-center bg-white">
        <div className="h-80">
          <img
            className="cursor-pointer w-full items-center h-80"
            src="https://cache1.pakwheels.com/system/car_generation_pictures/6008/original/Land_Cruiser_300_-_PNG.png?1635484577"
            alt="Toyota Land Cruiser"
          />
        </div>

        <div className="bg-white px-10 text-gray-800">
          <p className="text-center items-center px-20 font-medium">
            The price of Toyota Land Cruiser 2024 in Pakistan is PKR 120,000,000 for its ZX Gasoline 3.5L variant. This price of Toyota Land Cruiser in Pakistan is ex-factory.
          </p>
          <h2 className="text-green-500 py-3 text-center text-2xl font-bold">
            PKR 12.0 crore
          </h2>
        </div>

        <div className="bg-white py-4 w-full flex justify-center">
          <Link href="/PageLand">
            <button className="py-2 bg-blue-950 text-white flex justify-center text-center w-32 h-10 rounded-md hover:bg-blue-800">
              Make Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
