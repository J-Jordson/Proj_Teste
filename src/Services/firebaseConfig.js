
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCia8mptwVMPvjG2J5Vbng5eZ9zlw3ES-8",
  authDomain: "aqua-sense-7b597.firebaseapp.com",
  projectId: "aqua-sense-7b597",
  storageBucket: "aqua-sense-7b597.appspot.com",
  messagingSenderId: "254897782749",
  appId: "1:254897782749:web:ea71aeb01ae4fd26f30034"
};

// Initialize Firebase

if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;