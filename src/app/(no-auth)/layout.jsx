'use client'
import { useUser } from '@/context/Context'
import { getSpecificData } from '@/firebase/utils'

import { useState, useEffect } from 'react'
import { handleSignOut } from '@/firebase/utils'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { onAuth } from '@/firebase/utils'

function Home({ children }) {
  const router = useRouter()
  const { user, userDB, setUserProfile, trackingDB, setTrackingDB, setUserCart, setNavItem, setUserProduct, setRecetaDB, setUserDistributorPDB, setUserData, filter, setFilter, nav, setNav, modal, setModal, cart, cliente, setCliente } = useUser()
  const pathname = usePathname()


  console.log(pathname)



  const redirectHandler = (ref) => {
    router.push(ref)
  }

  const handlerFilter = (e) => {
    const data = e.target.value
    setFilter(data)
  }
  const back = () => {
    router.back()
  }
  function openNav(e) {
    e.preventDefault()
    e.stopPropagation()
    setNav(!nav)
  }

  const handleSignOutConfirm = () => {
    setUserProfile(null)
    setUserCart({})
    setUserProduct(undefined),
      setRecetaDB(undefined),
      setUserDistributorPDB(undefined)
    setUserData(null)
    router.push('/')
    setModal('')
    handleSignOut()
  }



  useEffect(() => {
    if (user === undefined) { onAuth(setUserProfile, setUserData) }
    if (userDB === null && user && user !== undefined) { getSpecificData(`Users/${user.uid}`, setUserData) }
    if (trackingDB === undefined) getSpecificData('/Institutos', setTrackingDB)
  }, [user, cliente, trackingDB])
  return (

    <main className={`relative min-w-screen  lg:pb-0  lg:min-w-auto my-[0px]   lg:min-h-screen  ${nav ? 'w-screen pl-[100vw] overflow-hidden ' : '  lg:px-[0px]'}`} onClick={() => setNav(false)} style={{ transition: 'all 0.5' }}>
      <div>
        <img src="/flagBOL.jfif" className='fixed left-[25vw] top-[30vh] w-[50vw]' alt="" />
        {children}
      </div>
    </main>

  )
}

export default Home

