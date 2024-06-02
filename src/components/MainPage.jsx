import React from 'react'
import mainHero from "../assets/hero.png"
const MainPage = () => {
  return (
    <div className='flex justify-between ml-[210px] mr-[30px] mt-[50px] max-w-[1140px]'>
            <div className='flex flex-col justify-center'>
                <div className='text-[#FF3147] text-xl font-medium' >
                    <h2>AWARD WINNING </h2>
                </div>
                <div className='text-black text-4xl font-bold mt-10'>
                    <h2>DIGITAL MARKETING <br/> AGENCY</h2>
                </div>
                <div className='mt-7 text-xl' >
                    <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh. 
                    Pellentesque vitae ante at elit fringilla ac at purus, 
                    Morbi sed lacus nec risus finibus feugiat et fermentum
                    </p>
                </div>
                <div>
                <button type="button" className="mt-10 text-white bg-red-700 hover:bg-green-400 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-700 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-gray-500">CONTACT US</button>

                </div>
            </div>
            <div className='m-10'> 
                <img src={mainHero} className='w-[1187px]  h-[537px]' alt="Not Found" />
            </div>
    </div>
  )
}

export default MainPage