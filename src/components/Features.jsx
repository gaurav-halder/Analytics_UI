import React from 'react'

const Features = () => {
  return (
    <div className='my-14 md:my-20 cursor-default'>
        <div className='h-[160px] flex flex-col items-center space-y-4'>
            <p className='text-purple-700 text-xl'>Features</p>
            <p className='text-3xl text-center px-10 md:text-4xl font-medium'>Analytics that feels like it's from the future</p>
            <p className='text-xl w-5/6 md:w-1/2 text-center text-slate-500 '>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className='sm:grid-row-3 grid md:grid-cols-3 gap-8 px-10 md:px-20 text-center md:pt-12 pt-28'>
            <div className='w-80 md:w-96 flex flex-col items-center space-y-2'>
                <img className='h-12' src='/images/Shareteambox.png'/><p className='font-medium'>Share team inboxes</p><p className='text-slate-500'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
            <div className='w-80 md:w-96 flex flex-col items-center space-y-2'>
                <img className='h-12' src='/images/DeliveryInstant.png'/><p className='font-medium'>Deliver instant answers</p><p className='text-slate-500'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            </div>
            <div className='w-80 md:w-96 flex flex-col items-center space-y-2'>
                <img className='h-12' src='/images/ManageTeams.png'/><p className='font-medium'>Manage your team with reports</p><p className='text-slate-500'>Measure what matters with our easy-to-use reports. Filter, export, and drill down on data in a couple of clicks.</p>
            </div>
        </div>
        <div className='sm:grid-row-3 grid md:grid-cols-3 gap-8 px-10 md:px-20 text-center pt-12'> 
            <div className='w-80 md:w-96 flex flex-col items-center space-y-2'>
                <img className='h-12' src='/images/Connectwithcustomers.png'/><p className='font-medium'>Connect with customers</p><p className='text-slate-500'>Solve problems or close sales in real-time with chat. Seamlessly route to email without confusion.</p>
            </div>
            <div className='w-80 md:w-96 flex flex-col items-center space-y-2'>
                <img className='h-12' src='/images/Connecttools.png'/><p className='font-medium'>Connect the tools you already use</p><p className='text-slate-500'>Explore 100+ integrations to make your workflow more efficient and familiar, plus developer tools.</p>
            </div>
            <div className='w-80 md:w-96 flex flex-col items-center space-y-2'> 
                <img className='h-12' src='/images/peopledifferent.png'/><p className='font-medium'>Our people make the difference</p><p className='text-slate-500'>We’re an extension of your team, available 24/7 for support. Chat with our friendly team whenever you need help.</p>
            </div>
        </div>
    </div>
  )
}

export default Features