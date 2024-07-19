'use client';
import { useUser } from '@/context/Context'
import { useEffect, useState } from 'react'
import { writeUserData, removeData } from '@/firebase/utils'
import { getDate } from '@/utils/DateFormat'
import Button from '@/components/Button'
import Loader from '@/components/Loader'
import Select from '@/components/SelectSimple'
import { useRouter } from 'next/navigation';
import InputFlotante from '@/components/InputFlotante'
import { generateUUID } from '@/utils/UIDgenerator'
export default function Home() {

    const { setUserSuccess, success,  cliente,  } = useUser()
    const router = useRouter()
    const [query, setQuery] = useState('')
    const [data, setData] = useState({})
    const [data2, setData2] = useState({})

    const [db, setdb] = useState('Ninguno')

    function handlerOnChange(e, key) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    function onChangeHandler2(e, index, d) {
        setData2({ ...data2, [`item${index}`]: { ...data2[`item${index}`], [e.target.name]: e.target.value } })
        return
    }
    function handlerSelectClick(name, i, uuid) {
        setData({ ...data, [name]: i })
    }
    function handlerSelectClick3(name, i, index) {
        setData2({ ...data2, [`item${index}`]: { ...data2[`item${index}`], [name]: i } })
        return
    }
    function handlerSelectClick4(e, index, d) {
        console.log(e.target.checked)
        setData2({ ...data2, [`item${index}`]: { ...data2[`item${index}`], [e.target.name]: e.target.checked } })
        return
    }
    function handlerLess2(d) {
        let db = { ...data2 };
        delete db[`item${data2 !== undefined && Object.keys(data2).length - 1}`];
        removeData(`Cliente/priceFCL/${query}/flete/item${Object.keys(data2).length - 1}`, setUserSuccess, () => setData2(db))
        return
    }
    function saveFrontPage(e) {
        e.preventDefault()
        let key = generateUUID()
        setUserSuccess('Cargando')
        writeUserData(`/Institutos/${data['NOMBRE DE INSTITUTO']}`, { ...data, ['FECHA DE CREACION']: getDate(new Date()), carreras: data2, }, setUserSuccess)
    }
    function close(e) {
        router.back()
    }
    useEffect(() => {
        if (window && typeof window !== "undefined") {
            setQuery(window.location.href.split('=')[1])
        }
    }, [cliente, db, data])
    return (

        <div className="min-h-full">
            <img src="/airplane-bg.jpg" className='fixed  w-screen h-screen  object-cover  ' alt="" />

            <div className="fixed h-screen top-0 left-0 flex justify-center items-center w-full  bg-[#000000b4] p-0 z-40 " >
                <div className="relative w-[95%]  max-h-[90vh] overflow-auto lg:w-[50%] bg-white border-b rounded-[10px] pt-16 pb-16 lg:pb-4 px-5">
                    <div className="absolute w-[50px] top-5 right-5 text-white p-1 rounded-tl-lg rounded-br-lg text-center bg-red-600" onClick={close}>
                        X
                    </div>
                    <form className="relative  pt-5 sm:col-span-3 mb-5 pb-5 border-b-[.5px] "  >
                        <div className='relative  px-2 py-5 my-5 mt-10 bg-white space-y-5'>
                            <h5 className='text-center font-medium text-[16px]'>AÑADIR INSTITUTO {query}<br /> </h5>
                            <br />
                            <br />
                            < InputFlotante type="date" id="floating_5" onChange={(e) => handlerOnChange(e)} value={getDate(new Date())} disabled required label={'FECHA DE CREACION'} shadow='shadow-white' />
                            < InputFlotante type="text" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={data['NOMBRE DE INSTITUTO']} required label={'NOMBRE DE INSTITUTO'} shadow='shadow-white' />
                            < InputFlotante type="text" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={data['RESOLUCIÓN MISTERIAL']} required label={'RESOLUCIÓN MISTERIAL'} shadow='shadow-white' />
                            < InputFlotante type="text" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={data['LINK DE PÁGINA']} required label={'LINK DE PÁGINA'} shadow='shadow-white' />
                            < InputFlotante type="text" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={data['LINK DE UBICACIÓN']} required label={'LINK DE UBICACIÓN'} shadow='shadow-white' />
                            < Select arr={['Público', 'Privado']} defaultValue={data.PROPIEDAD ? data.PROPIEDAD : 'Seccionar'} name='PROPIEDAD' click={handlerSelectClick} uuid='4576' label='PROPIEDAD' required />
                            < Select arr={['Técnico', 'Tecnológico']} defaultValue={data['TIPO DE INSTITUTO'] ? data['TIPO DE INSTITUTO'] : 'Seccionar'} name='TIPO DE INSTITUTO' click={handlerSelectClick} uuid='4576' label='INSTITUTO' required />

                            <h5 className='text-center font-medium text-[16px]'>CARRERAS +<br /> </h5>

                            <div className="relative flex ">
                                <button type='button' className="bg-red-500 text-white flex font-bold py-2 px-4 rounded-l" onClick={() => handlerLess2()}>
                                    -
                                </button>
                                <button type='button' className="bg-green-500 text-white font-bold py-2 px-4 rounded-r" onClick={() => setData2({ ...data2, [`item${data2 !== undefined && Object.keys(data2).length}`]: { ic: '', ip: '' } })} >
                                    +
                                </button>
                            </div>

                            {data2 && data2 !== undefined && Object.values(data2).map((i, index) => {
                                return <div className=' space-y-5 border-b border-[#818181] pb-5'>
                                    < InputFlotante type="text" name={`ip`} uid={`column_${index}`} onChange={(e) => onChangeHandler2(e, index, 'd4')} value={data2[`item${index}`][`ip`] && data2[`item${index}`][`ip`] ? data2[`item${index}`][`ip`] : i[`ip`]} required label={'Carrera'} shadow='shadow-white' />
                                    < Select arr={['Técnico Superior', 'Técnico Medio', 'Técnico Auxiliar']} defaultValue={data2[`item${index}`][`ic`] && data2[`item${index}`][`ic`] ? data2[`item${index}`][`ic`] : 'Seleccionar'} name='ic' click={handlerSelectClick3} uuid={index} label='Nivel' required />
                                    <div className='flex justify-center'>
                                        <div className='ml-10'>
                                            Mañana <input type="checkbox" name='mañana' className='ml-5' onChange={(e) => handlerSelectClick4(e, index, 'd4')}/>
                                        </div>
                                        <div  className='ml-10'>
                                            Tarde  <input type="checkbox" name='tarde' className='ml-5' onChange={(e) => handlerSelectClick4(e, index, 'd4')}/>
                                        </div>
                                        <div  className='ml-10'>
                                            Noche <input type="checkbox" name='noche' className='ml-5' onChange={(e) => handlerSelectClick4(e, index, 'd4')}/>
                                        </div>
                                    </div>
                                </div>
                            })
                            }
                            <div className='flex justify-center'>
                                <Button type='submit' theme="Primary" click={(e) => { saveFrontPage(e,) }}>Guardar</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {success === 'Cargando' && <Loader>ghfhfhj</Loader>}
        </div>
    )
}
