import React from 'react'
import logo from '../../assets/sql.png'

export default function Partner() {
  return (


     
        <div className='bg-white-100  text-black font-bold mt-20 pb-10 cap:flex cap:flex-row'>
            <div className='flex flex-col items-center cap:flex-row cap:items-center cap:justify-start p-10'>
                <h1 className='text-center text-4xl font-extrabold'>Partners</h1>
                <div className='flex flex-col cap:flex-row mt-10 justify-center'>
                    <img src={logo} alt='SQL Logo' className='w-[200px] h-[200px]'/>
                    <img src={logo} alt='SQL Logo' className='w-[200px] h-[200px]'/>
                    <img src={logo} alt='SQL Logo' className='w-[200px] h-[200px]'/>
                    <img src={logo} alt='SQL Logo' className='w-[200px] h-[200px]'/>
                </div>
            </div>
        </div>
      )
    }


