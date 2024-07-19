'use client';
import { useUser } from '@/context/Context'
import { useEffect, useState } from 'react'
import { onAuth, signInWithEmail, writeUserData, removeData } from '@/firebase/utils'
import Link from 'next/link'
import style from '@/app/page.module.css'
import Button from '@/components/Button'
import Loader from '@/components/Loader'
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal'
import InputFlotante from '@/components/InputFlotante'

export default function Home() {
    const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, trackingDB, setUserData, tracking, postsIMG, setUserPostsIMG, item, cliente, setCliente, cart, setCart, modal, setModal } = useUser()
    const router = useRouter()
    const [query, setQuery] = useState('')
    const [data, setData] = useState({})
    const [data2, setData2] = useState({})
    const [filter, setFilter] = useState('')


    function handlerFilter(e) {
        setFilter(e.target.value)
        console.log(filter)
    }
    function handlerEdit(r) {
        router.push(`Admin/Edit?item=${r}`)
    }
    function close(e) {
        router.back()
    }
    function handlerRemove(e,i) {
        e.stopPropagation() 
        console.log(i[0])
        removeData(`/Institutos/${i[0]}`, setUserSuccess,)
    }
    console.log(query)
    useEffect(() => {
        if (window && typeof window !== "undefined") {
            setQuery(window.location.href.split('=')[1])
        }
    }, [cliente, trackingDB])
    return (

        <div className="min-h-full">
            <img src="/airplane-bg.jpg" className='fixed  w-screen h-screen  object-cover  ' alt="" />

            <div className="fixed top-0 left-0 flex justify-center w-full h-auto bg-[#000000b4] p-0 z-40 " >
                <div className="relative w-[95%] h-screen overflow-y-scroll lg:w-[50%] bg-white border-b border-gray-900/10 pt-16 pb-16 lg:pb-4 px-5">
                    <Link href={`/Admin/Add`} className='fixed bottom-[100px] right-[100px]  rounded-full z-50 block font-medium '>
                        <div className="absolute top-5 left-5  p-1 border text-white border-white rounded-full h-[50px] w-[50px] text-center flex items-center justify-center bg-[#F1BA06]" >
                            ADD
                        </div>
                    </Link>
                    <div className="absolute w-[50px] top-5 right-5 text-white p-1 rounded-tl-lg rounded-br-lg text-center bg-red-600" onClick={close}>
                        X
                    </div>

                    <h5 className='text-center font-medium text-[16px]'>ADMINISTRADOR </h5>
                    <br />
                    <br />


                    <div className="relative left-0 right-0 mx-auto w-[90] max-w-[500px] h-[40px] ">
                        <input type="search" id="location-search" onChange={handlerFilter} className="block p-3 w-full shadowsss shadow-xl border border-[#d8d8d8] h-full z-20  text-[16px]   bg-[#ffffff] rounded-[5px] focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Buscar por NOMBRE DE INSTITUTO" required />
                        <button type="submit" className="absolute top-0 end-0 h-full p-2.5 text-[16px] font-medium text-[white] bg-blue-700 rounded-r-[5px] border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>

                    </div>

                    <br />
                    <br />
                    <div className=' shadow-xl'>
                        {
                            trackingDB && trackingDB && Object.entries(trackingDB).map((i, index) => {
                                return i[1]['NOMBRE DE INSTITUTO'] && i[1]['NOMBRE DE INSTITUTO'].toLowerCase().includes(filter.toLowerCase()) && <div className='relative bg-white flex justify-between items-center px-5 py-3 border-[.5px] cursor-pointer ' onClick={() => handlerEdit(i[1]['NOMBRE DE INSTITUTO'])}>
                                    <span> NOMBRE DE INSTITUTO: {i[1]['NOMBRE DE INSTITUTO']} <br />{i[1]['FECHA DE CREACION']}</span>
                                    {/* <span></span> */}
                                    <div className="w-[150px]"> <Button theme="Danger" click={(e) => { handlerRemove(e,i) }}>Eliminar</Button></div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            {success === 'Cargando' && <Loader>ghfhfhj</Loader>}
        </div>
    )
}






