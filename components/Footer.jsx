'use client'

const Foot = () => {
  return (
    <div
    className="flex justify-between p-10 h-[335px] bg-[#0080FF] w-full"
    >

        <div className="pt-[50px] text-white font-bold text-3xl">
        <p>
Lets Transform The Future Of <br/>Clinic's and Hospital Appointment's<br/> in the World.
</p>
        </div>

        <div className="w-full text-white flex flex-col gap-6">

            <p className="text-xl">Visit Us</p>

            <div className="flex gap-2">
                <img className="h-[30px]" src="./images/footer/carbon_location.png" alt="" />
                <p>No. 198, CMH Road, 2nd Floor Suite No.<br/>1016 Indiranagar, Bangalore North,<br/>Bangalore KA 560038</p>
            </div>
            <div className="flex gap-2">
                <img className="h-[23px]" src="./images/footer/Vector.png" alt="" />
                <p>hello@gmail.com</p>

            </div>
            <div className="flex flex-row gap-2">
                <img className="h-[24px]" src="./images/footer/Vector (1).png" alt="" />
                <p>+91 12345 67890</p>
            </div>
            </div>

        <div className="w-full text-white text-xl pr-[60px]">

            <p>Social Links</p>
            <div className="flex gap-3 items-center">
            <img src="./images/social/Group.png"></img>
            <img src="./images/social/Vector.png"></img>
            </div>

        </div>


    </div>
  )
}

export default Foot