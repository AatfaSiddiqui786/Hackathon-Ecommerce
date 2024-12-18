import Image from "next/image";
import React from "react";


const Shopping = () => {
  return (
    <div>
      <div className="h-auto w-full  p-8">
        <h1 className="text-black text-4xl font-medium text-center sm:text-left mb-6">
          Your Shopping Cart
        </h1>
        {/* Table Header */}
        <ul className="hidden sm:flex sm:justify-around sm:text-lg text-gray-600 border-b pb-4 mb-4">
          <li>Product</li>
          <li className="pl-44 ">Quantity</li>
          <li>Total</li>
        </ul>
        {/* Product 1 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-around bg-white rounded-lg shadow-md p-4 mb-6">
          <Image
            src="/Images/Product 1.png"
            alt="Product 1"
            width={1500}
            height={1500}
            className="rounded-md object-cover w-[292PX]  h-[134px]"
          />

          <div className="mt-4 sm:mt-0 text-center text-[#2A254B]">
            <p>1</p>
          </div>
          <div className="mt-4 sm:mt-0 text-center font-semibold text-[#2A254B]">
            £85
          </div>
        </div>
        {/* Product 2 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-around bg-white rounded-lg shadow-md p-4 mb-6">
          <Image
            src="/images/Products.png"
            alt="Product 2"
            width={100}
            height={100}
            className="rounded-md object-cover w-[250PX]  h-[100px]"
          />

          <div className="mt-4 sm:mt-0 text-center text-[#2A254B]">
            <p>1</p>
          </div>
          <div className="mt-4 sm:mt-0 text-center font-semibold text-[#2A254B]">
            £125
          </div>
        </div>
        {/* Subtotal */}
        <div className="flex justify-between sm:justify-end mt-8  ">
          <p className="text-gray-600 text-lg">Subtotal</p>
          <p className="font-semibold text-lg">£210</p>
        </div>
        {/* Checkout Button */}
        <div className="flex justify-end mt-6">
          <button className="bg-[#4E4D93] text-white py-2 items-center px-6  transition">
            Go to Checkout
          </button>
        </div>
          </div>
    </div>
  );
};

export default Shopping;
