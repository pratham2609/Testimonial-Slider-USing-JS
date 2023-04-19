import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'


export default function Card({ review }) {
    return (
        <div className='flex flex-col md:relative'>
            <div className="md:absolute top-[-7rem] z-[10] mx-auto">
                <img src={review.image} alt="" className='aspect-square rounded-full w-[140px] h-[140px] z-2' />
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute md:top-[-6px] top-[10.5rem] left-[20rem] -z-10 md:left-[10px]'></div>
            </div>
            <div className='text-center mt-7'>
                <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
            </div>
            <div className='text-center mt-1'>
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>
            <div className='mt-4 text-slate-400'>
                {review.image}
            </div>
            <div className='text-violet-400 mx-auto my-5'>
                <FaQuoteRight />
            </div>



        </div>
    )
}
