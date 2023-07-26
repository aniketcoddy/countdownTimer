import React from 'react'
import Card from './Card'
import BodyRes from './BodyRes'

function Body() {
  return (
    <div className='bg-[#f5fafc] border-2 border-[#cff1ff] mt-8 mb-10  ml-16 mr-96 md:mr-7 md:ml-7 lg:mr-10 rounded-lg'>
      <div className='flex flex-col p-4 ml-12 md:ml-3'>
        <h1 className='text-xl md:text-lg font-semibold font-[GothamProBold,sans-serif]'> Review your order</h1>
        <h1 className='text-lg md:text-base font-[GothamProBold,sans-serif]'>The Following items have been added to your shopping cart.</h1>
      </div>

      <div>
        <div className='xl:hidden'>
          <div className='flex justify-between  bg-[#eef0f0] p-4  mr-16 ml-16 border-2 border-[#eef0f0] '>
            <div className='flex'>
              <h1 className='text-lg text-[#5f5e5e] font-[GothamProBold,sans-serif]'>#</h1>
              <h1 className='text-lg text-[#5f5e5e] font-[GothamProBold,sans-serif] ml-10'>Product Description</h1>
            </div>
            <h1 className='text-lg text-[#5f5e5e] font-[GothamProBold,sans-serif]'>Price</h1>
            <h1 className='text-lg text-[#5f5e5e] font-[GothamProBold,sans-serif]'></h1>
          </div>

          <Card />
        </div>

        <div className='hidden xl:block'>
          <BodyRes />
          <BodyRes />
          <BodyRes />
          <BodyRes />
          <BodyRes />
          <BodyRes />
          <BodyRes />
          <BodyRes />
        </div>

        <div className=' xl:hidden flex justify-end p-4  ml-16 mr-16 mb-8 bg-[#eef0f0] '>
          <div className=' flex mr-56 gap-3'>
            <h1 className='text-lg text-[#5f5e5e] font-[GothamProBold,sans-serif]'>Subtotal</h1>
            <h1 className='text-lg font-semibold
           font-[GothamProBold,sans-serif]'>$54.99</h1>
          </div>
        </div>

        <div className='hidden xl:block'>
          <div className='flex p-4  ml-16 mr-16 mb-8 bg-white border-[#eef0f0] border-2 justify-between '>
            <div className='flex gap-3'>
              <h1 className='text-lg text-[#0FC962] font-semibold font-[GothamProBold,sans-serif]'>Subtotal</h1>
              <h1 className='text-lg font-semibold
           font-[GothamProBold,sans-serif] text-[#0FC962]'>$54.99</h1>
            </div>
          </div>
        </div>
        </div>


      </div>
      )
}

      export default Body
