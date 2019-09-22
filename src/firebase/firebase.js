import * as firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSYKiXuRHF90_4Ej5ONqnNCcprJzEkKt4",
  authDomain: "expensify-2fcd2.firebaseapp.com",
  databaseURL: "https://expensify-2fcd2.firebaseio.com",
  projectId: "expensify-2fcd2",
  storageBucket: "expensify-2fcd2.appspot.com",
  messagingSenderId: "246403672894",
  appId: "1:246403672894:web:86ac6d07d1fd1c65"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref().set({
//   name: 'anil',
//   age: 23,
//   location: {
//     city: 'Delhi',
//     country: 'India'
//   },
//   physique: {
//     weight: 65,
//     height: 5.7
//   },
//   stressLevel:6,
//   job:{
//     title:{
//       designation:'software developer',
//       salary:80
//     },
//     company:'google'
//   }
// })

// database.ref().update({
//   'location/city':'mera ghar',
// 'physique/weight':70,
// 'job/company':'amazon',
// 'job/title/designation':'network engineer'
// })
