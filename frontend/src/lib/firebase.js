import { getAnalytics, isSupported } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase web config is public by design. Use Vercel environment variables in production
// when preferred; the fallback keeps the app runnable with the Firebase project config.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyAhkpOJXa4M5Q7af2HmbZwylIPs87cn8Fc',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'opengym-b803c.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'opengym-b803c',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'opengym-b803c.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '727557352655',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:727557352655:web:19c976517c0a1a124b1bba',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-DB6YR7ZXST'
}

export const firebaseApp = initializeApp(firebaseConfig)
export const firestore = getFirestore(firebaseApp)

// Analytics is unavailable in some browsers, local environments, and native builds.
if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported) getAnalytics(firebaseApp)
  }).catch(() => {})
}

