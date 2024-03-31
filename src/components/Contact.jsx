import React from 'react'

const Contact = () => {
  return (
  <>
   <div className="bg-gray-100 py-16 px-6 flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-8">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Have a question or feedback? Reach out to us!
        </p>
        {/* Contact form */}
        <form className="w-full max-w-lg flex justify-center flex-col items-center text-center">
          <div className="flex flex-wrap mb-6">
            <div className="w-full">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" className="form-input w-full" placeholder="Your Name" />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
              <input type="email" id="email" className="form-input w-full" placeholder="Your Email Address" />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" className="form-textarea w-full" rows="6" placeholder="Your Message"></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-bold hover:bg-blue-600 transition duration-300">Submit</button>
          </div>
        </form>
      </div>
    </div>
   </>
  )
}

export default Contact