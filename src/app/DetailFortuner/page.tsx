"use client";
import React from "react";
import Link from "next/link";

export default function DetailOne() {
  return (
    <div>
      <div className="bg-white">
        <h1 className="text-sm text-gray-600 px-6 py-3">
          Home / New Cars / Fortuner / Toyota Fortuner
        </h1>
      </div>

      <div className="bg-white flex justify-center">
        <h1 className="text-3xl font-bold text-blue-800 text-center px-20 py-4">
          Toyota Fortuner Price in Pakistan 2024, Images, Reviews & Specs
        </h1>
      </div>

      <div className="flex justify-center flex-col items-center bg-white">
        <div className="h-80">
          <img
            className="cursor-pointer w-full items-center h-80"
            src="https://cdn.leonardo.ai/users/312ca1ba-044b-4193-a505-805b21e3ad52/generations/e85e2a56-a338-4b2c-98d9-55092a18e10e/Leonardo_Phoenix_A_highresolution_frontside_angled_image_of_a_3.jpg"
            alt="Toyota Fortuner"
          />
        </div>

        <div className="bg-white px-10 text-gray-800">
          <p className="text-center items-center px-20 font-medium">
            The price of Toyota Fortuner 2024 in Pakistan ranges from PKR 14,499,000 
            for the base variant 2.7 G to PKR 19,899,000 for the top of the line GR-S variant.
            These prices of Toyota Fortuner in Pakistan are ex-factory.
          </p>
          <h2 className="text-green-500 py-3 text-center text-2xl font-bold mt-5">
            PKR 1.99 crore
          </h2>
        </div>

        <div className="bg-white py-4 w-full flex justify-center">
          <Link href="/PageFortuner">
            <button className="py-2 bg-blue-950 text-white flex justify-center text-center w-32 h-10 rounded-md hover:bg-blue-800">
              Make Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
