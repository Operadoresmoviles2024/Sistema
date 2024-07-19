

'use client';
import { useUser } from '@/context/Context'
import { useEffect, useState } from 'react'
import { onAuth, signInWithEmail, writeUserData, removeData } from '@/firebase/utils'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/app/page.module.css'
import Button from '@/components/Button'
import Loader from '@/components/Loader'
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal'
import InputFlotante from '@/components/InputFlotante'
import { generateUUID } from '@/utils/UIDgenerator'
import dynamic from "next/dynamic";


function CotizacionTerrestre() {
    const { user, userDB, pdfData, setUserPdfData, setUserSuccess } = useUser()
    const router = useRouter()
    const [data, setData] = useState([])
    const [data2, setData2] = useState({})
    let acc = []
  
    async function getContacts(e) {
        e.preventDefault()
        const resDB = await Object.values(data2).map(async (i) => {
            const res = await fetch(`https://numeracionyoperadores.cnmc.es/api/portabilidad/movil?numero=${i.ip}&captchaLoad=true`)
            const db = await res.json()
            acc = [...acc, db]
            return setData(acc)
            // console.log(db)
            // setData([...data, db])
        })


        return setData(acc)


        // const res = await fetch(`https://numeracionyoperadores.cnmc.es/api/portabilidad/movil?numero=677617423&captchaLoad=true`)
        // const data = await res.json()
        // console.log(data)
    }
    console.log(data)
    function handlerLess2(d) {
        let db = { ...data2 };
        delete db[`item${data2 !== undefined && Object.keys(data2).length - 1}`];
        setData2(db)
        return
    }
    function onChangeHandler2(e, index, d) {
        setData2({ ...data2, [`item${index}`]: { ...data2[`item${index}`], [e.target.name]: e.target.value } })
        return
    }
    return (
        <div className="relative flex w-full justify-center items-center min-h-screen bg-black p-12 ">
            <div className='relative w-full  flex flex-col justify-center '>


                <div className='flex mb-12 justify-center items-center'>

                    <label for="number" class="block mb-2 text-sm font-medium text-[#24ff1c]">Ingresar numeros</label>
                    <div className="relative flex ml-10">
                        <button type='button' className="bg-red-500 text-white flex font-bold py-2 px-4 rounded-l" onClick={() => handlerLess2()}>
                            -
                        </button>
                        <button type='button' className="bg-green-500 text-white font-bold py-2 px-4 rounded-r" onClick={() => setData2({ ...data2, [`item${data2 !== undefined && Object.keys(data2).length}`]: { ip: '' } })} >
                            +
                        </button>
                    </div>

                </div>

                <form class="w-full  mx-auto" onSubmit={getContacts}>
                    <div class="w-full mb-5 border-b border-[#818181] md:flex md:flex-wrap md:justify-center">
                        {data2 && data2 !== undefined && Object.values(data2).map((i, index) => {
                            return <div className=' space-y-5  pb-5'>
                                < input type="text" name={`ip`}
                                    className=" border w-full md:w-[150px]  text-sm rounded-lg  block md:mx-2 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                                    uid={`column_${index}`}
                                    placeholder='Ingrese el numero'
                                    onChange={(e) => onChangeHandler2(e, index, 'd4')}
                                    value={data2[`item${index}`][`ip`] && data2[`item${index}`][`ip`] ? data2[`item${index}`][`ip`] : i[`ip`]}
                                    required label={'Carrera'}
                                />

                            </div>
                        })
                        }
                    </div>

                    <div className='w-full flex justify-center'>

                        <button type="submit" class="text-white bg-[#27c419] hover:bg-[#2ea523] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Trackear Numero</button>

                    </div>
                </form>





                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Número de teléfono:
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Operador actual:
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Fecha consulta:
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((i) => {

                                return <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {i.numero}
                                    </th>
                                    <td class="px-6 py-4">
                                        {i.operador && i.operador !== undefined && i.operador.nombre ? i.operador.nombre : 'Operador Inexistente'}
                                    </td>
                                    <td class="px-6 py-4">
                                        {i.fecha && i.fecha !== undefined ? i.fecha : 'Fecha Inexistente'}
                                    </td>
                                </tr>

                            })}
                        </tbody>
                    </table>
                </div>




            </div>










        </div>
    )
}

export default CotizacionTerrestre