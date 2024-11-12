import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">

          <div className="space-y-2">
            <p className="font-semibold text-gray-700">Feel free to reach out via email:</p>
            <a href="mailto:aaryadeep21122003@gmail.com" className="text-blue-500 hover:underline text-lg">
              aaryadeep21122003@gmail.com
            </a>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-gray-700">Connect with me on LinkedIn:</p>
            <a href="https://www.linkedin.com/in/aaryadeep21" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">
              linkedin.com/in/aaryadeep21
            </a>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-gray-700">Check out my GitHub projects:</p>
            <a href="https://github.com/Aaryadeep" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">
              github.com/Aaryadeep
            </a>
          </div>

        </div>
      </div>
    </div>


  )
}

export default Contact
