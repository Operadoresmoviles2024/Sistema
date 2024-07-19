'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react'


export default function Button({ click, type, name, onChange, reference, placeholder, styled }) {

    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)


    function handlerButton(e) {
        e.preventDefault(e)
        router.push(click)
    }


    return (
        <span  className='relative'>
            <input
                type={showPassword ? 'text' : type}
                name={name}
                 className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-[14px] text-center rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                //  className="bg-gray-50 border border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3
                // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onChange}
                // style={{...styled}}
                ref={reference}
                placeholder={placeholder}
                required
            />
            {name == 'password'  && <span  className="flex items-center absolute cursor-pointer top-0 right-0 bottom-0 right-[5px] my-auto" onClick={()=> setShowPassword(!showPassword)}>
                <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.0833C13.1421 16.0833 16.5 12.6158 16.5 10.25C16.5 7.88417 13.1421 4.41667 9 4.41667C4.85792 4.41667 1.5 7.88667 1.5 10.25C1.5 12.6133 4.85792 16.0833 9 16.0833Z" stroke="#00000080" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M9 12.75C9.66304 12.75 10.2989 12.4866 10.7678 12.0178C11.2366 11.5489 11.5 10.913 11.5 10.25C11.5 9.58696 11.2366 8.95107 10.7678 8.48223C10.2989 8.01339 9.66304 7.75 9 7.75C8.33696 7.75 7.70107 8.01339 7.23223 8.48223C6.76339 8.95107 6.5 9.58696 6.5 10.25C6.5 10.913 6.76339 11.5489 7.23223 12.0178C7.70107 12.4866 8.33696 12.75 9 12.75Z" stroke="#00000080" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M4.52686 3.69417L5.60769 5.2025M13.8439 3.87917L12.7627 5.3875M9.00394 1.91667V4.41667" stroke="#00000080" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {showPassword == false && <span  className='absolute bg-gray-50 right-[5px] transform rotate-45 w-[4px] h-[30px]'></span>}
            </span>}
        </span>

    )
}
