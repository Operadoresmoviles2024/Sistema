'use client'

import { Scanner } from '@yudiel/react-qr-scanner';
import { useUser } from '@/context/Context.js'
// import { getSpecificData } from '@/firebase/database'

const Component = () => {
  const { setRecetaDBP, setWebScann, setFilter, setFilterQR, setUserSpecificData} = useUser()

  const handlerQR = async (result) => {
    if (result) {
      console.log(result)
      // const data = await getSpecificData(`envio/${result}`, setFilterQR)
      setWebScann(false)
    }
  }

  return (
    <Scanner
      constraints={{
        facingMode: {exact: 'environment'} 
      }}
      onDecode={(result) => handlerQR(result)}
      onError={(error) => console.log(error?.message)}
    />
  );
}
export default Component