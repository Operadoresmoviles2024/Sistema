'use client';

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { Translator, getTranslation } from '@miracleufo/react-g-translator';
import { useUser } from '@/context/Context'


export default function Select({ arr, name, click, defaultValue, uuid, label, position, bg, required }) {

    const router = useRouter()
    const { select, setSelect, languaje, success} = useUser()
    const [state, setState] = useState(defaultValue ? defaultValue : arr[0])

    function handlerSelect() {
        select === name ? setSelect('') : setSelect(name)

    }
    function handlerUserState(name, i) {
        setState(i)
        click(name, i, uuid)
    }
    return (
        <div className='relative'>
                <div id={label}
                    className={`relative  border border-[#a1a1a1]  pt-[10px]  mb-0   w-full text-[16px]   px-5 ${bg ? `${bg} pb-2` : 'bg-transparent text-gray-900 border-[#a1a1a1]'}   focus:outline-none focus:ring-0  peer rounded-[5px]`}
                    onClick={handlerSelect}>
                    {defaultValue === 'Seleccionar' && <span className='absolute'>Seleccionar</span>}
                    <input type="text" disabled className='relative  w-full h-full border-transparent outline-none focus:outline-none bg-transparent' value={defaultValue !== undefined && defaultValue !== 'Seleccionar' ? defaultValue : ''} minLength={2} required={required} />
                    <span className={select === name ? 'absolute right-5 rotate-[270deg]' : 'absolute right-5 rotate-90'}>{'>'}</span>

                    <ul
                        className={` ${position ? position : 'relative'}  ${bg ? 'bg-gray-100' : 'bg-transparent'} mt-3  transition-all rounded-[5px]  w-full  ${select === name ? ` ${arr.length >= 2 && 'h-[65px] border-t z-10  overflow-auto '} ${arr.length == 2 && 'h-[20px] border-t overflow-hidden  z-10'} ${arr.length == 1 && 'h-[36px] border-t overflow-hidden  z-10'}  ` : 'h-[0] overflow-hidden'}`}  >
                        {
                            arr.map((i, index) => <li key={index} className='flex items-center  border-b cursor-pointer p-2' onClick={() => handlerUserState(name, i)}> {i} </li>)
                        }
                    </ul>
                </div>
                {label && <label htmlFor={label} className={`z-50 peer-focus:font-medium shadow-white shadow-2xl absolute text-[16px] ${select === name ? 'text-blue-600' : 'text-[#6b7280]'} bg-white px-5 mx-2 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>{label}</label>}
        </div>
    )
}












