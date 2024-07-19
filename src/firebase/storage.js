import { app } from './config'
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { writeUserData } from './utils'

// import imageCompression from 'browser-image-compression';

const storage = getStorage(app)

//--------------------------- Firebase Storage ---------------------------
async function uploadIMG(ruteDB, ruteSTG, fileName, file, db, setUserSuccess) {
    const imagesRef = ref(storage, `/${ruteSTG}/${fileName}`);





    uploadBytes(imagesRef, file).then(async (snapshot) => {
        getDownloadURL(ref(storage, snapshot.metadata.fullPath))
            .then((url) => {
                let obj = {
                    ...db,
                    url,
                }

                return writeUserData(ruteDB, obj, setUserSuccess)
            })
            .catch((error) => {
            });
    });



    // let newRuteDB = `/${ruteDB}/${fileName}`


    //     const options = {
    //     maxWidthOrHeight: 500,
    //     maxSizeMB: 0.07,
    //     alwaysKeepResolution: true,
    //     useWebWorker: true,
    //     maxIteration: 300,
    //     fileType: 'image/webp'
    // }
    // const compressedFile = file

    // if (multiple == true) {

    //     file.map(f => {
    //         uploadBytes(ref(storage, `/${ruteSTG}/${f.name}`), f).then(async (snapshot) => {
    //             getDownloadURL(ref(storage, snapshot.metadata.fullPath))
    //                 .then((url) => {
    //                     let obj = {
    //                         url,
    //                     }
    //                     return writeUserData(`${ruteDB}/${f.name.split('.')[0]}`, obj)
    //                 })
    //                 .catch((error) => {
    //                 });
    //         });
    //     })
    //     return
    // }



}

export { uploadIMG }