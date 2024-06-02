import React from 'react'
import VisionTarget1 from "../assets/target.png"
import HighPerformace from "../assets/highperformacne.png"
import MaintainSecurity from "../assets/security.png"
import BetterStrageyandQualtity from "../assets/quality.png"


const WhyToChooseUs = () => {
  return (
    <div className='max-w-[1140px] max-h-[1030px]  ml-[210px] mr-[30px]  mt-[100px] '>
            <h2 className='text-red-700 text-2xl font-semibold ml-[430px] mr-[430px]'>WHY CHOOSE US</h2>
            <h2 className='text-black text-4xl font-bold mt-8 ml-[370px] mr-[370px]'>WHY WE ARE  BEST</h2>

            <div className='flex flex-items mt-8 gap-3' >
                <div className='bg-gray-100  p-5 rounded-md  hover:bg-gray-300'>
                    <div><img src={VisionTarget1} alt="" /></div>
                    <h2 className='font-medium mt-2'>Clarified Vision & Target</h2>
                    <p className='mt-2'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
                <div className='bg-gray-100 p-5 rounded-md hover:bg-gray-300'>
                    <div><img src={HighPerformace} alt="" /></div>
                    <h2 className='font-medium mt-2'>High Performance</h2>
                    <p className='mt-2'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>

                <div className='bg-gray-100 p-5 rounded-md hover:bg-gray-300'> 
                    <div><img src={MaintainSecurity} alt="" /></div>
                    <h2 className='font-medium mt-2'>Maintain Security</h2>
                    <p className='mt-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
                <div className='bg-gray-100 p-5 rounded-md hover:bg-gray-300'>
                    <div><img src={BetterStrageyandQualtity} alt="" /></div>
                    <h2 className='font-medium mt-2'>Better Strategy & Quality</h2>
                    <p className='mt-2'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>

            </div>
    </div>
  )
}

export default WhyToChooseUs