import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Form = () => {
  const [value, onChange] = useState(new Date());

  return (
    <section id="form" className="bg-gray-100 rounded-lg w-full mx-auto px-4 sm:px-6 "> 
      <h2 className="text-center text-2xl font-semibold mb-5">Contact Us</h2>

      <form>
        <div className="flex flex-col items-center h-auto mx-auto my-2 rounded-lg max-w-lg">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md sm:w-[90%] sm:mb-4 lg:w-[100%]"  
          />

          <label htmlFor="email" className="block mb-2 text-sm font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md sm:w-[90%] sm:mb-4 lg:w-[100%]"  
          />

          <label htmlFor="message" className="text-center block mb-2 text-sm font-medium">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md sm:w-[90%] sm:mb-4 lg:w-[100%]"  
            rows="6"
          ></textarea>

          <label htmlFor="date" className="text-center block mb-2 text-sm font-medium">Select a Date:</label>
          <div className="w-full mb-4">
            <Calendar
              onChange={onChange}
              value={value}
              className="react-calendar w-full max-w-sm sm:max-w-[90%] lg:max-w-[100%] border border-gray-300 rounded-md bg-white"
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="mt-8 bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-600 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Form;
