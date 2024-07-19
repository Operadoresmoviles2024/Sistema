'use client';
import { useUser } from '@/context/Context'
import { useEffect, useState } from 'react'
import { writeUserData, removeData } from '@/firebase/utils'
import Select from '@/components/SelectSimple'
import Button from '@/components/Button'
import Loader from '@/components/Loader'
import { useRouter } from 'next/navigation';
import InputFlotante from '@/components/InputFlotante'







export default function Home() {




    const { setUserSuccess, success, trackingDB, cliente, setCliente, cart, setCart, modal, setModal } = useUser()
    const router = useRouter()
    const [query, setQuery] = useState('')
    const [data, setData] = useState({})
    const [data2, setData2] = useState({})

    const [db, setdb] = useState(null)

    function handlerOnChange(e,) {
        setData({ ...data, [query]: { ...data[query], [e.target.name]: e.target.value } })
    }
    function handlerSelectClick(name, i, uuid) {
        setData({ ...data, [query]: { ...data[query], [name]: i } })
    }
    function onChangeHandler2(e, index, d) {
        setData2({ ...data2, [`item${index}`]: { ...data2[`item${index}`], [e.target.name]: e.target.value } })
        return
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
        removeData(`/Institutos/${query}/carreras/item${Object.keys(data2).length - 1}`, setUserSuccess, () => setData2(db))
        return
    }


    function saveFrontPage(e) {
        e.preventDefault()
        setUserSuccess('Cargando')
        db
            ? writeUserData(`/Institutos/${query}`, { ...data[query], trackIcon: db }, setUserSuccess)
            : writeUserData(`/Institutos/${query}`, { ...data[query] }, setUserSuccess)
    }
    function saveFrontPage2(e) {
        e.preventDefault()
        setUserSuccess('Cargando')
        writeUserData(`/Institutos/${query}/carreras`, data2, setUserSuccess)
    }
    function close(e) {
        router.back()
    }
    useEffect(() => {
        if (window && typeof window !== "undefined") {
            setQuery(window.location.href.split('=')[1].replaceAll('%20', ' '))
        }
        if (trackingDB && trackingDB[query] && trackingDB[query].carreras) {
            setData2({ ...trackingDB[query].carreras, ...data2 })
        }
    }, [cliente, query, trackingDB])
    console.log(query)
    return (

        <div className="min-h-full">
            <img src="/airplane-bg.jpg" className='fixed  w-screen h-screen  object-cover  ' alt="" />

            <div className="fixed top-0 left-0 flex justify-center w-full h-auto bg-[#000000b4] p-0 z-40 " >
                <div className="relative w-[95%] h-screen overflow-y-scroll lg:w-[50%] bg-white border-b border-gray-900/10 pt-16 pb-16 lg:pb-4 px-5">
                    <div className="absolute w-[50px] top-5 right-5 text-white p-1 rounded-tl-lg rounded-br-lg text-center bg-red-600" onClick={close}>
                        X
                    </div>
                    {trackingDB && trackingDB[query] && <form className="relative  pt-5 sm:col-span-3 mb-5 pb-5 "  >
                        <div className='relative p-5 my-5 mt-10 bg-white space-y-7 shadow-2xl  '>
                            <h5 className='text-center font-medium text-[16px]'>Editar <br /> </h5>
                            {/* <h5 className='text-center font-medium text-[16px]'>CODIGO DEL SERVICIO <br /> {query}<br /> </h5>
                            <br />
                            <div className='relative flex  '>
                                {arrDB.map((item, index) => <div key={index} className='w-full  relative flex flex-col items-center m-2 cursor-pointer p-2' onClick={() => onClickHandlerCountry(item)} >
                                    <span className={`absolute z-10  top-[-5px] left-0 right-0 mx-auto border-[2px] border-[#294B98] rounded-full  w-[10px] h-[10px] ${db && item.img === db['img'] ? 'bg-[#39ff27]' : (trackingDB[query].trackIcon && item.img === trackingDB[query].trackIcon['img'] ? 'bg-[#39ff27]' : 'bg-white ')}`}></span>
                                    <img src={item.img} className={` inline h-[20px] sm:h-[25px] md:h-[50px]  ${db && item.img === db['img'] ? 'grayscale-0 brightness-125' : (trackingDB[query].trackIcon && item.img === trackingDB[query].trackIcon['img'] ? 'grayscale-0 brightness-125' : 'grayscale')}`} alt="" />
                                    <span className={`h-[10px] text-[8px] sm:text-[16px] ${db && item.img === db['img'] ? 'text-[#294B98] font-medium' : (trackingDB[query].trackIcon && item.img === trackingDB[query].trackIcon['img'] ? 'text-[#294B98] font-medium' : 'font-medium ')}`}>{item.text}</span>
                                </div>)}
                                <span className='absolute top-[5px] h-[2px] bg-[#294B98] w-full'></span>
                            </div> */}
                            <br />
                            < InputFlotante type="date" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={trackingDB[query]['FECHA DE CREACION']} required label={'FECHA DE CREACION'} shadow='shadow-white' />
                            < InputFlotante type="text" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={trackingDB[query]['NOMBRE DE INSTITUTO']} disabled={true} required label={'NOMBRE DE INSTITUTO'} shadow='shadow-white' />
                            < InputFlotante type="text" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={trackingDB[query]['RESOLUCIÓN MISTERIAL']} required label={'RESOLUCIÓN MINISTERIAL'} shadow='shadow-white' />
                            < InputFlotante type="text" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={trackingDB[query]['LINK DE PÁGINA']} required label={'LINK DE PÁGINA'} shadow='shadow-white' />
                            < InputFlotante type="text" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={trackingDB[query]['LINK DE UBICACIÓN']} required label={'LINK DE UBICACIÓN'} shadow='shadow-white' />
                            < Select arr={['Público', 'Privado']} defaultValue={data[query] && data[query].PROPIEDAD ? data[query].PROPIEDAD : trackingDB[query]['PROPIEDAD']} name='PROPIEDAD' click={handlerSelectClick} uuid='4576' label='PROPIEDAD' required />
                            < Select arr={['Técnico', 'Tecnológico']} defaultValue={data[query] && data[query]['TIPO DE INSTITUTO'] ? data[query]['TIPO DE INSTITUTO'] : trackingDB[query]['TIPO DE INSTITUTO']} name='TIPO DE INSTITUTO' click={handlerSelectClick} uuid='4576' label='INSTITUTO' required />




                            <div className='w-full flex justify-center	'>
                                {/* <Button theme="Danger" click={(e) => { saveFrontPage(e) }}>Eliminar</Button> */}
                                <Button type='button' theme="Primary" click={(e) => { saveFrontPage(e) }}>Guardar</Button>
                            </div>

                        </div>
                    </form>}



                    <div className="relative flex ">
                        <button type='button' className="bg-red-500 text-white flex font-bold py-2 px-4 rounded-l" onClick={() => handlerLess2()}>
                            -
                        </button>
                        <button type='button' className="bg-green-500 text-white font-bold py-2 px-4 rounded-r" onClick={() => setData2({ ...data2, [`item${data2 !== undefined && Object.keys(data2).length}`]: { ic: '', ip: '' } })} >
                            +
                        </button>
                    </div>

                    {trackingDB && trackingDB[query] && <form className="relative  pt-5 sm:col-span-3 mb-5 pb-5 "  >
                        <div className='relative p-5 my-5 mt-10 bg-white space-y-5 shadow-2xl  '>

                            <h5 className='text-center font-medium text-[16px]'>CARRERAS +<br /> </h5>
                            {data2 && data2 && Object.values(data2).map((item, index) => {
                                return <div className=' space-y-5 border-b  md:place-items-end md:gap-2  border-[#818181] pb-5'>
                                    < InputFlotante type="text" name={`ip`} uid={`column_${index}`} onChange={(e) => onChangeHandler2(e, index,)} value={data2[`item${index}`] && data2[`item${index}`][`ip`] ? data2[`item${index}`][`ip`] : item[`ip`]} required label={'Carrera'} shadow='shadow-white' />
                                    {/* < InputFlotante type="text" name={`ic`} uid={`value_${index}`} onChange={(e) => onChangeHandler2(e, index,)} value={data2[`item${index}`] && data2[`item${index}`][`ic`] ? data2[`item${index}`][`ic`] : item[`ic`]} required label={'Valor'} shadow='shadow-white' /> */}
                                    < Select arr={['Técnico Superior', 'Técnico Medio', 'Técnico Auxiliar']} defaultValue={data2[`item${index}`][`ic`] && data2[`item${index}`][`ic`] ? data2[`item${index}`][`ic`] : i[`ic`]} name='ic' click={handlerSelectClick3} uuid={index} label='Nivel' required />
                                    <div className='flex justify-center'>
                                        <div className='ml-10'>
                                            Mañana <input type="checkbox" name='mañana' className='ml-5' onChange={(e) => handlerSelectClick4(e, index, 'd4')} checked={data2[`item${index}`].mañana} />
                                        </div>
                                        <div className='ml-10'>
                                            Tarde  <input type="checkbox" name='tarde' className='ml-5' onChange={(e) => handlerSelectClick4(e, index, 'd4')} checked={data2[`item${index}`].tarde} />
                                        </div>
                                        <div className='ml-10'>
                                            Noche <input type="checkbox" name='noche' className='ml-5' onChange={(e) => handlerSelectClick4(e, index, 'd4')} checked={data2[`item${index}`].noche} />
                                        </div>
                                    </div>
                                </div>
                            })
                            }
                            <div className='w-full flex justify-center	'>
                                {/* <Button theme="Danger" click={(e) => { saveFrontPage(e) }}>Eliminar</Button> */}
                                <Button type='button' theme="Primary" click={(e) => { saveFrontPage2(e) }}>Guardar</Button>
                            </div>

                        </div>
                    </form>}
                </div>
            </div>
            {success === 'Cargando' && <Loader>ghfhfhj</Loader>}
        </div>
    )
}






