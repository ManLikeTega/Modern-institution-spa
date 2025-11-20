import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitHandler = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <>
      <main className=" p-5 md:p-20 " id="contact">
        <h3 className="text-2xl md:text-5xl font-bold mb-2">Contact Us</h3>

        <p className="text-gray-600 mb-6 text-base md:text-lg">
          Have questions or want to work with us? Fill out the form below and
          we’ll get back to you as soon as possible.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmitHandler)}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Your Name:
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Your Email:
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block font-medium mb-1">
              Your Phone:
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block font-medium mb-1">
              Location:
            </label>
            <select
              id="location"
              {...register("location", { required: "Location is required" })}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select your location</option>
              <option value="new_york">New York</option>
              <option value="los_angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
              <option value="miami">Miami</option>
              <option value="seattle">Seattle</option>
              <option value="boston">Boston</option>
            </select>
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Your Message (Optional):
            </label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Type your message here"
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className=" text-white px-4 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-700 "
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default ContactForm;
