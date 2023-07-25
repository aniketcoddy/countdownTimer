import React from 'react'

function Right() {
    return (
        <div className=' flex justify-end'>
            <div className='flex flex-col bg-[#F5FFFA] border-solid border-2 border-[#0FC962]' >
                <div className='flex'>
                    <img src='badge.png' />
                    <div className='flex flex-col'>
                        <h1 className='text-xl text-[#0FC962] font-semibold'>Satisfaction Guaranteed</h1>
                        <div className='flex'>
                            <h1 className='text-base font-semibold'>98.4% </h1>
                            <h1 className='text-base'>Pass Rate</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Our team works hard to provide students with high exam practice test questions and compelling learning experiences. We're confident of the quality level of the products we offer and provide no hassle satisfaction guarantee.</p>
                </div>
            </div>
        </div>
    )
}

export default Right
