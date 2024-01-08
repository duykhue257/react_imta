import React from 'react'

type Props = {
    text1: string,
    text2: string
}

const Border_text = ({text1,text2}: Props) => {
  return (
    <div>
        <div className='border border-1 p-4 mt-6 rounded'>
            <p className='font-bold text-[30px]'> {text1} </p>
            <p className='text-[15px]'> {text2}</p>
        </div>
    </div>
  )
}

export default Border_text