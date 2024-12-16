"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  // State to handle form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic, such as sending data to a backend
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (

    <div>

      <div className="mx-auto text-center">
        <h2 className="text-xl md:text-4xl font-bold text-black mb-6  hover:text-white pt-8">Contact</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  space-x-8">
        {/* Image Section */}
        <div className="mx-auto flex justify-center items-center">
          <Image
            className="h-[200px] w-[250px] md:ml-11 md:h-[350px] md:w-[400px] rounded-3xl"
            src="/images/contact_us_hero_banners.png"
            alt="Contact Us Image"
            width={350}
            height={350}
          />
        </div>

        {/* Contact Form Section */}
        <div className="px-0 py-6  md:py-12 md:px-6 mt-14 ">

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center mr-7">
              <label htmlFor="name" className="  hover:text-pink-500 block text-sm font-semibold text-white w-1/3">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-8 w-44 md:h-[35px] px-3 md:px-4 py-2 mt-2 border border-text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex items-center mr-7">
              <label htmlFor="email" className=" hover:text-pink-500 block text-sm font-semibold text-white w-1/3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-8 w-44 md:h-[35px] px-3 md:px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex items-center  mr-7">
              <label htmlFor="message" className="  hover:text-pink-500 block text-sm font-semibold text-white w-1/3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="  h-20 w-44 md:h-[95px] md:w-[65%] px-3 md:px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800 "
                placeholder="Write your message"
              />
            </div>
            <button
                type="submit"
                className=" ml-14 hover:text-pink-500 w-40 md:ml-[115px] py-3 my-6  bg-slate-800 text-white font-semibold rounded-md hover:bg-black  focus:outline-none focus:ring-2 focus:ring-violet-300"
              >
                Send Message
              </button>

          </form>
        </div>
      </div>

    </div>
  );
}
