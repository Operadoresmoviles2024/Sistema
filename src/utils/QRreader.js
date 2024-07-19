import qrcodeParser from "qrcode-parser";

function QRreaderUtils(e, setFilterQR) {
console.log(e.target.files[0])
 qrcodeParser(e.target.files[0]).then((res) => {
    console.log(res)
       setFilterQR(res);
    });

}

export { QRreaderUtils }