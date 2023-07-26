import React from 'react'

function BodyRes() {
    return (
        <div>
            <div>
                <div className=' flex flex-col justify-between  bg-[#eef0f0] p-4 mb-2  mr-16 ml-16 md:mr-6 md:ml-6 border-2 border-[#eef0f0] '>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-2'>
                            <h1 className='text-lg text-[#5f5e5e] font-[GothamProBold,sans-serif]'>#</h1>
                            <h1 className='text-lg font-semibold font-[GothamProBold,sans-serif]'>1</h1>
                        </div>
                        <div>
                            <h1 className='text-lg sm:text-base xs:text-sm text-[#5f5e5e] font-[GothamProBold,sans-serif]'>Product Description</h1>
                            <h1 className='text-lg sm:text-base xs:text-sm text-[#008CF2] font-semibold font-[GothamProBold,sans-serif]'>Microsoft 62-193 Premium Bundle</h1>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <h1 className='text-base lg:text-sm text-[#5f5e5e] line-through font-[GothamProBold,sans-serif]'>$54.99</h1>
                                <h1 className='text-base lg:text-sm font-semibold  font-[GothamProBold,sans-serif]'>$49.49</h1>
                            </div>
                            <div>
                                <a><img src="dustbin.png" className='w-9 md:w-7' /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BodyRes
