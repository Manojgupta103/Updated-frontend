import React from "react";
import DoctorCard from "@/components/DoctorCard";
import doc from "@/Doctors/data.json"

const CategoryData = ({category}) => {
  const arr = doc.doctors.filter((item)=> item.type===category)
  return (
    <div className="mt-[30px] min-h-screen">
      <div className="h-[55px] w-[250px] bg-gradient-to-r from-[#00D7CF] to-[#017BFC] rounded-3xl text-center pt-[10px] ml-[55px] text-[22px] font-medium  text-white">
       {category}
      </div>
      <div className="flex justify-center mt-[50px]">
        <div className="flex justify-between  w-[70%] text-[25px] font-medium">
          <div className="max-[547px]:text-[18px]">Doctor Names</div>
          <div className="max-[711px]:hidden">Ratings</div>
          <div className="max-[547px]:text-[18px]">Experience</div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-[10px]">
       {arr && arr.map((item)=>{
          return  <DoctorCard image={item.image} title={item.name} category={category} expereince={item.experience}/>
       })}
      </div>
    </div>
  );
};

export default CategoryData;
