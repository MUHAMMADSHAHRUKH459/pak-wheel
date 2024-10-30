import React from "react";
import Link from "next/link";

export default function Featured() {
   return (
      <div className="flex flex-col bg-gray-200" id="Featured">
         <div>
            <div className="w-full flex justify-center">
               <h1 className="text-3xl py-4 px-6 font-bold text-blue-900">Featured New Cars</h1>
            </div>
            
            <div className="w-96 flex justify-center items-center">
               <ul className="flex flex-row items-start space-x-8 px-6 py-5 sm:flex-row">
                  <li><Link href="/Populer" className="hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">Popular</Link></li>
                  <li><Link href="/Upcoming" className="hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">Upcoming</Link></li>
                  <li><Link href="/NewlyLaunched" className="hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">Newly Launched</Link></li>
               </ul>
            </div>
         </div>

         {/* Car Display Section */}
         <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-1 gap-x-14 mt-10 mb-5">

            {/* Toyota Corolla */}
            <div className="px-2 h-96 w-72 bg-fixed">
            <Link href="/DetailCorrola">
   <img src="https://cdn.leonardo.ai/users/312ca1ba-044b-4193-a505-805b21e3ad52/generations/c6f9dde5-d562-46cc-8bd8-785144791550/Leonardo_Phoenix_A_highresolution_sideview_image_of_a_Toyota_C_2.jpg"
   alt="car"
   className="cursor-pointer w-60 items-center h-64"/>
</Link>
               <h2 className="flex justify-center hover:text-blue-600 font-bold text-2xl px-4 text-blue-800">Toyota Corolla</h2>
               <p className="flex justify-center text-green-500">PKR 70.5 lacs</p>
               <div className="flex justify-center text-2xl text-yellow-500 mr-2">{'★★★★☆'}</div>
            </div>

            {/* Additional Cars */}
            {/* Toyota Land Cruiser */}
            <div className="px-2 h-96 w-72">
               <Link href="/DetailLandcruiser">
                  <img
                     src="https://cdn.leonardo.ai/users/312ca1ba-044b-4193-a505-805b21e3ad52/generations/6ba5349e-7705-41e7-a1ec-6b7413aebb2b/Leonardo_Phoenix_A_highquality_sideprofile_image_of_a_Toyota_L_2.jpg"
                     alt="Toyota Land Cruiser"
                     className="cursor-pointer w-60 items-center h-64"
                  />
               </Link>
               <h2 className="flex justify-center hover:text-blue-600 font-bold text-2xl px-4 text-blue-800">Toyota Land Cruiser</h2>
               <p className="flex justify-center text-green-500">PKR 12. crore</p>
               <div className="flex justify-center text-2xl text-yellow-500 mr-2">{'★★★☆☆'}</div>
            </div>

            {/* Toyota Yaris */}
            <div className="px-2 h-96 w-72">
               <Link href="/DetailYaris">
                  <img
                     src="https://cdn.leonardo.ai/users/312ca1ba-044b-4193-a505-805b21e3ad52/generations/3ba5d2f4-a5c6-465d-9390-36a938954951/Leonardo_Phoenix_A_centered_sideview_image_of_a_Toyota_Yaris_i_3.jpg"
                     alt="Toyota Yaris"
                     className="cursor-pointer w-60 items-center h-64"
                  />
               </Link>
               <h2 className="flex justify-center hover:text-blue-600 font-bold text-2xl px-4 text-blue-800">Toyota Yaris</h2>
               <p className="flex justify-center text-green-500">PKR 63.2 Lacs</p>
               <div className="flex justify-center text-2xl text-yellow-500 mr-2">{'★★☆☆☆'}</div>
            </div>

            {/* Toyota Fortuner */}
            <div className="px-2 h-96 w-72">
               <Link href="/DetailFortuner">
                  <img
                     src="https://cdn.leonardo.ai/users/312ca1ba-044b-4193-a505-805b21e3ad52/generations/e85e2a56-a338-4b2c-98d9-55092a18e10e/Leonardo_Phoenix_A_highresolution_frontside_angled_image_of_a_1.jpg"
                     alt="Toyota Fortuner"
                     className="cursor-pointer w-60 items-center h-64"
                  />
               </Link>
               <h2 className="flex justify-center hover:text-blue-600 font-bold text-2xl px-4 text-blue-800">Toyota Fortuner</h2>
               <p className="flex justify-center text-green-500">PKR 1.99 crore</p>
               <div className="flex justify-center text-2xl text-yellow-500 mr-2">{'★★★★☆'}</div>
            </div>

         </div>
      </div>
   );
}
