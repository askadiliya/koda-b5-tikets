import React from 'react'

function Subscribe() {
  return (
    <>
      <div className="m-20">
        <div className="bg-blue-600 py-20 px-20 text-center rounded-lg ">
            <p className="text-3xl text-white">Subscribe to our newsletter</p>
            <div className="mt-5 flex gap-3 justify-center">
                <input type="text" name="" id=""  placeholder="First Name" className="py-3 px-6 border border-white outline-none rounded-sm text-white"/>
                <input type="email" name="" id="" placeholder="Email Address" className="py-3 px-6 border border-white outline-none rounded-sm text-white"/>
                <button type="submit" className="bg-white py-3 px-6 rounded-sm">Subscribe Now</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Subscribe
