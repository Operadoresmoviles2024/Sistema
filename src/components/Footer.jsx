'use client'
import { useUser } from '@/context/Context'
import Slider from '@/components/Slider'
import Button from '@/components/Button'
import { useRouter, usePathname } from 'next/navigation';

export default function Home() {
  const { cliente, languaje } = useUser()
const router = useRouter()
const pathname = usePathname()


  return (
    <footer className="relative w-screen  text-center text-white pb-[70px] lg:pb-0 z-20" id="Contactos">
      <div className='overflow-hidden  bg-gradient-to-t from-[#8199db8e]  to-[#00195cf3]'>
        {/* <img src="/bg-logo.webp" className=' absolute w-full' alt="" /> */}


        { pathname ===  '/SolucionesIT' && cliente.Slider2 && <div className='relative  pb-[100px] lg:pb-0 '>
          <h1 className='text-center font-bold text-[25px] py-[50px] text-white'>{languaje === 'Español' ? 'Somos parte de:' : 'Business partners'}</h1>
          <Slider content={Object.values(cliente.Slider2)} />
        </div>}

        { pathname !==  '/SolucionesIT' && cliente.Slider3 && <div className='relative pb-[100px] lg:pb-0  '>
          <h1 className='text-center font-bold text-[25px] py-[50px] text-white'>{languaje === 'Español' ? 'Proveedores' : 'Companies'}</h1>
          <Slider content={Object.values(cliente.Slider3)} rtl={true} />
        </div>}
      </div>

      <div className='  bg-gradient-to-tr from-[#00195c] via-[#384C94] to-[#00195c]'>
        <h3 className={`w-full text-white text-left pt-[150px] font-bold text-[26px] pl-[5px]`}>{languaje === 'Español' ? 'Contactos' : 'Contacts'}</h3>
        <br />
        <div className="p-4  ">
          <p className='w-full flex justify-start items-center py-3 text-[16px]'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.7656 33.5626L35.2656 30.0626C35.737 29.597 36.3335 29.2783 36.9825 29.1452C37.6315 29.012 38.3052 29.0702 38.9219 29.3126L43.1875 31.0157C43.8106 31.2686 44.3449 31.7004 44.7231 32.2565C45.1013 32.8126 45.3063 33.4682 45.3125 34.1407V41.9532C45.3089 42.4107 45.2127 42.8627 45.0298 43.282C44.8469 43.7013 44.581 44.0793 44.2482 44.3931C43.9153 44.707 43.5224 44.9502 43.0931 45.1083C42.6637 45.2663 42.2069 45.3358 41.75 45.3126C11.8594 43.4532 5.82812 18.1407 4.6875 8.45319C4.63455 7.97746 4.68292 7.49592 4.82945 7.04024C4.97597 6.58455 5.21731 6.16505 5.5376 5.80934C5.85789 5.45363 6.24987 5.16976 6.68774 4.97641C7.12562 4.78307 7.59947 4.68463 8.07812 4.68756H15.625C16.2984 4.68956 16.9559 4.89298 17.5128 5.27167C18.0697 5.65036 18.5006 6.187 18.75 6.81256L20.4531 11.0782C20.7035 11.6924 20.7674 12.3667 20.6368 13.017C20.5062 13.6672 20.1869 14.2646 19.7187 14.7344L16.2187 18.2344C16.2187 18.2344 18.2344 31.8751 31.7656 33.5626Z" fill="white" />
            </svg>
            <span className='pl-[20px]'>
              {cliente.contactos && `Telf: ${cliente.contactos.telefono}`}{cliente.contactos && <span><br />{`Cel: ${cliente.contactos.celular}`}</span>}
            </span>
          </p>
          <p className='w-full flex justify-start items-center py-3 text-[16px]'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_443)">
                <path d="M44.9028 8.33348C44.7135 8.31397 44.5227 8.31397 44.3333 8.33348H5.44445C5.19521 8.33732 4.94762 8.37469 4.70834 8.44459L24.7778 28.4307L44.9028 8.33348Z" fill="white" />
                <path d="M46.9583 10.2637L26.7361 30.4026C26.2156 30.9199 25.5116 31.2103 24.7778 31.2103C24.0439 31.2103 23.3399 30.9199 22.8194 30.4026L2.77776 10.4164C2.71615 10.6429 2.68348 10.8762 2.68054 11.1109V38.8887C2.68054 39.6254 2.9732 40.3319 3.49413 40.8529C4.01507 41.3738 4.72161 41.6664 5.45832 41.6664H44.3472C45.0839 41.6664 45.7905 41.3738 46.3114 40.8529C46.8323 40.3319 47.125 39.6254 47.125 38.8887V11.1109C47.1139 10.8215 47.0577 10.5357 46.9583 10.2637ZM7.3611 38.8887H5.43054V36.9026L15.5278 26.8887L17.4861 28.847L7.3611 38.8887ZM44.3194 38.8887H42.375L32.25 28.847L34.2083 26.8887L44.3055 36.9026L44.3194 38.8887Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_443">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className='pl-[20px]'>
              {cliente.contactos && cliente.contactos.gmail}
            </span>
          </p>
          <p className='w-full flex justify-start items-center py-3 text-[16px]'>
            <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0.125C13.4432 0.130376 9.07464 1.94292 5.85253 5.16504C2.63041 8.38716 0.817864 12.7557 0.812488 17.3125C0.80703 21.0363 2.02339 24.659 4.27499 27.625C4.27499 27.625 4.74374 28.2422 4.8203 28.3312L18 43.875L31.1859 28.3234C31.2547 28.2406 31.725 27.625 31.725 27.625L31.7265 27.6203C33.977 24.6556 35.1928 21.0346 35.1875 17.3125C35.1821 12.7557 33.3696 8.38716 30.1474 5.16504C26.9253 1.94292 22.5567 0.130376 18 0.125ZM18 23.5625C16.7639 23.5625 15.5555 23.1959 14.5277 22.5092C13.4999 21.8224 12.6988 20.8463 12.2257 19.7043C11.7527 18.5622 11.6289 17.3056 11.8701 16.0932C12.1112 14.8808 12.7065 13.7672 13.5806 12.8931C14.4546 12.019 15.5683 11.4237 16.7807 11.1826C17.9931 10.9414 19.2497 11.0652 20.3918 11.5383C21.5338 12.0113 22.5099 12.8124 23.1967 13.8402C23.8834 14.868 24.25 16.0764 24.25 17.3125C24.2479 18.9695 23.5888 20.558 22.4171 21.7296C21.2455 22.9013 19.657 23.5604 18 23.5625Z" fill="white" />
            </svg>
            <span className='pl-[34px]'>
              {cliente.contactos && cliente.contactos['direccion 1']}
              {cliente.contactos && cliente.contactos['direccion 2'] && <br />}
              {cliente.contactos && cliente.contactos['direccion 2']} <br />
              {cliente.contactos && cliente.contactos.departamento + ' - Bolivia'}
            </span>
          </p>
        </div>

        <div className="w-full px-6 pt-6 flex justify-center bg-[#12206e]">
          <div className="mb-1 flex justify-center">
            <a
              href={cliente.contactos && cliente.contactos.facebook ? cliente.contactos.facebook : '#'}
              target='_blank'
              type="button"
              className="m-1 h-9 w-9 relative flex items-center justify-center rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href={cliente.contactos && cliente.contactos.twiter ? cliente.contactos.twiter : '#'}
              type="button"
              className="m-1 h-9 w-9 flex items-center justify-center  rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M19.1696 5.13274C19.0076 5.04902 18.85 4.95725 18.6972 4.85776C18.2528 4.564 17.8454 4.21786 17.4837 3.82681C16.5788 2.79136 16.2408 1.74091 16.1163 1.00545H16.1213C16.0173 0.39498 16.0603 0 16.0668 0H11.945V15.9382C11.945 16.1522 11.945 16.3637 11.936 16.5727C11.936 16.5987 11.9335 16.6227 11.932 16.6507C11.932 16.6622 11.932 16.6742 11.9295 16.6862V16.6952C11.886 17.267 11.7027 17.8194 11.3957 18.3038C11.0886 18.7882 10.6672 19.1897 10.1686 19.473C9.64888 19.7687 9.06108 19.9238 8.46317 19.923C6.54276 19.923 4.98634 18.3571 4.98634 16.4232C4.98634 14.4893 6.54276 12.9234 8.46317 12.9234C8.82669 12.923 9.18798 12.9802 9.53361 13.0928L9.53861 8.89606C8.48935 8.76052 7.42338 8.84391 6.40795 9.14096C5.39253 9.43802 4.44969 9.94229 3.63891 10.622C2.92847 11.2392 2.33121 11.9758 1.87399 12.7984C1.7 13.0983 1.04354 14.3038 0.96404 16.2602C0.914043 17.3706 1.24753 18.5211 1.40652 18.9966V19.0066C1.50651 19.2865 1.89399 20.242 2.52546 21.0474C3.03466 21.6935 3.63625 22.2611 4.31087 22.7319V22.7219L4.32087 22.7319C6.31627 24.0878 8.52866 23.9988 8.52866 23.9988C8.91164 23.9833 10.1946 23.9988 11.6515 23.3083C13.2674 22.5429 14.1874 21.4024 14.1874 21.4024C14.7751 20.721 15.2424 19.9444 15.5693 19.106C15.9423 18.1256 16.0668 16.9497 16.0668 16.4797V8.0241C16.1168 8.0541 16.7828 8.49458 16.7828 8.49458C16.7828 8.49458 17.7422 9.10955 19.2391 9.51003C20.3131 9.79501 21.76 9.85501 21.76 9.85501V5.76321C21.253 5.81821 20.2236 5.65822 19.1696 5.13274Z" fill="white" />
              </svg>
            </a>

            {/* <a
              href={cliente.contactos && cliente.contactos.gmail ? cliente.contactos.gmail : '#'}
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fillRule="evenodd"
                  clipRule="evenodd" />
              </svg>
            </a> */}

            <a
              href={cliente.contactos && cliente.contactos.instagram ? cliente.contactos.instagram : '#'}
              type="button"
              className="m-1 h-9 w-9 flex items-center justify-center  rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href={cliente.contactos && cliente.contactos.linkedin ? cliente.contactos.linkedin : '#'}
              type="button"
              className="m-1 h-9 w-9 flex items-center justify-center  rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>

          </div>

        </div>
        <div className='w-full  pb-[20px] flex flex-col justify-center items-center relative bg-[#12206e]'>
          <marquee behavior="" direction="">
            <button className='border px-5 ml-5  rounded-full bg-[#00000070]' onClick={() => router.push('/Postulaciones')}>Postular a Logistics Gear Lta</button>

          </marquee>
        </div>
        <div
          className="p-4 text-center "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2024 Copyright
          <a className="text-whitehite underline" href="https://swoou.com/"
          >LogisticsGear Ldta</a>

        </div>


      </div>

    </footer>
  )
}




