import React from 'react'
import placeholder from '../../assets/placeholders/pl-ico.svg'

export default function PremiumBanner() {
  return (
    <div className='bg-bg cap:h-[500px] mt-[100px]  bg-cover bg-no-repeat  text-white p-10'>
        <section className='items-center w-[80vw] justify-center m-auto p-10 flex'>
                 <div>
            <h1 className='cap:text-5xl font-bold'> Get Started! </h1>
            <p className='cap:w-3/4'>Are you looking to take your advertising and business promotion to new heights? Look no further! Join us today and unlock a world of
                opportunities to grow your business.
            </p>
            <button className='mt-10 cap:mt-0'>Get Started</button>
        </div>

        <div className='p-[20px] bg-white-100 cap:w-[400px] mt-5 cap:mt-0 text-black h-auto rounded-lg '>
                <img src={placeholder} alt='' className='w-full  h-auto rounded-md'/>
               <div className='mt-2 font-bold text-black flex-col flex gap-2'>
               <p>Company Name </p>
                <h2>Big Burger Deal <span className='float-right'> $10.00</span></h2>
                <p> Likes </p>
               </div>
            </div>

        </section>
   
    </div>
  )
}
