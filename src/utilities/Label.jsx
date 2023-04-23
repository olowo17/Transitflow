import React from 'react'


const Label = ({label, bgColor, textColor}) => {
  return (
    <div className='inline-flex whitespace-nowrap text-sm rounded-md p-1 text-center justify-center align-middle '>
        <div className='w-2 bg-primary-100' >
        </div>
        <small className={`${bgColor}  p-1 text-${textColor} font-bold`}>{label}</small>
    </div>
  )
}

export default Label