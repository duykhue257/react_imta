import React, { useRef } from 'react'

type Props = {
    text: string,
    type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    
}

const Button = ({text , type }: Props) => {
   const handleSubmit =()=> {
    alert ('Please enter')
   }
  return (
    <div className='text-center'>
        <button onClick={handleSubmit} type={type} className='flex-1 self-center bg-green-500 w-full px-6 py-2 font-medium bg-[#10B981] text-white rounded-lg mt-4'>
            {text}
        </button>
    </div>
  )
}

export default Button