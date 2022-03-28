import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCkGM5rR46yIVLT_1fLxOt33FYc3-BvRNc',
  authDomain: 'todolistvue-fa285.firebaseapp.com',
  projectId: 'todolistvue-fa285',
  storageBucket: 'todolistvue-fa285.appspot.com',
  messagingSenderId: '634185232553',
  appId: '1:634185232553:web:a0907b408a5133940639b8'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
