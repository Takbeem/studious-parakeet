import firebase from 'firebase';
require('@firebase/firestore')
const firebaseConfig = {

  apiKey: "AIzaSyDjvoWNO8dKFtpY_Taf83nAC3008QXnkPk",

  authDomain: "e-library-915a2.firebaseapp.com",

  projectId: "e-library-915a2",

  storageBucket: "e-library-915a2.appspot.com",

  messagingSenderId: "425506924159",

  appId: "1:425506924159:web:196d2ff426bd5f5b3f014a"

};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore()