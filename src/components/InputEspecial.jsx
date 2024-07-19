'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react'
import { Translator, getTranslation } from '@miracleufo/react-g-translator';
import { useUser } from '@/context/Context'

export default function Button({ type, data, node, focusTxt, id, inputRef, select, style }) {
    const { focus, setFocus,languaje } = useUser()

    const router = useRouter()
    const [showPassword, setShowPassword] = useState(true)
    // const inputRef = useRef()
    const [text, setText] = useState('')

    function handlerOnChange(e) {
        e.stopPropagation();
        setText(e.target.value)

    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    return (
        <div>
                <Translator from='es' to={languaje.slice(0, 2).toLowerCase()}>

            <div className="relative z-0 w-full  group bg-[#ffffff]   border border-[#a1a1a1] rounded-[5px] transition-all" onClick={stopPropagation}>
                <input type={type} name={id} onFocus={() => setFocus(focusTxt)} onClick={stopPropagation} autocomplete="off" onChange={handlerOnChange} ref={inputRef} id={id} className="block   py-2.5 px-5 w-full text-[16px] text-gray-900 bg-transparent  appearance-none  focus:outline-none focus:ring-0  peer " placeholder=" " required />
                <label for={id} className=" z-50  peer-focus:font-medium  absolute text-[16px] bg-white px-5 mx-2 text-gray-500 duration-300 transform -translate-y-6 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{node}</label>
                {<div className={`   overflow-auto   transition-all rounded-[5px]  
                    ${focus === focusTxt
                        ? `
                        transition-all
                        ${data.reduce((acc, i) => { return acc.includes(i[node.toUpperCase()]) ? acc : [...acc, i[node.toUpperCase()]] }, []).filter((i) => { return i.toUpperCase().includes(inputRef.current && inputRef.current.value ? inputRef.current.value.toUpperCase() : '') }).length === 1 && 'bg-[#ffffff88] relative h-[36px] border-t z-10'}
                        ${data.reduce((acc, i) => { return acc.includes(i[node.toUpperCase()]) ? acc : [...acc, i[node.toUpperCase()]] }, []).filter((i) => { return i.toUpperCase().includes(inputRef.current && inputRef.current.value ? inputRef.current.value.toUpperCase() : '') }).length === 2 && 'bg-[#ffffff88] relative h-[73px] border-t z-10'}
                        ${data.reduce((acc, i) => { return acc.includes(i[node.toUpperCase()]) ? acc : [...acc, i[node.toUpperCase()]] }, []).filter((i) => { return i.toUpperCase().includes(inputRef.current && inputRef.current.value ? inputRef.current.value.toUpperCase() : '') }).length >= 2 && 'bg-[#ffffff88] relative h-[95px] border-t z-10'}
                        `
                        : 'transition-all h-[0]'}`
                }>
                    {
                        data.reduce((acc, i, index) => {
                            return acc.includes(i[node.toUpperCase()]) ? acc : [...acc, i[node.toUpperCase()]]
                        }, []).map((i, index) => {
                            return i.toUpperCase().includes(inputRef.current && inputRef.current.value ? inputRef.current.value.toUpperCase() : '') && <div className="transition-all px-5 relative z-0 w-full  group border-t border-[#dddddd] px-2 py-2  text-[16px]" onClick={() => select(i)}>
                                {i}
                            </div>
                        })
                    }
                </div>}
            </div>
            </Translator>

        </div>
    )
}
