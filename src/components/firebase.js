// import {firebase,initializeApp} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { firebase,initializeApp } from 'firebase/app';
// import {getAuth} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import {getAuth} from "firebase/auth";

// const app = initializeApp({
//   apiKey: "AIzaSyDbpOMH-JNM5QUzy2xkwOMkgq_vOHa6iWI",
//   authDomain: "warehouse-d9de2.firebaseapp.com",
//   databaseURL: "https://warehouse-d9de2-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "warehouse-d9de2",
//   storageBucket: "warehouse-d9de2.appspot.com",
//   messagingSenderId: "121694171861",
//   appId: "1:121694171861:web:efcf53f642fb9bf4de285c"
// })

const app = initializeApp({
  apiKey: "AIzaSyAn7civSw_Fg2HOFwwHl6f4AG8pQ0cHwxk",
  authDomain: "warehouse-management-sys-9a34b.firebaseapp.com",
  databaseURL: "https://warehouse-management-sys-9a34b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "warehouse-management-sys-9a34b",
  storageBucket: "warehouse-management-sys-9a34b.appspot.com",
  messagingSenderId: "616576331200",
  appId: "1:616576331200:web:1a7922251921a35bf06c25"
})


export const auth = getAuth(app);
export default app
