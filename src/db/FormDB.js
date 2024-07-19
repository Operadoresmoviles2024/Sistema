let formDB = [
    {
        ['REGISTRO DE SERVICIO']:
            [
                { label: 'Nº DE SERVICIO LGP' },
                {
                    label: 'MODALIDAD DE SERVICIO',
                    select: ['MARITIMO', 'TERRESTRE', 'AEREO', 'MULTIMODAL', 'SERVICIOS ADICIONALES']
                },
                {
                    label: 'TIPO DE SERVICIO',
                    select: ['FCL', 'LCL', 'BULK CARGO', 'AEREO', 'LTL', 'FTL']
                },
                { label: 'Nº DE COTIZACION' },
                {
                    label: 'TIPO DE OPERACIÓN',
                    select: ['EXPORTACION', 'IMPORTACION', 'NACIONAL']
                },
                { label: 'NOMBRE DEL CLIENTE' },
            ]
    },
    {
        ['REGISTRO DETALLES DE LA CARGA']:
            [
                { label: 'DESCRIPCION' },
                {
                    label: 'EMBALAJE',
                    select: ['CARGA SUELTA', 'CAJAS DE MADERA', 'CAJAS DE CARTON', 'CONTENEDORIZADA']
                },
                {
                    label: 'TIPO DE CARGA',
                    select: ['GENERAL', 'PELIGROSA', 'REFRIGERADA', 'PERECEDERA', 'PROYECTO']

                },
                { label: 'CANTIDAD' },
                { label: 'PESO BRUTO TOTAL' },
                { label: 'VOLUMEN TOTAL' },
            ]
    },
    {
        ['REGISTRO DE PROVEEDORES']:
            [
                { label: 'PROVEEDOR DE TRANSPORTE' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR DE TRANSPORTE 2' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR DE TRANSPORTE 3' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR AGENTE DE CARGA' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR AGENCIAMIENTO PORTUARIO' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR VGM' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR DESPACHO ADUANERO' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR CARGUIO / DESCARGUIO CONSOLIDADO / DESCONSOLIDADO' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR EMBALAJE' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR ALMACENAJE' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR DESCONSOLIDACION / APERTURA' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR DE SEGURO' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR DE SERVICIOS PORTUARIOS' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR SURVEYOR' },
                { label: 'COSTO USD' },
                { label: 'PROVEEDOR AUTORIZACIONES O CERTIFICACIONES' },
                { label: 'COSTO USD' },
                { label: 'COSTO TOTAL PROVEEDORES USD' },
                { label: 'COSTO TOTAL VENTA' },
                { label: 'GANANCIA LG USD' },
            ]
    },
    {
        ['REGISTRO DE DOCUMENTACION CLIENTE']:
            [
                { label: 'NIT' },
                { label: 'MATRICULA DE COMERCIO' },
                { label: 'PODER REPRESENTANTE LEGAL' },
                { label: 'CEDULA DE IDENTIDAD' },
                { label: 'FACTURA' },
                { label: 'LISTA DE EMPAQUE' },
                { label: 'POLIZA DE SEGURO' },
                { label: 'CERTIFICADO DE ORIGEN' },
                { label: 'DAM' },
                { label: 'DIM' },
                { label: 'DEX' },
                { label: 'AUTORIZACION PREVIA' },
                { label: 'CERTIFICACIONES' },
                { label: 'BILL OF LADING' },
                { label: 'AIRWAY BILL' },
            ]
    },
    {
        ['REGISTRO DOCUMENTACION PROVEEDOR']:
            [
                { label: 'NIT' },
                { label: 'MATRICULA DE COMERCIO' },
                { label: 'CEDULA DE IDENTIDAD' },
                { label: 'CONTRATO' },
                { label: 'BILL OF LADING' },
                { label: 'AIRWAY BILL' },
                { label: 'CRT' },
                { label: 'MANIFIESTO NACIONAL' },
                { label: 'MIC' },
                { label: 'DIM' },
                { label: 'DAM' },
                { label: 'DEX' },
                { label: 'POLIZA DE SEGURO' },
                { label: 'NOTA DE DEBITO / COBRANZA' },
                { label: 'FACTURA' },
                { label: 'NOTA DE TRABAJO' },
                { label: 'INFORME DE SERVICIO' },
                { label: 'PLANILLA DE DESPACHO PORTUARIO' },
                { label: 'PLANILLA DE GASTOS PORTUARIOS' },
            ]
    },
    {
        ['REGISTRO ESTADO DE LA CARGA']:
            [
                { label: 'CODIGO DE SEGUIMIENTO DEL CLIENTE' },
                { label: 'INSTRUCCIONES DE EMBARQUE' },
                { label: 'BL' }, // AIRWAY BILL // NUMERO DE SEGUIMIENTO
                { label: 'ORIGEN' },
                { label: 'DESTINO' },
                { label: 'FECHA DE RECOJO / LLEGADA' },
                { label: 'UBICACIÓN ACTUAL' },
                { label: 'ESTADO ACTUAL DEL EMBARQUE' },
                { label: 'FECHA ESTIMADA DE ENTREGA' },
                { label: 'OBSERVACIONES' },
                { label: 'FECHA DE ENTREGA' },
            ]
    },
    {
        ['REGISTRO DE FACTURACION']:
            [// COBRO
                { label: 'FACTURACION LG' },
                { label: 'NOTA DE COBRANZA' },
                { label: 'COBRO A CLIENTE' },
                { label: 'FECHA DE PAGO' },
            ]
    },
    {
        ['REGISTRO DE PAGO A PROVEEDORES']:
            [
                { label: 'PAGO PROVEEDOR' },
                { label: 'FECHA DE PAGO' },
            ]
    }
]