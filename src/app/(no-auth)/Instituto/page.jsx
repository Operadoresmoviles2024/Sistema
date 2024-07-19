'use client';
import { useUser } from '@/context/Context'
import { useEffect, useState } from 'react'
import QRCode from "qrcode.react";
import Link from 'next/link';

export default function Home() {
    const { setUserSuccess, success, trackingDB, cliente, setCliente, cart, setCart, modal, setModal } = useUser()
    const [query, setQuery] = useState('')
    const [data2, setData2] = useState({})


    useEffect(() => {
        if (window && typeof window !== "undefined") {
            setQuery(window.location.href.split('=')[1].replaceAll('%20', ' '))
        }
        if (trackingDB && trackingDB[query] && trackingDB[query].carreras) {
            setData2({ ...trackingDB[query].carreras, ...data2 })
        }
    }, [cliente, query, trackingDB])
    console.log(trackingDB)
    return (
        <section className='relative min-h-screen p-5 md:p-12 pt-[50px] flex flex-col justify-around bg-[#2cdcffb4] '>


            <div className='flex flex-col items-center justify-center'>
                <img src="/logo.jpeg" className='w-[150px] md:w-[250px] md:h-[200px] ' alt="" />
                <h1 className='text-[27px] text-center font-bold  '>SEDUCA INFORMA</h1>
                <h2 className='text-center text-[20px] uppercase'>subdirección de educación superior de formación profesional <br /> LA PAZ - 2024</h2>
            </div>


            {trackingDB && trackingDB[query] && <div className="relative  pt-5 sm:col-span-3 mb-5 pb-5 "  >
                <div className='relative p-5 my-5 mt-10 bg-white space-y-5 shadow-2xl md:p-[50px] '>

                    <br />
                    <div className='flex w-full  flex-col md:flex-row md:justify-between md:items-center md:px-[150px]'>
                        <div className='flex flex-col w-full md:w-[50%] text-[18px] '>
                            <div>
                                <span className='font-bold'>Nombre del Instituto: </span> {trackingDB[query]['NOMBRE DE INSTITUTO']}
                            </div>
                            <div>
                                <span className='font-bold'> Resolución Ministerial: </span>{trackingDB[query]['RESOLUCIÓN MISTERIAL']}
                            </div>
                            <div>
                                <span className='font-bold'> Instituto: </span>{trackingDB[query]['TIPO DE INSTITUTO']}
                            </div>
                            <div>
                                <span className='font-bold'>Institución:</span>   {trackingDB[query]['PROPIEDAD']}
                            </div>
                            <div>
                                <span className='font-bold'>Página Web:</span>   {trackingDB[query]['LINK DE PÁGINA']}
                            </div>
                        </div>
                        <div className='w-full md:w-[50%] flex flex-col items-center justify-center md:items-end pt-10 md:pt-0'>

                            <div className='flex flex-col items-center justify-center md:items-center pt-10 md:pt-0 text-[16px]'>
                                <h4 className='text-center'>Escanea la ubicación de la Institución con Google LENS <br /> y ubícanos en Google MAPS</h4>

                                <div className='relative  h-[150px] w-[150px]'>
                                    <QRCode
                                        id={`qr`}
                                        size={256}
                                        style={{ height: "auto", maxWidth: "100%", width: "100%", border: '10px', backgroundColor: 'white' }}
                                        value={trackingDB[query]['LINK DE UBICACIÓN']}
                                        level={'H'}
                                        includeMargin={true}
                                        renderAs={'canvas'}
                                        viewBox={`0 0 256 256`}
                                        imageSettings={{ src: '/logo-circle.png', height: 100, width: 100, escavate: false }}
                                    />
                                </div>
                                <Link href={trackingDB[query]['LINK DE UBICACIÓN']} className=''>
                                    <button className='flex items-center text-white  bg-[#3d57d6] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-800      rounded-[5px] border    text-center  p-2 px-5'>
                                        Ubicar directamente
                                    </button>
                                </Link>
                            </div>

                        </div>

                    </div>



                    {trackingDB && trackingDB[query] && <form className="relative  pt-5 sm:col-span-3 mb-5 pb-5 "  >
                        <div className='relative  my-5 mt-10 bg-[white] space-y-5   '>
                            {/* <h5 className='text-center text-[16px] font-bold'>CARRERAS<br /> </h5> */}
                            <div class="relative overflow-x-auto">
                                <table class="w-full text-[16px] text-left rtl:text-right text-gray-700 ">
                                    <thead class="text-[16px] font-bold text-[#f1f1f1] uppercase bg-[#3d57d6]  ">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 font-bold">
                                                Carreras
                                            </th>
                                            <th scope="col" class="px-6 py-3 font-bold">
                                                Nivel
                                            </th>
                                            <th scope="col" class="px-6 py-3 font-bold">
                                                Turnos
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data2 && data2 && Object.values(data2).map((item, index) => {
                                            return <tr class="bg-[#dee3ff] border-b text-[16px] ">
                                                <td scope="row" class="px-6 py-4">
                                                    {item[`ip`]}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item[`ic`]}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {data2[`item${index}`].mañana && 'Mañana'} <br />  {data2[`item${index}`].tarde && 'Tarde'} {data2[`item${index}`].tarde && <br />}  {data2[`item${index}`].noche && 'Noche'}
                                                </td>

                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </form>}








                </div>
            </div>}




        </section>
    )
}

