
import React from 'react'

const Carousel = () => {

  const people = [
    {
      name: "John Doe",
      description: "A software engineer with a passion for developing scalable web applications and working with modern web technologies.",
      email: "john.doe@example.com"
    },
    {
      name: "Jane Smith",
      description: "A digital marketing expert specializing in SEO, content creation, and social media strategy for small businesses.",
      email: "jane.smith@example.com"
    },
    {
      name: "Robert Johnson",
      description: "A product manager who loves creating user-centered digital experiences and driving innovation in tech products.",
      email: "robert.johnson@example.com"
    },
    {
      name: "Emily Davis",
      description: "A graphic designer with a keen eye for typography, branding, and creating impactful visual designs.",
      email: "emily.davis@example.com"
    },
  ]

  return (
    <div className='p-5 lg:p-12 2xl:p-16'>
      <div className='w-full h-[400px] lg:h-[770px] bg-blue rounded-[25px] lg:rounded-[60px] py-5'>
        <div className='flex items-center justify-center gap-2 lg:gap-5 w-full'>
          <img className='w-4 h-4' src="/Ellipse-21.png" alt="" />
          <h1 className='lg:text-[35px] 2xl:text-[60px] font-semibold text-white'>What Our Users Say </h1>
          <img className='w-4 h-4' src="/Ellipse-21.png" alt="" />
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Carousel;