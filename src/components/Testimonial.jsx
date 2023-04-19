import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Card from './Card'

export default function Testimonial({ reviews }) {
    const [index, setIndex] = useState(0)
    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1)
        }
        else {
            setIndex((index - 1) % reviews.length)
        }
    }
    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex((index + 1) % reviews.length)
        }
    }
    function surpriseShiftHandler() {
        setIndex(Math.floor(Math.random() * reviews.length))
    }
    return (
        <div className='w-[85vw] rounded-lg md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl '>
            <Card review={reviews[index]} />
            <div className='flex flex-row mx-auto text-3xl gap-3 text-violet-400 mt-10 '>
                <button className='hover:text-violet-500 cursor-pointer' onClick={leftShiftHandler}>
                    {<FiChevronLeft />}
                </button>
                <button className='hover:text-violet-500 cursor-pointer' onClick={rightShiftHandler}>
                    {<FiChevronRight />}
                </button>
            </div>

            <div className='mt-5'>
                <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' onClick={surpriseShiftHandler}>
                    Surprise Me
                </button>
            </div>
        </div>
    )
}
