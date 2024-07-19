'use client'





import { useRouter } from 'next/navigation';
import { useUser } from '@/context/Context.js'

import { useMask } from '@react-input/mask';
import { WithAuth } from '@/HOCs/WithAuth'


function Home() {

    const { cart, productDB, setUserProduct, setUserCart, setUserItem, item } = useUser()

    const inputRefCard = useMask({ mask: '____ ____ ____ ____', replacement: { _: /\d/ } });
    const inputRefDate = useMask({ mask: '__/__', replacement: { _: /\d/ } });
    const inputRefCVC = useMask({ mask: '___', replacement: { _: /\d/ } });
    const router = useRouter()

    function HandlerCheckOut() {
        router.push('/Cliente/Comprar')
    }
    function seeMore() {
        router.push('/Producto')
    }
    const addCart = (e, i) => {
        e.preventDefault()
        e.stopPropagation()
        setUserCart({ ...cart, [i.uuid]: { ...i, cantidad: 1 } })
    }
    const addPlussCart = (e, i) => {
        e.preventDefault()
        e.stopPropagation()
        setUserCart({ ...cart, [i.uuid]: { ...i, cantidad: cart[i.uuid].cantidad + 1 } })
    }
    const addLessCart = (e, i) => {
        e.preventDefault()
        e.stopPropagation()
        const obj = { ...cart }
        delete obj[i.uuid]
        console.log(obj)

        cart[i.uuid].cantidad - 1 == 0
            ? setUserCart(obj)
            : setUserCart({ ...cart, [i.uuid]: { ...i, cantidad: cart[i.uuid].cantidad - 1 } })
    }

    console.log(item)
    return (
      <main  className="relative left-0 right-0 mx-auto p-5 mt-12 max-w-[900px] flex flex-col items-center lg:flex-row lg:justify-between lg:items-center pt-[20px] pb-[20px] bg-white rounded-[5px]">
            <div  className='flex flex-wrap justify-center lg:justify-start md:max-w-[400px] '>
                <img src="/logo.jpeg"  className='lg:w-[90vw] lg:max-w-[400px] max-h-[200px] lg:max-h-[10000px] lg:px-10' alt="" />
            </div>
            <br />
            <div  className='lg:pl-12 lg:border-l bg-gray-50 p-5 lg:bg-white lg:p-0'>
                <h3>Politicas de servicio</h3>
                <p >

                    Política de Servicio para la Aplicación de Venta de Implantes de Osteosíntesis

                    Entregas y retrasos: Nos esforzamos en garantizar que todas las entregas de implantes de osteosíntesis se realicen de manera oportuna. Sin embargo, existen factores más allá de nuestro control que pueden resultar en retrasos. No nos hacemos responsables de los retrasos en las entregas que sean resultado de circunstancias fuera de nuestro control, tales como condiciones climáticas adversas, huelgas, problemas aduaneros, entre otros.

                    Información del producto: Hacemos todo lo posible para garantizar que la información proporcionada sobre nuestros implantes de osteosíntesis sea precisa y actual. No obstante, no podemos hacernos responsables de cualquier error, omisión o inexactitud en la información proporcionada por el fabricante. Recomendamos a los usuarios que verifiquen la información con el fabricante antes de realizar la compra.

                    Calidad del producto: Nuestros implantes de osteosíntesis son de alta calidad y cumplen con todas las regulaciones y estándares aplicables. Sin embargo, no podemos garantizar los resultados clínicos obtenidos tras su utilización, ya que estos pueden variar dependiendo de factores individuales del paciente y la habilidad y experiencia del cirujano.

                    Devoluciones y reembolsos: Aceptamos devoluciones y reembolsos solo en caso de que los productos estén defectuosos o no sean como se describen en la aplicación. No podemos aceptar devoluciones de productos que ya hayan sido utilizados, a menos que estén defectuosos.

                    Uso adecuado: Los implantes de osteosíntesis deben ser utilizados únicamente por profesionales de la salud capacitados. No nos hacemos responsables por el mal uso de los productos, incluyendo su utilización sin la debida formación y capacitación.

                    Esta política de servicio está diseñada para proporcionar una guía clara y transparente a nuestros usuarios. Asegúrese de leer y entender completamente nuestra política antes de realizar una compra. Si tiene alguna pregunta o inquietud, no dude en ponerse en contacto con nuestro equipo de atención al cliente.

                    Por favor, tenga en cuenta que al utilizar nuestra aplicación, usted está aceptando los términos y condiciones expuestos en esta política de servicio.
                </p>
                <br />
                <h3>Politicas de Privacidad de Datos</h3>
               

                
                
            </div>
        </main> 
    )
}
export default WithAuth(Home)


