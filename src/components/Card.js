import React from 'react'

function Card() {
  return (
    <div>
      <div className=' flex justify-between p-4  mr-16 ml-16 bg-white border-2'>
          <div className='flex'>
            <div>
              <h1 className='text-lg font-semibold font-[GothamProBold,sans-serif]'>1</h1>
            </div>
            <div className='ml-10 gap-4 flex flex-col'>
              <h1 className='text-lg text-[#008CF2] font-semibold font-[GothamProBold,sans-serif]'>Microsoft 62-193 Premium Bundle</h1>
              <div>
                <h1 className='text-base font-[GothamProBold,sans-serif]'>Premium File</h1>
                <h1 className='text-base font-[GothamProBold,sans-serif]'>Training Course</h1>
              </div>
              <div className=' flex flex-col gap-2'>
                <h1 className='text-sm text-[#5f5e5e] font-[GothamProBold,sans-serif]'>Get New Question Updates for:</h1>
                <div className='border-2 border-[#dddddf] bg-[#dddddf] p-2 rounded-lg'>
                  <h1 className='text-lg font-[GothamProBold,sans-serif] ml-3'>30 Days(Free)</h1>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col ml-20 gap-2'>
            <div className='flex gap-2'>
              <h1 className='text-base text-[#5f5e5e] line-through font-[GothamProBold,sans-serif]'>$54.99</h1>
              <h1 className='text-base font-semibold  font-[GothamProBold,sans-serif]'>$49.49</h1>
            </div>
            <div className=' bg-[#FFDADB] rounded-md p-2'>
              <h1 className='text-base font-semibold  text-[#FF0911] font-[GothamProBold,sans-serif] '>Saved 10% Off</h1>
            </div>
          </div>

          <div className='flex bg-[#dddddf] rounded-md p-4 px-8 mb-36'>
              <h1 className='text-base font-semibold  text-[#5f5e5e] font-[GothamProBold,sans-serif]'>Remove</h1>
            </div>
        </div>
    </div>
  )
}

export default Card
