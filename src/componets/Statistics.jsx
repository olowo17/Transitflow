import React from 'react'

const Statistics = () => {
  return (
    <section className=' mx-auto my-8 border-y-2 border-tertiary-100 py-4 '>
        <div className="grid md:grid-cols-2 md:divide-x  p-2 align-middle">
            <div className='flex justify-center'>
                <h1 className='text-2xl font-extrabold  text-tertiary-300'>1294</h1>
                <div className='w-2 h-2 bg-primary-100 my-auto mx-2'></div>
                <p className='my-auto'>Delivered Packages</p>
            </div>
            <div className='flex justify-center '>
                <h1 className='text-2xl font-extrabold text-tertiary-300'>3594</h1>
                <div className='w-2 h-2 bg-primary-100 my-auto mx-2'></div>
                <p className='my-auto'>Satisfied Customers</p>
            </div>
        </div>
    </section>
  )
}

export default Statistics
