import React from 'react'
import VisionTarget1 from "../assets/target.png"
import HighPerformace from "../assets/highperformacne.png"
import MaintainSecurity from "../assets/security.png"
import BetterStrageyandQualtity from "../assets/quality.png"


const WhyToChooseUs = () => {
  return (
    <div className='max-w-[1140px] max-h-[1030px]  ml-[210px] mr-[30px]  mt-[100px]'>
            <h2>WHY CHOOSE US</h2>
            <h2>WHY WE ARE THE BEST</h2>

            <div className='flex flex-items gap-3'>
                <div className='bg-gray-100'>
                    <div><img src={VisionTarget1} alt="" /></div>
                    <h2 className='font-medium'>Clarified Vision & Target</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
                <div className='bg-gray-100'>
                    <div><img src={HighPerformace} alt="" /></div>
                    <h2 className='font-medium'>High Performance</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>

                <div className='bg-gray-100'> 
                    <div><img src={MaintainSecurity} alt="" /></div>
                    <h2 className='font-medium'>Maintain Security</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
                <div className='bg-gray-100'>
                    <div><img src={BetterStrageyandQualtity} alt="" /></div>
                    <h2 className='font-medium'>Better Strategy & Quality</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>

            </div>
    </div>
  )
}

export default WhyToChooseUs