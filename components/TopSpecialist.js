import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const TopSpecialist = () => {
    const doctors = [
        {
            name: 'Dr. Travis Oman',
            specialty: 'Orthopedic',
            imageUrl: '/Rectangle-34.png',
        },
        {
            name: 'Dr. Annah Ray',
            specialty: 'Dentist',
            imageUrl: '/Rectangle-35.png',
        },
        {
            name: 'Dr. Richard Brook',
            specialty: 'Gastroenterologist',
            imageUrl: '/Rectangle-36.png',
        },
        {
            name: 'Dr. Vivian Monroe',
            specialty: 'Pediatry Surgeon',
            imageUrl: '/Rectangle-37.png',
        },
    ]

    return (
        <div className='px-5 lg:px-12 2xl:px-16'>
            <div className='flex items-center gap-2 lg:gap-5'>
                <Image className='w-2 h-2 lg:w-3 lg:h-3' src={'/Ellipse 2.png'} width={10} height={10} />
                <h1 className='lg:text-[30px] 2xl:text-[40px] font-semibold'>Top Specialist's</h1>
                <Image className='w-2 h-2 lg:w-3 lg:h-3' src={'/Ellipse 2.png'} width={10} height={10} />
            </div>

            <div className='block lg:hidden mt-5 ml-24'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ clickable: true }}
                    className='h-[160px]'
                >
                    {doctors.map((doctor, idx) => (
                        <SwiperSlide key={idx}>
                            <Card doctor={doctor} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='hidden lg:flex items-center gap-5 lg:gap-10 2xl:justify-between px-3 lg:px-10 2xl:px-14 h-[130px] lg:h-[450px] 2xl:h-[520px] rounded-[25px] lg:rounded-[60px] bg-[#DDE7FF] mt-5 lg:mt-12'>
                {doctors.map((doctor, idx) => (
                    <Card doctor={doctor} key={idx} />
                ))}
            </div>
        </div>
    )
}

const Card = ({ doctor }) => (
    <div className='h-[160px] w-[160px] lg:w-[300px] lg:h-[400px] 2xl:w-[330px] 2xl:h-[440px] bg-white lg:rounded-[35px] 2xl:rounded-[40px] rounded-md flex flex-col pb-3'>
        <div
            className='h-[150px] lg:h-[250px] 2xl:h-[313px] lg:rounded-[35px] bg-cover bg-center object-fill'
            style={{ backgroundImage: `url(${doctor.imageUrl})` }}
        ></div>
        <div className='relative flex flex-col gap-2 lg:gap-3 items-center justify-center'>
            <div className='absolute -top-[100px] right-0 lg:-top-[250px] lg:right-8 2xl:-top-[300px] w-[20px] h-[8px] 2xl:right-12 lg:w-[70px] lg:h-[30px] bg-blue text-center text-white'>
                <p className='text-[5px] lg:text-[15px]'>✨ 4.4</p>
            </div>
            <div>
                <h1 className='text-[10px] lg:text-[24px] font-semibold'>{doctor.name}</h1>
                <h1 className='text-[8px] lg:text-[20px] font-light text-center'>{doctor.specialty}</h1>
            </div>
            <Link
                href='/login'
                className='w-[50px] h-[10px] rounded-md text-[8px] lg:w-[200px] lg:h-[48px] lg:rounded-[60px] bg-[linear-gradient(93.55deg,_#00D7CF_-2.63%,_#53A7FF_109.66%)] text-white hover:font-bold transition-all duration-200 ease-out flex justify-center items-center 2xl:text-[24px] xl:text-[20px]'
            >
                Book Now
            </Link>
        </div>
    </div>
)

export default TopSpecialist
