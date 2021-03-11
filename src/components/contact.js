import React, { useState } from "react"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    submittedMsg: "",
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const disabledForm = !formData.name || !formData.email || !formData.message;

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        subject: `Contact Form Submission from Hello I'm Kyle`,
        ...formData,
      }),
    })
      .then(() =>
        setFormData({
          ...formData,
          submittedMsg:
            "Thank you for contacting me, I will be in touch soon!",
        })
      )
      .catch(error => alert(error))
  }
  return (
    <section className="bg-indigo-500">
      <div className="container px-0 py-6 mx-auto sm:px-4 md:w-2/5">
        <h2 className="text-3xl font-bold text-center text-white">
          Get In Touch
        </h2>
        <div className="mt-8 px-4">
          <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} data-netlify-honeypot="bot-field">
            <div className="grid grid-cols-1 gap-6 h-96">
              {!formData.submittedMsg ? (
                <>
                  <label className="block">
                    <span className="text-white">Name</span>
                    <input
                      type="text"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Your Name"
                      onChange={handleChange}
                    />
                  </label>
                  <label className="block">
                    <span className="text-white">Email</span>
                    <input
                      name="email"
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="name@example.com"
                      onChange={handleChange}
                    />
                  </label>
                  <label className="block">
                    <span className="text-white">Message</span>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      rows="3"
                      name="message"
                      placeholder="Write me a message"
                      onChange={handleChange}
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={disabledForm}
                    className={`text-white font-semibold px-6 py-3 text-base border rounded border-transparent leading-snug bg-indigo-900 ${disabledForm ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    Submit
                  </button>
                </>
              ) : (
                <p className="text-white text-2xl text-center h-full flex justify-items-center items-center">{formData.submittedMsg}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
