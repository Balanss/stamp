/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import { lazy } from 'react'
import logo from '../../assets/deal-stamps-logo.png'
import landing from '../../assets/placeholders/landing-pic.jpg'


const Premium = lazy(() => import("../Deals/Premium"));
const FreeTier = lazy(() => import("../Deals/FreeTier"));
const PremiumBanner = lazy(() => import("../Banner/PremiumBanner"));
const BrowseByCat = lazy(() => import("../Categories/BrowseByCat"));
const Partner = lazy(() => import("../partners/Partner"));
const Footer = lazy(() => import("../footer/Footer"));

export default function home() {


console.log(import.meta.env.VITE_SOME_API_KEY)

  return (
<>
<div className='mt-[150px] lg:w-[90vw] m-auto'>
        <section className='cap:flex flex-row items-center justify-center'>
            <div className='flex flex-col p-8 md:w-[50vw]'>
                <img src={logo} alt='' className='w-full h-full -ml-5'/>
                <h1 className='laptop:text-6xl  font-bold'>Don't miss exciting deals and offers in <span className='text-red-700'>Suriname.</span></h1>
            </div>

            <div className='p-[50px] bg-red-700 w-[400px] h-auto rounded-lg '>
                <img src={landing} alt='' className='w-full  h-auto p-2 bg-white rounded-md'/>
               <div className='mt-2 font-bold text-white flex-col flex gap-2'>
               <p>Company Name </p>
                <h2>Big Burger Deal <span className='float-right'> $10.00</span></h2>
                <p> Likes </p>
               </div>
            </div>
        </section>
    </div>

   <div>
   <Premium/>
   <hr className='w-1/2 m-auto mt-[20px] '/>
   <FreeTier/>
   <hr className='w-1/2 m-auto mt-[20px]'/>
    <PremiumBanner/>
    <BrowseByCat/>
    <Partner/>
    <Footer/>

   </div>


</>
  )
}
