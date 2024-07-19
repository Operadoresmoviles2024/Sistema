'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmail } from '@/firebase/utils'
import { useEffect, useState, useRef } from 'react'

import Input from '@/components/Input'
import Error from '@/components/Error'

import { useRouter } from 'next/navigation';


export default function Home() {
  const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()
  const router = useRouter()

  const signInHandler = (e) => {
    e.preventDefault()
    let email = e.target[0].value
    let password = e.target[1].value
    email.length !== 0 && password.length !== 0 ? signInWithEmail(email, password, setUserSuccess) : setUserSuccess('Complete')
  }

  useEffect(() => {
    if (user === undefined ) {onAuth(setUserProfile)}
    if (user && user !== undefined) {router.replace('/')}
  }, [user, userDB])

  return (
    <div  className="h-full">

      <div  className='w-screen h-screen bg-white flex flex-col justify-center items-center  z-[50]'>
     
      {/* <video  className='absolute top-0  w-full min-h-[100vh] object-cover z-10' autoPlay loop muted playsInline>
      <source src='underwater.mp4' type="video/mp4" />
    </video>  */}
        {/* <img src="/truck.png"  className='absolute  w-screen h-screen  object-cover lg:hidden' alt="" /> */}
        {/* <img src="/airplane-bg.jpg"  className='absolute  w-screen h-screen  object-cover ' alt="" /> */}

        <form  className={`space-y-6 lg:space-y-3 w-[100%] rounded-[30px] max-w-[350px] z-10 lg:scale-110`}  onSubmit={signInHandler} >
          <div  className='w-full text-center flex justify-center'>
            <img src="/logo.jpeg"  className='w-[200px] rounded-lg z-[50]' alt="User" />
          </div>
          <br />
          <div  className='space-y-4 bg-[#e2e2e2] shadow-sm p-5  rounded-[10px] lg:space-y-3'>

            <h5  className="text-[22px] text-center font-bold text-blue-700 z-[50]">Iniciar Sesión</h5>
      
            <div>
              <label htmlFor="email"  className="block mb-2 text-[16px] text-left font-medium text-blue-700">Email</label>
              <Input type="email" name="email" id="email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
            </div>
            <div>
              <label htmlFor="password"  className="block mb-2 text-[16px] text-left  font-medium text-blue-700">Contraseña</label>
              <Input type="password" name="password" id="password" placeholder="••••••••"  className="bg-gray-50 border border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            {/* <div  className="flex items-start">
              <a href="#"  className="ml-auto text-white text-[14px] text-gray-100 hover:underline">Olvidaste tu contraseña?</a>
            </div> */}
            <div className='flex justify-center py-5'>

            <button className='flex items-center text-white  bg-[#3d57d6] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-800      rounded-[5px] border    text-center  p-2 px-5'>
              Iniciar Sesion
            </button>

            </div>
            {/* <div  className="text-[14px] text-center font-medium text-white">No tienes una cuenta? <Link href="/SignUp"  className="text-gray-100 hover:underline">Registrate</Link ></div> */}

          </div>
        </form>
      </div>

      {success == 'AccountNonExist' && <Error>Cuenta inexistente</Error>}
      {success == 'Complete' && <Error>Complete el formulario</Error>}
    </div>
  )
}





