import { PDFDownloadLink, Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useUser } from "../context/Context.js"
import { useState, useRef, useEffect } from 'react'
import Button from './Button'
// Font.register({
//     family: "Inter",
//     fonts: [
//         { src: "/roboto/roboto-v30-latin-300.ttf", fontWeight: 'light' },
//         { src: "/roboto/roboto-v30-latin-300italic.ttf", fontStyle: 'italic' },
//         { src: "/roboto/roboto-v30-latin-500.ttf", fontWeight: 'medium' },
//         { src: "/roboto/roboto-v30-latin-700.ttf", fontWeight: 'bold' },
//         { src: "/roboto/roboto-v30-latin-500italic.ttf", fontStyle: 'italic', fontWeight: 'bold' },

//     ]
// })

Font.register({
    family: "Inter",
    fonts: [
        { src: "/Montserrat/static/Montserrat-Light.ttf", fontWeight: 'light' },
        { src: "/Montserrat/static/Montserrat-Medium.ttf", fontWeight: 'medium' },
        { src: "/Montserrat/static/Montserrat-Bold.ttf", fontWeight: 'bold' },
        { src: "/Montserrat/static/Montserrat.ttf", fontStyle: 'italic', fontWeight: 'bold' },

    ]
})

const styles = StyleSheet.create({
    body: {
        padding: ".8cm",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#ffffff",
        fontSize: "10px",
        fontWeight: "100",
    },
    container: {
        position: 'relative',
        width: "100%",
    },
    intro: {
        position: 'relative',
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: '20px 0px'
    },
    box: {
        position: 'relative',
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#294B98",


    },
    img: {
        width: "100%",
        height: "500px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
    },

    logo: {
        position: "relative",
        height: "",
        width: "300px",
        marginLeft: "35px",
    },
    title: {
        margin: "0px",
        width: "50%",
        padding: "5px 1px 2px 10px ",
        border: "1px solid #294B98",
        borderRight: "none",
        color: "white",
        textAlign: 'center',
        fontSize: '10px',
        fontFamily: 'Inter',
        fontWeight: 'medium',
    },
    key: {
        margin: "0px",
        width: "50%",
        padding: "5px 1px 2px 10px ",
        border: "1px solid #294B98",
        borderRight: "none",
        backgroundColor: "#D9E8EE",
        color: "black",
        fontSize: "10px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        fontFamily: 'Inter',
        fontWeight: 'medium',
    },
    value: {
        margin: "0px",
        width: "50%",
        padding: "5px 1px 2px 10px ",
        border: "1px solid #294B98",
        // backgroundColor: "#D9E8EE",
        color: "black",
        fontSize: "10px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        fontFamily: 'Inter',
        fontWeight: 'light',

    },
})






