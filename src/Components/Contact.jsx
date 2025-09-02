import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-white flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-emerald-600 mb-4">
        Contact Me
      </h1>
      <p className="text-gray-600 mb-10 text-center max-w-md">
        Have a question, a project in mind, or just want to say hi?  
        Feel free to drop a message below!
      </p>

      {/* Contact Form */}
      <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-emerald-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
