

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
import React, { useRef } from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';

function CotizacionTerrestre() {
    const { user, userDB, pdfData, setUserPdfData, setUserSuccess } = useUser()
    const router = useRouter()
    const [data, setData] = useState([])
    const [data2, setData2] = useState('')
    let acc = []
    const tableRef = useRef(null);

    console.log(data2.split('\n'))
    async function getContacts(e) {
        e.preventDefault()
        const resDB = await Object.values(data2.split('\n')).map(async (i) => {
            const res = await fetch(`https://numeracionyoperadores.cnmc.es/api/portabilidad/movil?numero=${i}&captchaLoad=true`)
            const db = await res.json()
            acc = [...acc, db]
            console.log(res)
            return setData(acc)
            // console.log(db)
            // setData([...data, db])
        })


        return setData(acc)


        // const res = await fetch(`https://numeracionyoperadores.cnmc.es/api/portabilidad/movil?numero=677617423&captchaLoad=true`)
        // const data = await res.json()
        // console.log(data)
    }

    function onChangeHandler2(e) {
        setData2(e.target.value)

    }
    return (
        <div className="relative flex w-full justify-center items-center min-h-screen bg-black p-12 ">
            <div className='relative w-full  flex flex-col justify-center '>


                <div className='flex mb-12 justify-center items-center'>

                    <label for="number" class="block mb-2 text-sm font-medium text-[#24ff1c]">Ingresar numeros</label>

                </div>

                <form class="w-full  mx-auto" onSubmit={getContacts}>
                    <div class="w-full mb-5 border-b border-[#818181] md:flex md:flex-wrap md:justify-center">

                        < textarea type="text"
                            className=" border w-full md:w-[150px]  text-sm rounded-lg  block md:mx-2 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                            placeholder='Ingrese el numero'
                            rows={20}
                            onChange={onChangeHandler2}
                            // value={data2[`item${index}`][`ip`] && data2[`item${index}`][`ip`] ? data2[`item${index}`][`ip`] : i[`ip`]}
                            required label={'Carrera'}
                        />


                    </div>
                    <div className='flex w-full justify-center mb-10'>

                        <button
                            type={'submit'}
                            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300  font-medium rounded-full text-[16px] w-full  min-w-[150px] px-2 py-2 max-w-[300px] text-center"
                        >
                            Get Data
                        </button>
                    </div>



                </form>





                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" ref={tableRef}>
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
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
                            {data && data.map((i, index) => {

                                return <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
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


                <div className='p-10 flex justify-center w-full'>

                    <DownloadTableExcel
                        filename="users table"
                        sheet="users"
                        currentTableRef={tableRef.current}
                    >
                        <button
                            className="text-white  bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] px-2 py-2 max-w-[300px] text-center"
                        >
                            Export excel
                        </button>

                    </DownloadTableExcel>
                </div>


            </div>









        </div>
    )
}

export default CotizacionTerrestre