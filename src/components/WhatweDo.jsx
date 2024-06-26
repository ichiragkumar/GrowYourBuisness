import React from 'react'
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"
import dot1 from "../assets/dot1.png"
import dot2 from "../assets/dot2.png"


const WhatWeDoSection = () => {
  return (
    <div className='max-w-[1920px] max-h-[1030px]  ml-[210px] mr-[30px]' > 
        <h2 className='text-red-700 font-medium text-xl'>WHAT WE DO</h2>
        <div className='flex justify-between mt-10 gap-5'>

            <div className='text-black text-2xl font-bold '>
                <h2>SERVICES  PROVIDE <br/>
                    FOR  YOU </h2>
            </div>


            <div className='mr-[200px] text-xl '>
                <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque <br/>
                    vitae ante at elit fringilla ac at purus, 
                    Morbi sed lacus nec risus finibus <br/>
                    feugiat et fermentum
                </p>
            </div>
        </div>

        <div className='flex justify-evenly  mt-10 gap-2'>
            <div><img src={service1} className='w-[370px] h-[526px]' alt="" /></div>
            <div><img src={service2} className='w-[370px] h-[526px]' alt="" /></div>
            <div><img src={service3} className='w-[370px] h-[526px]' alt="" /></div>
            <div><img src={service2} className='w-[370px] h-[526px]' alt="" /></div>
        </div>

        <div className='flex flex-items mt-10 gap-6 cursor-pointer'> 
            <div className='mb-1'> <img src={dot1} alt="" /></div>
            <div className='mt-2'><img src={dot2} alt="" /></div>
            <div className='mt-2'> <img src={dot2} alt="" /></div>
        </div>
    </div>
  )
}

export default WhatWeDoSection