const PDFView = ({ click }) => {
    const { pdfData, setUserPdfData, calcValueFCL, setCalcValueFCL, naviera, calcValue, setCalcValue, element, setElement, cliente } = useUser()

    const [isCliente, setisCliente] = useState(false);

    const Br = () => "\n";

    useEffect(() => {
        setisCliente(true)
        setUserPdfData({ tarifa: [''], otrosGastos: [''], incluye: [''], excluye: [''], notas: [''], ...pdfData })
    }, []);

    console.log(cliente.contactos)

    return (
        <div style={{ display: 'block', width: '100vw', textAlign: 'center', zIndex: '50' }}>
            <PDFViewer style={{ width: '100vw', height: '100vh', }}>
                <Document style={{ width: '100vw' }}>
                    <Page style={styles.body} size="A4" fixed  >

                        <View style={styles.container}>
                            <View style={styles.box}>
                                <Text style={styles.title}>COTIZACIÓN</Text>
                            </View>

                            <View style={styles.intro}>

                                <Image style={styles.logo} src="/logo-horizontal.png" />

                            </View>



                            {element === 'FTL' && calcValue &&
                                <>
                                    <View style={styles.box}>
                                        <Text style={styles.title}>DETALLES</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.key}>ORIGEN</Text><Text style={styles.value}>{calcValue['ORIGEN']}</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.key}>DESTINO</Text><Text style={styles.value}>{calcValue['DESTINO']}</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.key}>MERCACIA</Text><Text style={styles.value}>{calcValue['MERCANCIA']}</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.key}>PESO</Text><Text style={styles.value}>{calcValue['PESO (KG)']}</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.key}>VOLUMEN</Text><Text style={styles.value}>{calcValue['VOLUMEN M3']}</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.key}>TIPO DE UNIDAD</Text><Text style={styles.value}>{calcValue['TIPO DE UNIDAD']}</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.key}>SERVICIO</Text><Text style={styles.value}>{calcValue['SERVICIO']}</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.key}>FLETE USD</Text><Text style={styles.value}>{calcValue['FLETE USD']}</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.key}>SERVICIOS LOGISTICOS USD</Text><Text style={styles.value}>{calcValue['SERVICIOS LOGISTICOS USD']}</Text>
                                    </View>
                                </>
                            }




                            {element === 'FCL' && calcValueFCL &&
                                <>
                                    {calcValueFCL !== 'NO DATA' &&
                                        calcValueFCL.map((item) => {

                                            return naviera === item.NAVIERA && <>
                                                <View style={styles.box}>
                                                    <Text style={styles.title}>DETALLES</Text>
                                                </View>
                                                <View style={styles.content}>
                                                    <Text style={styles.key}>Origen</Text><Text style={styles.value}>{item.ORIGEN}</Text>
                                                </View>
                                                <View style={styles.content}>
                                                    <Text style={styles.key}>Destino</Text><Text style={styles.value}>{item.DESTINO}</Text>
                                                </View>
                                                <View style={styles.content}>
                                                    <Text style={styles.key}>Equipo</Text><Text style={styles.value}>{item.EQUIPO}</Text>
                                                </View>
                                                <View style={styles.content}>
                                                    <Text style={styles.key}>TT</Text><Text style={styles.value}>{item.TT}</Text>
                                                </View>
                                                {item.flete && <View style={styles.box}>
                                                    <Text style={styles.title}>FLETE</Text>
                                                </View>}
                                                {item.flete && Object.entries(item.flete).map((i, index) => <View style={styles.content}>
                                                    <Text style={styles.key}>{i[1].ip}</Text><Text style={styles.value}>{i[1].ic}</Text>
                                                </View>)}
                                                {item['recargos origen'] && <View style={styles.box}>
                                                    <Text style={styles.title}>RECARGOS ORIGEN</Text>
                                                </View>}
                                                {item['recargos origen'] && Object.entries(item['recargos origen']).map((i, index) => <View style={styles.content}>
                                                    <Text style={styles.key}>{i[1].ip}</Text><Text style={styles.value}>{i[1].ic}</Text>
                                                </View>)}
                                                {item['recargos destino'] && <View style={styles.box}>
                                                    <Text style={styles.title}>RECARGOS DESTINO</Text>
                                                </View>}
                                                {item['recargos destino'] && Object.entries(item['recargos destino']).map((i, index) => <View style={styles.content}>
                                                    <Text style={styles.key}>{i[1].ip}</Text><Text style={styles.value}>{i[1].ic}</Text>
                                                </View>)}

                                                <View style={styles.content}>
                                                    <Text style={{ width: '50%' }}></Text>
                                                    <Text style={{ width: '50%', backgroundColor: 'yellow', padding: '3px', textAlign: 'right', fontFamily: 'Inter', fontWeight: 'medium' }}>Fecha maxima de vigencia de cotizacion: {item.VALIDEZ.split('-').reverse().map((e) => e + '/')}</Text>
                                                </View>
                                            </>

                                        })
                                    }

                                </>
                            }
                            <View style={styles.content}>
                                <Text style={{ width: '100%', padding: '3px', textAlign: 'center', color: 'black', fontFamily: 'Inter', fontWeight: 'medium', fontSize: '10px'}}>
                                    <Br /> <Br />La cotización esta sujeta a los diferentes movientos del mercado en general, PARA UN COTIZACIÓN MAS CERTERA CONTANOS O VISITANOS EN: <Br /> <Br />
                                </Text>
                            </View>

                            <View style={styles.content}>
                                <Text style={{ width: '100%', padding: '3px', textAlign: 'center', color: '#294B98', fontSize: '10px', fontFamily: 'Inter', fontWeight: 'medium', }}>
                                    <Br /> {cliente.contactos.gmail}<Br />
                                    Telf:  {cliente.contactos.telefono}  Cel: {cliente.contactos.celular}<Br />
                                    {cliente.contactos['direccion 1']}  {cliente.contactos['direccion 2']}<Br />
                                    {cliente.contactos.departamento} - BOLIVIA
                                </Text>
                            </View>




                        </View>

                    </Page>
                </Document>
            </PDFViewer>
        </div>
    )
}


export default PDFView