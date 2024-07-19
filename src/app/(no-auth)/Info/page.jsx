'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmail, writeUserData, removeData } from '@/firebase/utils'
import { useEffect, useState, useRef } from 'react'

import { useRouter, usePathname } from 'next/navigation';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import "animate.css/animate.compat.css"
import 'react-awesome-slider/dist/styles.css';
import Button from '@/components/Button'
import { QRreaderUtils } from '@/utils/QRreader'
import { generateUUID } from '@/utils/UIDgenerator'
import Link from 'next/link';

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';




export default function Home() {
    const { user, introVideo, trackingDB, userDB, selectValue, setSelectValue, setUserProfile, languaje, modal, setModal, setUserSuccess, calcValueFCL, setCalcValueFCL, calcValue, setCalcValue, element, setElement, naviera, setNaviera, success, setUserData, postsIMG, setUserPostsIMG, nav, cliente, setCliente, focus, setFocus, seeMore, setSeeMore } = useUser()


    const [code, setCode] = useState('')
    const [filter, setFilter] = useState('')
    const [filter2, setFilter2] = useState('')

    // const [hash, sethash] = useState('')

    const pathname = usePathname()

    const router = useRouter()
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const inputRef = useRef('')
    const inputRef2 = useRef('')


    const redirectHandlerWindow = (ref) => {
        window.open(ref, '_blank')
    }


    function handlerClickSelect2(e) {
        setSelectValue({ ...selectValue, SERVICIO: e })

    }
    function handlerOnChangeQR(e) {
        QRreaderUtils(e, setCode)

    }
    // let data = priceFTL.reduce((acc, i, index) => {
    //   return acc.includes(i.ORIGEN) ? acc : [...acc, i.ORIGEN]
    // }, [])

    async function HandlerCheckOut(e) {

        //  const data =  Object.entries(calcValue).map((i, index) => `${i[0]}: ${i[1]}`)
        router.push('PDF')
        return

        const db = Object.entries(calcValue).reverse().reduce((acc, i, index) => {
            const data = `${i[0]}: ${i[1]}\n`
            return data + '\r\n' + acc
        }, ``)

        var whatsappMessage = "SOLICITUD DE SERVICIO" + "\r\n\r\n" + db
        whatsappMessage = window.encodeURIComponent(whatsappMessage)
        console.log(whatsappMessage)
        // window.open(`https://api.whatsapp.com/send?phone=${perfil.whatsapp.replaceAll(' ', '')}&text=${whatsappMessage}`, '_blank')
        window.open(`https://api.whatsapp.com/send?phone=+59169941749&text=${whatsappMessage}`, '_blank')

    }
    async function HandlerCheckOut2(e) {
        const db = Object.entries({ ORIGEN: inputRef.current.value, DESTINO: inputRef2.current.value, ...selectValue }).reverse().reduce((acc, i, index) => {
            const data = `${i[0]}: ${i[1]}\n`
            return data + '\r\n' + acc
        }, ``)

        var whatsappMessage = "SOLICITUD DE SERVICIO" + "\r\n\r\n" + db
        whatsappMessage = window.encodeURIComponent(whatsappMessage)
        console.log(whatsappMessage)
        // window.open(`https://api.whatsapp.com/send?phone=${perfil.whatsapp.replaceAll(' ', '')}&text=${whatsappMessage}`, '_blank')
        window.open(`https://api.whatsapp.com/send?phone=+59169941749&text=${whatsappMessage}`, '_blank')

    }

    function handlerOnChange(e) {
        e.stopPropagation();
        setSelectValue({ ...selectValue, [e.target.name]: e.target.value })

    }

    function reset() {
        setFocus('')
    }

    function handlerSelect(i) {
        inputRef.current.value = i
        inputRef2.current.value = ''

        setFocus('')
    }
    function handlerSelect2(i) {
        inputRef2.current.value = i
        setFocus('')
    }


    function handlerClickSelect(name, i, uuid) {
        let db = { [name]: i }
        setSelectValue({ ...selectValue, ...db })
    }


    function write() {
        writeUserData('Cliente/comisionFTL', {
            [generateUUID()]: {
                de: 1,
                hasta: 1000,
                monto: 20,
            },
            [generateUUID()]: {
                de: 1001,
                hasta: 10000,
                monto: '2%,'
            },
            [generateUUID()]: {
                de: 10001,
                hasta: 20000,
                monto: '1.50%',
            },
            [generateUUID()]: {
                de: 20001,
                hasta: 30000,
                monto: '1.25%',
            },
            [generateUUID()]: {
                de: 30001,
                hasta: 50000,
                monto: '1%',
            },
            [generateUUID()]: {
                de: 50001,
                hasta: 100000,
                monto: '0.75%',
            },
            [generateUUID()]: {
                de: 100001,
                hasta: 1000000000000,
                monto: '0.50%',
            },
        }
        )
    }
    function calculator(e) {
        e.preventDefault()
        if (user === null || user === undefined) {
            router.push('/Login')
            return
        }

        let val = Object.values(cliente.priceFTL).find((i) => {
            return i.ORIGEN === inputRef.current.value && i.DESTINO === inputRef2.current.value && i.MERCANCIA === selectValue.MERCANCIA && i['PESO (KG)'] >= selectValue['PESO (KG)'] && i.SERVICIO === selectValue.SERVICIO && i['TIPO DE UNIDAD'] === selectValue['TIPO DE UNIDAD'] && i['VOLUMEN M3'] >= selectValue['VOLUMEN M3']
        })
        val !== undefined ? setCalcValue({ ...val, ['PESO (KG)']: selectValue['PESO (KG)'], ['VOLUMEN M3']: selectValue['VOLUMEN M3'], TOTAL: val['SERVICIOS LOGISTICOS USD'] * 1 + val['FLETE USD'] * 1 }) : setUserSuccess('NO DATA')
    }
    function calculatorFCL(e) {
        e.preventDefault()
        if (user === null || user === undefined) {
            router.push('/Login')
            return
        }

        let val = Object.values(cliente.priceFCL).filter((i) => {
            return i.ORIGEN === inputRef.current.value && i.DESTINO === inputRef2.current.value
        })
        val !== undefined ? setCalcValueFCL(val) : setUserSuccess('NO DATA')
    }




    function preValidate() {
        if (inputRef.current && inputRef2.current && selectValue.MERCANCIA && selectValue['PESO (KG)'] && selectValue.SERVICIO && selectValue['TIPO DE UNIDAD'] && selectValue['VOLUMEN M3']) {
            let val = Object.values(cliente.priceFTL).find((i) => {
                return i.ORIGEN === inputRef.current.value && i.DESTINO === inputRef2.current.value && i.MERCANCIA === selectValue.MERCANCIA && i['PESO (KG)'] >= selectValue['PESO (KG)'] && i.SERVICIO === selectValue.SERVICIO && i['TIPO DE UNIDAD'] === selectValue['TIPO DE UNIDAD'] && i['VOLUMEN M3'] >= selectValue['VOLUMEN M3']
            })
            return val
        }
    }
    function HandlerOnChange(e) {
        QRreaderUtils(e, setFilterQR,)
    }
    function handlerFilter(e) {
        setFilter(e.target.value)
        console.log(filter)
    }


    return (
        <section className='relative min-h-screen p-5 md:p-12 pt-[50px] flex flex-col justify-around bg-[#2cdcffb4] '>
      

        <div className='flex flex-col items-center justify-center'>
          <img src="/logo.jpeg" className='w-[150px] md:w-[250px] md:h-[200px] ' alt="" />
          <h1 className='text-[27px] text-center font-bold  '>SEDUCA INFORMA</h1>
          <h2 className='text-center text-[20px] uppercase'>subdirección de educación superior de formación profesional <br /> LA PAZ - 2024</h2>
        </div>
      
            <br />

            <div className="relative left-0 right-0 mx-auto w-[90] max-w-[500px] h-[40px] ">
                <input type="search" id="location-search" onChange={handlerFilter} className="block p-3 w-full min-w-[350px] shadowsss shadow-xl border border-[#d8d8d8] h-full z-20  text-[16px]   bg-[#ffffff] rounded-[5px] focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Buscar por NOMBRE DEL INSTITUTO" required />
                <button type="submit" className="absolute top-0 end-0 h-full p-2.5 text-[16px] font-medium text-[white] bg-blue-700 rounded-r-[5px] border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>

            </div>
            <br />
            <h3 className='text-center text-[16px] font-semibold'>BUSCAR</h3>


            <div className='relative flex justify-center' >
                <button type="button" class={` shadow-2xl  ${filter2 === 'PUBLICA' ? 'bg-gradient-to-br text-white from-purple-600 to-blue-500 hover:bg-gradient-to-bl ' : 'border border-[#c6c6c6] text-black '} focus:outline-none font-medium rounded-lg text-[16px] px-5 py-2.5 text-center me-2 mb-2`} onClick={() => filter2 === 'PUBLICA' ? setFilter2('') : setFilter2('PUBLICA')}>
                    INSTITUTOS PÚBLICOS
                </button>
                <button type="button" class={`shadow-2xl ${filter2 === 'PRIVADA' ? 'bg-gradient-to-br text-white  from-purple-600 to-blue-500 hover:bg-gradient-to-bl' : 'border border-[#c6c6c6] text-black '}  focus:outline-none font-medium rounded-lg text-[16px] px-5 py-2.5 text-center me-2 mb-2`} onClick={() => filter2 === 'PRIVADA' ? setFilter2('') : setFilter2('PRIVADA')}>
                    INSTITUTOS PRIVADOS
                </button>
            </div>
            <br />
            <div className='relative left-0 right-0 mx-auto w-full md:w-[80vw] bg-white shadow-2xl border h-full'>
                <div className=' '>
                    {
                        trackingDB && trackingDB && Object.entries(trackingDB).map((i, index) => {
                            return i[1]['NOMBRE DE INSTITUTO'] && i[1]['NOMBRE DE INSTITUTO'].toLowerCase().includes(filter.toLowerCase()) && i[1]['PROPIEDAD'].includes(filter2) && <div className='relative bg-white flex justify-between items-center px-5 py-3 border-[.5px] cursor-pointer text-[16px]'>
                                <span> INSTITUTO: {i[1]['NOMBRE DE INSTITUTO']} <br />{i[1]['PROPIEDAD']}</span>
                                {console.log(i[1]['PROPIEDAD'])}
                                <div className="w-[150px]">
                                    <Link href={`/Instituto?item=${i[1]['NOMBRE DE INSTITUTO']}`}><Button theme="Success">Más Info</Button></Link> </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}




