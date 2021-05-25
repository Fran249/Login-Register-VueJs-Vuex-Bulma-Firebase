    import firebase from 'firebase'
    // import firestore from 'firebase/firestore'



  const firebaseConfig = {
    apiKey: "AIzaSyAKMrWLz7QqvmbLD45WuE4s9U7mGsvr0yw",
    authDomain: "login-5092c.firebaseapp.com",
    projectId: "login-5092c",
    storageBucket: "login-5092c.appspot.com",
    messagingSenderId: "92060602125",
    appId: "1:92060602125:web:a7d2df6622cc4601582a44"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true});

  export default firebaseApp.firestore();
