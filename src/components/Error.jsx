'use client';
import { useUser } from '@/context/Context'


export default function Button({ children }) {
    const { user, userDB, setUserData, setUserSuccess, success } = useUser()

    return (
        <div className={`fixed top-0 w-screen flex p-4 mb-4 text-[16px] text-red-800 border border-red-400 rounded-lg bg-white z-50 `} role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-10 h-10 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Info</span>
            <div  className="w-[100%] text-[16px] flex justify-between items-center">
                <span className="font-medium text-[16px]">ERROR! {children}</span>
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={()=>setUserSuccess('')}>
                    <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#991b1b" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

        </div>
    )
}