

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

const InvoicePDF = dynamic(() => import("@/components/docPDF"), {
    ssr: false,
});
function CotizacionTerrestre() {
    const { user, userDB, pdfData, setUserPdfData, setUserSuccess } = useUser()
    const router = useRouter()
    useEffect(() => {
    }, [userDB]);

    return (
        <div className="relative flex  justify-center items-center min-h-screen ">

            <InvoicePDF />

        </div>
    )
}

export default CotizacionTerrestre