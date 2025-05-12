import React from 'react'

function ContactDetails() {
  return (
    <div className=' mx-auto w-full  max-w-4xl px-4 sm:px-6 lg:px-8'>

<div className="space-y-4 mb-8">

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#00CAEE] text-center">
        Contact
        </h1>
        <p className="text-sm sm:text-base text-gray-300 text-center mt-1">
        Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>

      <div className='mx-auto w-full max-w-2xl flex flex-col bg-[#14151D] py-10 rounded-xl gap-y-10 justify-center px-5 '>
<h1 className='text-white font-bold text-3xl'>Email Me 🚀</h1>
<div>
  <input
    type="text"
    placeholder="Your Email"
    className="border border-gray-300 focus:border-[#00CAEE] focus:shadow-costom-shadow focus:outline-none bg-transparent w-full p-3 text-xl rounded text-gray-300"
  />
</div>

        <div><input type="text" placeholder='Your Name' className='border border-gray-300 focus:border-[#00CAEE] focus:shadow-costom-shadow focus:outline-none bg-transparent w-full p-3 text-xl rounded text-gray-300' /></div>
        <div><input type="text" placeholder='Subject' className='border border-gray-300 text-gray-300 focus:border-[#00CAEE] focus:shadow-costom-shadow focus:outline-none bg-transparent w-full p-3 text-xl rounded' /></div>
        <div>
            <textarea name="message" placeholder='Message' className='border border-gray-300 text-gray-300 focus:border-[#00CAEE] focus:shadow-costom-shadow focus:outline-none bg-transparent w-full p-3 text-xl rounded h-20' id=""></textarea>
        </div>

        <button type='button' className=' border  border-[#00E0FF] px-8 text-lg  p-3 rounded  font-medium text-gray-700 hover:text-slate-900 bg-gradient-to-r hover:bg-gradient-to-r from-emerald-300  to-sky-400 transition-all duration-700'>Submit</button>
      </div>
    </div>
  )
}

export default ContactDetails