import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component";

const DoctorCard = ({ image, title, experience, rating }) => {
  return (
    <Link href="/DoctorDetails">
      <div className="w-[100%] flex justify-center mb-6"> 
        <div className="w-[80%] max-[882px]:w-[100%] h-[80px] flex justify-between px-[30px] bg-[#DAEDFF] rounded-3xl">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src={image}
                height={100}
                width={50}
                alt="img"
                className="rounded-full h-[60px] w-[60px]"
              />
            </div>
            <h1 className="text-[20px] font-semibold max-[547px]:text-[14px]">{title}</h1>
          </div>

          <div className="pt-[6px] max-[711px]:hidden ">
            <ReactStars
              count={5}
              size={42}
              value={rating}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
          <div className="text-[20px] font-semibold pt-[29px] max-[547px]:text-[14px]">
            Experience: {experience} years
          </div>
        </div>
      </div>
    </Link>
  );
};

const DoctorList = () => {
  const doctors = [
    {
      image: "/doctor1.png",
      title: "Dr. Richard Brook",
      experience: 4,
      rating: 4.5,
    },
    {
      image: "/doctor2.png",
      title: "Dr. Sheamus",
      experience: 3,
      rating: 4.7,
    },
    {
      image: "/doctor3.png",
      title: "Dr. Emily",
      experience: 5,
      rating: 4.2,
    },
    {
      image: "/doctor4.png",
      title: "Dr. Wang Doe",
      experience: 2,
      rating: 4.3,
    },
    {
      image: "/doctor5.png",
      title: "Dr. Micky Will",
      experience: 3,
      rating: 4.2,
    },
    {
      image: "/doctor6.png",
      title: "Dr. Shane Warn  ",
      experience: 4,
      rating: 4.0,
    },
  ];

  return (
    <div>
      {doctors.map((doctor, index) => (
        <DoctorCard
          key={index}
          image={doctor.image}
          title={doctor.title}
          experience={doctor.experience}
          rating={doctor.rating}
        />
      ))}
    </div>
  );
};

export default DoctorList;
