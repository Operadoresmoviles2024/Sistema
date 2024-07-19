'use client';

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { Translator, getTranslation } from '@miracleufo/react-g-translator';
import { useUser } from '@/context/Context'

export default function Select({arr, name, click, defaultValue, uuid}) {
    const {  languaje} = useUser()

    const router = useRouter()

    const [select, setSelect] = useState(false)
    const [state, setState] = useState(defaultValue ? defaultValue : arr[0])

    function handlerSelect () {
        setSelect(!select)
    }

    function handlerUserState (name, i) {
        setState(i)
        click(name, i, uuid)
    }

console.log(defaultValue)

    return (
        <Translator from='es' to={languaje.slice(0, 2).toLowerCase()}>

        <div 
             className={`flex relative bg-gray-50 border border-gray-300 text-gray-900 text-[14px] rounded-xl focus:ring-blue-500 focus:border-blue-500  w-full px-5 p-3`} 
            //  className={`bg-gray-50 border border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
            // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
            onClick={handlerSelect}>
           { defaultValue === 'Ninguno' ? 'Seleccionar':<li  className='flex items-center  cursor-pointer ' > <img src={defaultValue.flags.png}  className='mr-5 inline w-[30px] border-[1px]' alt="" />{defaultValue.translations.spa.official} </li> }
            <span  className={select ? 'absolute right-5 rotate-[270deg]' :'absolute right-5 rotate-90'}>{'>'}</span>
            <ul 

             className={select ? `absolute h-[100px] overflow-auto left-0 top-12 bg-gray-50 outline outline-1 outline-gray-300 text-gray-900 text-[14px] rounded-b-xl focus:ring-blue-500 focus:outline-blue-500 w-full p-3 z-10`: 'hidden' } 
            //  className={`bg-gray-50 border border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
            // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
            >
                {
                    // console.log(arr)
                    arr.map((i, index)=> <li key={index}  className='flex items-center mb-2 cursor-pointer p-2' onClick={() => handlerUserState(name, i)}> <img src={i.flags.png}  className='mr-5 inline w-[30px] border-[1px]' alt="" />{i.translations.spa.official} </li>)
                }
            </ul>
        </div>
        </Translator>

    )
}

















// 'use client';

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation';
// import style from './Select.module.css'


// export default function Select({arr, click}) {

//     const router = useRouter()

//     const [select, setSelect] = useState(false)
//     const [state, setState] = useState('La Paz')

//     function handlerSelect () {
//         setSelect(!select)
//     }

//     function handlerUserState (data) {
//         setState(data)
//     }



//     return (

//         <div  className={select ? style.select : style.noSelect} onClick={handlerSelect}>
//             {state} <span>{'>'}</span>
//             <ul>
//                 {
//                     arr.map((i)=> <li key={i} onClick={() => handlerUserState(i)}>{i}</li>)
//                 }
            
//             </ul>
//         </div>
//     )
// }
