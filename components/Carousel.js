import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const Carousel = () => {

  const people = [
    {
      name: "John Doe",
      description: "A software engineer with a passion for developing scalable web applications and working with modern web technologies.",
      email: "john.doe@example.com",
      profileImage: "/Rectangle-58.png"
    },
    {
      name: "Jane Smith",
      description: "A digital marketing expert specializing in SEO, content creation, and social media strategy for small businesses.",
      email: "jane.smith@example.com",
      profileImage: "/Rectangle-60.png"
    },
    {
      name: "Robert Johnson",
      description: "A product manager who loves creating user-centered digital experiences and driving innovation in tech products.",
      email: "robert.johnson@example.com",
      profileImage: "/Rectangle-59.png"
    },
    {
      name: "Emily Davis",
      description: "A graphic designer with a keen eye for typography, branding, and creating impactful visual designs.",
      email: "emily.davis@example.com",
      profileImage: "/Rectangle-58.png"
    },
  ];

  return (
    <div className='p-5 lg:p-12 2xl:p-16'>
      <div className='w-full h-[300px] lg:h-[650px] 2xl:h-[770px] bg-blue rounded-[25px] lg:rounded-[60px] py-5 px-10'>
        <div className='flex items-center justify-center gap-2 lg:gap-5 w-full'>
          <img className='w-4 h-4' src="/Ellipse-21.png" alt="" />
          <h1 className='lg:text-[35px] 2xl:text-[60px] font-semibold text-white'>What Our Users Say</h1>
          <img className='w-4 h-4' src="/Ellipse-21.png" alt="" />
        </div>

        <div className='mt-5 lg:mt-24'>
          <Splide
            options={{
              type: 'loop',
              perPage: 3, 
              gap: '1rem',
              breakpoints: {
                1024: { perPage: 2 },  
                768: { perPage: 1 },
              },
            }}
          >
            {people.map((person, index) => (
              <SplideSlide key={index}>
                <div className='w-full h-[200px] lg:w-[350px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[450px] flex items-center justify-center'>
                  <div className='relative w-full lg:h-[250px] bg-white rounded-xl px-4 lg:rounded-[40px] 2xl:rounded-[60px] hover:shadow-xl hover:cursor-pointer'>
                    <div
                      className='absolute h-[50px] w-[50px] top-20 left-28 lg:h-[100px] lg:w-[100px] 2xl:w-[130px] 2xl:h-[130px] rounded-full lg:left-[90px] lg:top-48 2xl:left-[160px] bg-cover bg-center'
                      style={{ backgroundImage: `url(${person.profileImage})` }}
                    ></div>
                    <div className='text-center mt-24 lg:mt-32'>
                      <h2 className='absolute top-32 left-24 text-center 2xl:top-[330px] 2xl:left-[175px] lg:top-[300px] lg:left-[100px] text-lg font-bold'>{person.name}</h2>
                      <p className=' absolute top-5 text-[10px] lg:top-10 lg:text-[20px]'>{person.description}</p>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
