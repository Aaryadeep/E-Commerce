import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets.js'

const About = () => {
   return (
      <div>
         <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'} />
         </div>

         <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
               <p>Welcome to Forever, where shopping meets convenience and innovation. Built with a passion for quality and technology, we offer a diverse range of products backed by a seamless online experience. Our user-friendly platform provides personalized recommendations, secure payments, and quick delivery—bringing the best shopping experience right to your fingertips. Join us on this journey to redefine e-commerce, where every click brings you closer to what you love.</p>

               <b className='text-gray-800'>About Me</b>
               <p>I'm Aaryadeep, a final-year B.Tech student in Information Technology at Madan Mohan Malaviya University of Technology (MMMUT). I'm a dedicated competitive programmer with a Candidate Master (CM) rank (1928 rating) on Codeforces, ranked 212th in India, and a 5-star rating on CodeChef. My journey in coding has led me to work on various development and machine learning projects, applying my problem-solving skills to build real-world applications. Currently, I'm seeking SDE internship and full-time roles to further apply my skills and contribute to innovative teams.</p>
            </div>
         </div>
      </div>
   )
}

export default About
