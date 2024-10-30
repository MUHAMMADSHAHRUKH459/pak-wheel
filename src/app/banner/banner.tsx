"use client"
import React from 'react'

export default function Banner() {
  return (
    <div className="h-96 relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-8 py-8 mb-8">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://cdn.leonardo.ai/users/312ca1ba-044b-4193-a505-805b21e3ad52/generations/16c89d73-1116-401c-83ca-0c8cd816b715/Leonardo_Phoenix_A_sleek_and_modern_3D_illustration_of_a_car_f_0.jpg" 
          className="w-full h-full object-cover"
          alt="Car Background" 
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center py-2">
        <h2 className="text-white text-lg sm:text-5xl font-bold mb-4 py-3">Find Used Cars in Pakistan</h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl px-3">
          With thousands of cars, we have just the right one for you
        </p>
        <div 
          style={{ position: 'relative' }} 
          className="bg-black h-9 flex flex-col sm:flex-row gap-2 sm:space-y-0 sm-x-5"
        >
          <input 
            type="text" 
            className="py-2 px-10 outline-none text-center w-48 sm:w-auto"
            placeholder="Car Make or Model" 
          />
          <input 
            type="text" 
            className="py-2 px-10 outline-none text-center w-48 sm:w-auto"
            placeholder="All Cities" 
          />
          <input 
            type="text" 
            className="py-2 px-10 outline-none text-center w-48 sm:w-auto"
            placeholder="Price Range" 
          />
        </div>
        <div className="py-5">
          <button  
            type="button"
            className="bg-transparent border border-white text-white text-sm font-semibold py-2 px-6 rounded-sm shadow-lg hover:bg-white hover:text-black transition duration-300"
          >
            Advanced Filter
          </button> 
        </div>       
      </div>
    </div>
  )
}
