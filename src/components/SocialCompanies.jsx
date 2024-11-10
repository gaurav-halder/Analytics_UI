import React from 'react'

const SocialCompanies = () => {
  return (
    <div className='my-16'>
        <div className='flex items-center justify-center text-lg'>Join 4,000+ companies already growing</div>
        <div className='flex flex-col md:flex-row justify-evenly my-10 w-screen items-center'>
            <div className='flex flex-row space-x-12 md:space-x-12 justify-evenly py-4 md:py-0'>
                <div className='flex text-2xl md:text-3xl items-center space-x-3'><img className='h-10' src='/images/Boltshift.png'/><p>Boltshift</p></div>
                <div className='flex text-2xl md:text-3xl items-center space-x-3'><img className='h-10' src='/images/Lightbox.png'/><p>Lightbox</p></div>
            </div>
            <div className='flex flex-row space-x-6 md:space-x-12 justify-evenly py-4 md:py-0'>
                <div className='flex text-2xl md:text-3xl items-center space-x-3'><img className='h-10' src='/images/FeatherDev.png'/><p>FeatherDev</p></div>
                <div className='flex text-2xl md:text-3xl items-center space-x-3'><img className='h-10' src='/images/Spherule.png'/><p>Spherule</p></div>
            </div>
            <div className='flex flex-row space-x-8 md:space-x-12 justify-evenly py-4 md:py-0'>
                <div className='flex text-2xl md:text-3xl items-center space-x-3'><img className='h-10' src='/images/Globalbank.png'/><p>GlobalBank</p></div>
                <div className='flex text-2xl md:text-3xl items-center space-x-3'><img className='h-10' src='/images/Nietzsche.png'/><p>Nietzsche</p></div>
            </div>
        </div>
        <div className="bg-slate-200 h-[1px] mt-14"></div>
    </div>
  )
}

export default SocialCompanies