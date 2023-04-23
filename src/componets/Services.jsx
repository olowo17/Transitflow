import React from 'react'
import Label from '../utilities/Label'
import flight from "../assets/flight.png"
import bus from "../assets/bus.png"
import ship from "../assets/ship.png"
import train from "../assets/train.png"
import WhyUs from './WhyUs'




const Services = () => {
  return (
    <section className='train  '>
        <div className="solutions md:flex mx-auto my-10  text-start w-[70%] justify-center">
            <div>
              <Label label="What We Do"  textColor="black" bgColor="bg-tertiary-100"/>
              <p className='text-xl font-bold'>Safe & Relaible Crago Solutions</p>
            </div>
            <div className="services md:grid md:grid-cols-2 gap-6">
              <div className="flex">
                <div className='border-r-2 border-tertiary-100 p-4'> <img src={ship} alt="ship" /></div>
                <div className="ml-2">
                  <p className='text-xl font-semibold'> Sea Transport Service</p>
                  <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est possimus sint voluptatibus ex dolore obcaecati?</small>
                </div>
              </div>
              <div className="flex">
                <div className='border-r-2 border-tertiary-100 p-4'> <img src={train} alt="warehouse" /></div>
                <div className="ml-2">
                  <p className='text-xl font-semibold'> Warehousing Services</p>
                  <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est possimus sint voluptatibus ex dolore obcaecati?</small>
                </div>
              </div>
              <div className="flex">
                <div className='border-r-2 border-tertiary-100 p-2'> <img src={flight} alt="flight" /></div>
                <div className="ml-2">
                  <p className='text-xl font-semibold'> Air Flight Service</p>
                  <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est possimus sint voluptatibus ex dolore obcaecati?</small>
                </div>
              </div>
              <div className="flex">
                <div className='border-r-2 border-tertiary-100 p-4'> <img src={bus} alt="bus" /></div>
                <div className="ml-2">
                  <p className='text-xl font-semibold'> Local Shipping</p>
                  <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est possimus sint voluptatibus ex dolore obcaecati?</small>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Services
