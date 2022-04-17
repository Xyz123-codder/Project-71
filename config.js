import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAnY4SCturvZ8JrQZcWJKsSwcZ4Tf79C94",
  authDomain: "complaint-forum-cefab.firebaseapp.com",
  projectId: "complaint-forum-cefab",
  storageBucket: "complaint-forum-cefab.appspot.com",
  messagingSenderId: "792419229624",
  appId: "1:792419229624:web:287f49bb56a264c89af94d"

 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

