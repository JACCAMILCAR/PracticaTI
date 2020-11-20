import firebase  from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyB4yPvt_2jLfG1gwoKN9i25KWsFuDJ5z98",
  authDomain: "asprajo.firebaseapp.com",
  databaseURL: "https://asprajo.firebaseio.com",
  projectId: "asprajo",
  storageBucket: "asprajo.appspot.com",
  messagingSenderId: "656309513865",
  appId: "1:656309513865:web:4ebbaba18de157548e6058"
};

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);