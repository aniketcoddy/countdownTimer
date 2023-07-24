import React, { useEffect, useRef, useState } from 'react';

function Countdown({ seconds }) {


    const formate = (time) => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60)
        let seconds = Math.floor(time % 60)

        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;

        return hours + ":" + minutes + ":" + seconds
    }

    const [countdown, setCountdown] = useState(seconds);
    const time = useRef();

    useEffect(() => {
        time.current = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : seconds)); // Decrement the countdown value, and reset to the initial value once it reaches 0
        }, 1000);

        return () => clearInterval(time.current);
    }, []); // Trigger the effect whenever 'seconds' prop changes

    return (
        <div>
            <div className='sm:hidden'>
                <div className='bg-[#FFB300] mx-7 flex justify-between items-center rounded-3xl '>
                    <div className='flex justify-center items-center'>
                        <img src="1.png" className='w-10 ml-0' />
                        <h1 className='ml-3 text-xl font-semibold xl:text-lg lg:text-sm md:text-xs'>LIMITED TIME OFFER</h1>
                    </div>

                    <div className='flex items-center gap-2'>
                        <h2 className='text-xl xl:text-lg  lg:text-sm md:text-xs'>Ends in :</h2>
                        <h2 className='text-xl xl:text-lg font-semibold lg:text-sm md:text-xs'>{formate(countdown)}</h2>
                    </div>
                    <div className='flex gap-3 mr-4'>
                        <h1 className='text-xl xl:text-lg font-semibold lg:text-sm md:text-xs'>GET 10% OFF</h1>
                        <div className='flex'>
                            <h1 className='text-xl xl:text-lg  lg:text-sm md:text-xs'>Use Code</h1>
                            <h1 className='text-xl xl:text-lg font-semibold lg:text-sm md:text-xs'>: EXAMSTART</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden sm:block'>
                <div className='bg-[#FFEBC6] border-4 border-[#fed679] flex mx-2 flex-col justify-center items-center rounded-2xl gap-3 '>
                    <div className='flex justify-center items-center'>
                        <img src="1.png" className='w-10 ml-0' />
                        <h1 className='ml-3 text-2xl xxs:text-xl border-b-2 border-black p-1'>Limited Time Offer</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-xl xxs:text-lg'>Ends in :</h2>
                        <h2 className='text-2xl xxs:text-xl'>{formate(countdown)}</h2>
                    </div>
                    <div className=' bg-[#fed679] justify-between mb-2 p-2 w-full flex  px-5'>
                        <h1 className='text-xl xs:text-lg xxs:text-base xm:text-sm  font-semibold'>GET 10% OFF</h1>
                        <div className='flex'>
                            <h1 className='text-xl xs:text-lg xxs:text-base xm:text-sm'>Use Code</h1>
                            <h1 className='text-xl xs:text-lg xxs:text-base xm:text-sm font-semibold'>: EXAMSTART</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Countdown;


