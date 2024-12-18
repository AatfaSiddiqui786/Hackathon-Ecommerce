import React from 'react'

import Image from 'next/image'
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
const page = () => {
    return (
        <div>
            <div>
                <div className="w-[100%] h-auto">
                    <Image
                        src={'/images/hero.png'}
                        height={700}
                        width={700}
                        alt="vase"
                        className="w-full h-[80%] object-cover"
                    />
                </div>
            </div>


            <section>
                <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
                    {/* Title */}
                    <h1 className="text-center text-xl md:text-2xl font-semibold">
                        What makes our brand different
                    </h1>

                    {/* Features */}
                    <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
                        {/* Feature 1 */}
                        <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
                            <TbTruckDelivery size={30} className="text-[#2A254B]" />
                            <p className="py-4 font-semibold">Next day as standard</p>
                            <p>Order before 3pm and get your order the next day as standard.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
                            <IoIosCheckmarkCircleOutline size={30} className="text-[#2A254B]" />
                            <p className="py-4 font-semibold">Made by true artisans</p>
                            <p>Hand-crafted goods made with real passion and craftsmanship.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
                            <MdOutlinePriceChange size={30} className="text-[#2A254B]" />
                            <p className="py-4 font-semibold">Unbeatable prices</p>
                            <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
                            <LuSprout size={30} className="text-[#2A254B]" />
                            <p className="py-4 font-semibold">Recycled packaging</p>
                            <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="px-4 md:px-8 py-2 text-[#2A254B] pt-5">


                    {/* Product Items */}
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 space-y-5">
                        {/* Product 1 */}
                        <div className="w-full h-auto mt-5">
                            <Image
                                src={'/images/chair.png'}
                                height={700}
                                width={700}
                                alt="chair"
                                className="w-full h-auto object-cover "
                            />
                            <div className="mt-4 text-[#2A254B]">
                                <p className="py-2">The Dendy Chair</p>
                                <p>$250</p>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="w-full h-auto">
                            <Image
                                src={'/images/vase.png'}
                                height={700}
                                width={700}
                                alt="vase"
                                className="w-full h-auto object-cover"
                            />
                            <div className="mt-4 text-[#2A254B]">
                                <p className="py-2">Rustic VaseSet</p>
                                <p>$155</p>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="w-full h-auto">
                            <Image
                                src={'/images/silky.png'}
                                height={700}
                                width={700}
                                alt="silky vase"
                                className="w-full h-auto object-cover "
                            />
                            <div className="mt-4 text-[#2A254B]">
                                <p className="py-2">The Silky Vase</p>
                                <p>$125</p>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="w-full h-auto">
                            <Image
                                src={'/images/lamp.png'}
                                height={700}
                                width={700}
                                alt="lamp"
                                className="w-full h-auto object-cover "
                            />
                            <div className="mt-4 text-[#2A254B]">
                                <p className="py-2">The Lucky Lamp</p>
                                <p>$399</p>
                            </div>
                        </div>
                    </div>




                    {/* Story Section */}
                    <div className="flex flex-col md:flex-row w-full h-auto items-center justify-around px-0 md:px-4 py-16 gap-2">
                        <div className="bg-[#2A254B] w-full md:w-2/4 text-white p-8 md:p-[6.3%] mb-8 md:mb-0">
                            <h1 className="text-sm md:text-2xl">It started with a small idea</h1>
                            <p className="mt-6">
                                A global brand with local beginnings, our story began in a small studio in South London in early 2014.
                            </p>
                            <button className="bg-[#4E4D93] md:h-12 md:w-40 h-10  w-32 rounded-sm mt-10 text-white">
                                View Collection
                            </button>
                        </div>
                        <div className="w-full md:w-2/4 ">
                            <Image
                                src="/images/About main.png"
                                alt="About main"
                                width={300}
                                height={300}
                                className="w-full transition-transform duration-300 ease-in-out "
                            />
                        </div>
                    </div>




                </div>
            </section>

            {/* Newsletter Section */}
            <div className="w-full h-auto bg-gray-100 py-8">
                <div className="m-auto w-full bg-white p-8 md:p-16">
                    <h1 className="text-[#2A254B] text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
                    <p className="text-[#2A254B] text-center mt-6 text-sm md:text-base">
                        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
                        <input
                            type="text"
                            placeholder="you@gmail.com"
                            className="bg-gray-100 w-40 mf:w-80 h-12 p-5 rounded-sm"
                        />
                        <button className="bg-[#4E4D93] h-12 w-32 rounded-sm text-white">Sign Up</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default page