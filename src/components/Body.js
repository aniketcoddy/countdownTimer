import React from 'react'
import Card from './Card'

function Body() {
  return (
    <div className='bg-[#f5fafc] border-2 border-[#cff1ff] mt-8 mb-10  ml-16 mr-96 rounded-lg'>
      <div className='flex flex-col p-4 ml-12'>
        <h1 className='text-xl font-semibold font-[GothamProBold,sans-serif] '> Review your order</h1>
        <h1 className='text-lg font-[GothamProBold,sans-serif]'>The Following items have been added to your shopping cart.</h1>
      </div>

      <div>

        <div className='flex justify-between  bg-[#eef0f0] p-4  mr-16 ml-16 border-2 border-[#eef0f0] '>
          <div className='flex'>
            <h1 className='text-lg text-[#5f5e5e] font-[GothamProBold,sans-serif]'>#</h1>
            <h1 className='text-lg text-[#5f5e5e] font-[GothamProBold,sans-serif] ml-10'>Product Description</h1>
          </div>
          <h1 className='text-lg text-[#5f5e5e] font-[GothamProBold,sans-serif]'>Price</h1>
          <h1 className='text-lg text-[#5f5e5e] font-[GothamProBold,sans-serif]'></h1>
        </div>

        <Card/>

        <div className='flex justify-end p-4  ml-16 mr-16 mb-8 bg-[#eef0f0] '>
          <div className=' flex mr-56 gap-3'> 
            <h1 className='text-lg text-[#5f5e5e] font-[GothamProBold,sans-serif]'>Subtotal</h1>
          <h1 className='text-lg font-semibold
           font-[GothamProBold,sans-serif]'>$54.99</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
