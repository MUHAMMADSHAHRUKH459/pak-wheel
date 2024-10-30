import React from "react";

export default function BookingForm() {
    return (
        <section className="bg-gradient-to-r bg-gray-100 py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-extrabold mb-6 text-blue-900">
                    Enter Your Details
                </h2>
                <form className="max-w-md mx-auto">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border border-gray-800 text-gray-900 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border border-gray-800 text-gray-900 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            placeholder="Card Number"
                            className="w-full p-3 border border-gray-800 text-gray-900 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full p-3 border border-gray-800 text-gray-900 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="date"
                            className="w-full p-3 border border-gray-800 text-gray-900 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="time"
                            className="w-full p-3 border border-gray-800 text-gray-900 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <button className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900">
                            Reserve Table
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
