import React from 'react'
import projectsImg from "../assets/projects.png"

const Project = () => {
  return (
    <div className='max-w-[1140px] max-h-[1030px]  ml-[210px] mr-[30px]  mt-[100px] '>
        <div className='text-red-700 text-2xl  font-semibold  ml-[430px] mr-[430px]'>        
            <h2>OUR PROJECTS</h2>
        </div>
        <div className='text-black text-4xl font-bold mt-8 ml-[340px] mr-[320px]'> 
            <h2>OUR BEST PROJECTS</h2>
        </div>



        <div className='flex justify-ceter mt-10'>
            <div><img src={projectsImg} className='w-[470px] h-[367px]' alt="" /></div>
            <div className='flex flex-col justify-center gap-5 h-[367px] ml-3 cursor-pointer'>

                <div className='w-[370px]  bg-gray-100 p-2 pb-4 hover:bg-gray-300'>
                    <h1 className='font-medium'>Genderless Kei – Japan's Hot</h1>
                    <p>Set to launch on the manufacturer's
                        new A330neo aircraft in 2017, it's
                        offering lots of</p>
                </div>

                <div className='w-[370px] h-[89px] bg-gray-100 p-2 pb-4 hover:bg-gray-300'>
                    <h1 className='font-medium'>Better Strategy & Quality</h1>
                    <p>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                </div>
                <div className='w-[370px] h-[89px] bg-gray-100 p-2 pb-4 hover:bg-gray-300'>
                    <h1 className='font-medium'>Genderless Kei – Japan’s Hot</h1>
                    <p>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Project