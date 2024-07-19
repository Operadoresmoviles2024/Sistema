'use client';

export default function Button({ theme, type, styled, click, children }) {

    switch (theme) {
        case 'Transparent':
            return <button
                type={type}
                className="text-white bg-transparent border border-gray-100 hover:bg-blue-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full  text-[16px] w-full  min-w-[150px] px-2 py-2 max-w-[300px] text-center z-20"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
            break
        case 'Primary':
            return <button
                type={type}
                className="bg-[#F1BA06] border border-gray-100  focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full  text-[16px] w-full  min-w-[150px] px-2 py-2 max-w-[300px] text-center z-20"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
            break
        case 'Secondary':
            return <button
                type={type}
                className="text-white bg-[#2A52BE] border border-gray-100 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full  text-[16px] w-full  min-w-[150px] px-2 py-2 max-w-[300px] text-center z-20"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>

        case 'Success':
            return <button
                type={type}
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300  font-medium rounded-full text-[16px] w-full  min-w-[150px] px-2 py-2 max-w-[300px] text-center"

                //   className="text-black bg-[#32CD32]  focus:ring-1 focus:outline-none  rounded-full   w-full  min-w-[150px] font-medium px-2 py-2 text-[16px] text-center z-20" 
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'SuccessBuy':
            return <button
                type={type}
                className="text-gray-900 font-bold flex justify-center items-center bg-[#32CD32] hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-full  text-[18px] w-full  min-w-[150px] px-2 py-2 text-center z-20"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {/* <svg  className='inline mr-3 h-[30px] w-[30px]' viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.875 29.1125V26.5H11.7875L13.325 23.8875L36.9 21.75L41 7.5H9.48125L7.6875 0.375H0V2.75H5.6375L11.0188 22.7L7.6875 28.875V32.4375C7.6875 34.3375 9.48125 36 11.5312 36C13.5813 36 15.375 34.3375 15.375 32.4375C15.375 30.5375 13.5813 28.875 11.5312 28.875H30.75V32.4375C30.75 34.3375 32.5437 36 34.5938 36C36.6438 36 38.4375 34.3375 38.4375 32.4375C38.4375 30.775 37.4125 29.5875 35.875 29.1125Z" fill="white" />
                </svg> */}
                <span className='inline-block mr-3 h-[35px] w-[35px]  border-4 border-double rounded-full  text-[20px] text-gray-900 font-bold border-gray-900'>$</span>
                {children}
            </button>
        case 'SuccessReceta':
            return <button
                type={type}
                className="text-gray-900 font-bold flex justify-center items-center bg-[#32CD32] hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-full  text-[18px] w-full  min-w-[150px] px-2 py-2 text-center z-20"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                <svg className='inline mr-3 h-[35px] w-[35px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C6.46957 0 5.96086 0.210714 5.58579 0.585786C5.21071 0.960859 5 1.46957 5 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0L7 0Z" fill="black" />
                    <path d="M13 20C13.5304 20 14.0391 19.7893 14.4142 19.4142C14.7893 19.0391 15 18.5304 15 18V5C15 4.46957 14.7893 3.96086 14.4142 3.58579C14.0391 3.21071 13.5304 3 13 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H13ZM9 5H13V10H9V5ZM4 5H8V6H4V5ZM4 7H8V8H4V7ZM4 9H8V10H4V9ZM4 11H13V12H4V11ZM4 13H13V14H4V13ZM4 15H13V16H4V15Z" fill="black" />
                </svg>
                {children}
            </button>
        case 'Danger':
            return <button
                type={type}
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] px-2 py-2 max-w-[300px] text-center"

                //  className="text-white bg-red-500  focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full  text-[14px] w-full  min-w-[150px] px-2 py-2 max-w-[300px] text-center z-20"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'Disable':
            return <button
                type={type}
                className="text-white bg-gray-400  focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full  text-[14px] w-full  min-w-[150px] px-2 py-4 text-center z-50"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'MiniPrimary':
            return <button
                type={type}
                className="relative text-white bg-[#2A52BE] border border-gray-100 hover:bg-blue-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-bold rounded-full  text-[16px] w-full  min-w-[150px] px-6 py-2 max-w-[300px]  text-center font-medium z-20"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
            break
        case 'MiniPrimaryComprar':
            return <button
                type={type}
                className="relative text-white bg-[#2A52BE] border border-gray-100 hover:bg-blue-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-bold rounded-full  text-[16px] w-full  min-w-[150px] px-6 py-2 max-w-[300px]  text-center font-medium z-20"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                <svg className='inline mr-3 h-[18px] w-[18px]' viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.875 29.1125V26.5H11.7875L13.325 23.8875L36.9 21.75L41 7.5H9.48125L7.6875 0.375H0V2.75H5.6375L11.0188 22.7L7.6875 28.875V32.4375C7.6875 34.3375 9.48125 36 11.5312 36C13.5813 36 15.375 34.3375 15.375 32.4375C15.375 30.5375 13.5813 28.875 11.5312 28.875H30.75V32.4375C30.75 34.3375 32.5437 36 34.5938 36C36.6438 36 38.4375 34.3375 38.4375 32.4375C38.4375 30.775 37.4125 29.5875 35.875 29.1125Z" fill="white" />
                </svg>
                {children}
            </button>
            break
        case 'MiniPrimaryInfo':
            return <button
                type={type}
                className="relative text-white bg-[#0064FA] border border-gray-100 hover:bg-blue-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full  text-[14px] w-full  min-w-[150px] px-2 py-2  text-center z-20"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                <svg className='inline mr-3 h-[20px] w-[20px]' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3 7.29C12.5 7.11 12.74 7 13 7C13.27 7 13.5 7.11 13.71 7.29C13.9 7.5 14 7.74 14 8C14 8.27 13.9 8.5 13.71 8.71C13.5 8.9 13.27 9 13 9C12.74 9 12.5 8.9 12.3 8.71C12.11 8.5 12 8.27 12 8C12 7.74 12.11 7.5 12.3 7.29ZM9.8 11.97C9.8 11.97 11.97 10.25 12.76 10.18C13.5 10.12 13.35 10.97 13.28 11.41L13.27 11.47C13.13 12 12.96 12.64 12.79 13.25C12.41 14.64 12.04 16 12.13 16.25C12.23 16.59 12.85 16.16 13.3 15.86C13.36 15.82 13.41 15.78 13.46 15.75C13.46 15.75 13.54 15.67 13.62 15.78C13.64 15.81 13.66 15.84 13.68 15.86C13.77 16 13.82 16.05 13.7 16.13L13.66 16.15C13.44 16.3 12.5 16.96 12.12 17.2C11.71 17.47 10.14 18.37 10.38 16.62C10.59 15.39 10.87 14.33 11.09 13.5C11.5 12 11.68 11.32 10.76 11.91C10.39 12.13 10.17 12.27 10.04 12.36C9.93 12.44 9.92 12.44 9.85 12.31L9.82 12.25L9.77 12.17C9.7 12.07 9.7 12.06 9.8 11.97ZM22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12Z" fill="white" />
                </svg>
                {children}
            </button>
            break
        case 'MiniSecondary':
            return <button
                type={type}
                className="relative text-white bg-violet-700 hover:bg-violet-700 border border-gray-100 hover:bg-blue-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-bold rounded-full  text-[16px] w-full  min-w-[150px] px-6 py-2 max-w-[300px]  text-center font-medium z-20"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>

        case 'MiniSuccess':
            return <button
                type={type}
                className="relative text-white bg-[#2A52BE] border border-gray-100 hover:bg-blue-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-bold rounded-full  text-[16px] w-full  min-w-[150px] px-6 py-2 max-w-[300px]  text-center font-medium z-20"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'MiniSuccessRecetar':
            return <button
                type={type}
                className="text-white bg-[#32CD32] hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full  text-[16px] w-full  min-w-[150px] px-6 py-2 max-w-[300px]  text-center z-20"
                //  className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full  min-w-[150px] sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                <svg className='inline mr-3 h-[17px] w-[17px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C6.46957 0 5.96086 0.210714 5.58579 0.585786C5.21071 0.960859 5 1.46957 5 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0L7 0Z" fill="white" />
                    <path d="M13 20C13.5304 20 14.0391 19.7893 14.4142 19.4142C14.7893 19.0391 15 18.5304 15 18V5C15 4.46957 14.7893 3.96086 14.4142 3.58579C14.0391 3.21071 13.5304 3 13 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H13ZM9 5H13V10H9V5ZM4 5H8V6H4V5ZM4 7H8V8H4V7ZM4 9H8V10H4V9ZM4 11H13V12H4V11ZM4 13H13V14H4V13ZM4 15H13V16H4V15Z" fill="white" />
                </svg>
                {children}
            </button>
        default:

    }
}

