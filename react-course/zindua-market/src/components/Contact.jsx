import React from 'react'

function Contact() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your name"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <input
          type="email"
          placeholder="Your email"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <textarea
          placeholder="Your message"
          rows={4}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="bg-black text-white rounded-md px-4 py-2 text-sm hover:bg-grey-700">Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact