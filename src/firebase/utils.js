import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getDatabase, ref, onValue, set, child, get, remove, update } from "firebase/database";
import { app } from './config'


const auth = getAuth();
const db = getDatabase(app);

function onAuth(setUserProfile, setUserData) {
  return onAuthStateChanged(auth, (user) => {
    console.log(user)
    if (user) {
      setUserProfile(user)
      getSpecificData(`Users/${user.uid}`, setUserData)
    } else {
      setUserProfile(null)
      setUserData &&  setUserData(null)
    }
  });
}

// ---------------------------Login, Sign Up and Sign In------------------------------------

function signUpWithEmail(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
function signInWithEmail(email, password, setUserSuccess) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setUserSuccess(false)
    });
}

function handleSignOut() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

// -------------------------------Firebase Realtime Database------------------------------------

const dbRef = ref(getDatabase());

function getData(setUserData) {
  onValue(ref(db, '/'), (snapshot) => {
    if (snapshot.exists()) {
      console.log(setUserData)
      setUserData && setUserData(snapshot.val());
    }
  });
}

// function getSpecificData(query, setUserSpecificData) {

//   get(child(dbRef, `${query}`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       setUserSpecificData(snapshot.val())
//     } else {
//       console.log("No data available");
//       setUserSpecificData(null)
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
// }

function getSpecificData(query, setUserSpecificData) {
  onValue(ref(db, `${query}`), (snapshot) => {
    if (snapshot.exists()) {
      setUserSpecificData(snapshot.val())
    }else {
      console.log("No data available");
      setUserSpecificData(null)
    }
  });
}


function writeUserData(rute, object, setUserSuccess) {
  update(ref(db, rute), object)
    .then(() => {
      setUserSuccess !== null ? setUserSuccess('save') : ''
    })
    .catch((err) => console.log(err))
}

async function removeData(rute, setUserSuccess, callBack) {
  await remove(ref(db, rute))
  .then(() => setUserSuccess('save'))
  .catch(() => setUserSuccess && setUserSuccess('repeat'));
  callBack && callBack()
}


export { onAuth, signUpWithEmail, signInWithEmail, handleSignOut, getData, getSpecificData, writeUserData, removeData }