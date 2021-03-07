import React from "react"

const Contact = () => (
  <section className="bg-indigo-500">
    <div className="container px-0 py-6 mx-auto sm:px-4 md:w-2/5">
      <h2 className="text-3xl font-bold text-center text-white">Get In Touch</h2>
      <div className="mt-8 px-4">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-white">Name</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Your Name"
            />
          </label>
          <label className="block">
            <span className="text-white">Email</span>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="name@example.com"
            />
          </label>
          <label className="block">
            <span className="text-white">Message</span>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="3"
              placeholder="Write me a message"
            />
          </label>
          <button className="text-white font-semibold px-6 py-3 text-base boorder rounded border-transparent leading-snug bg-indigo-900">Submit</button>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
