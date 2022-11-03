import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAw6RKyfUP_HcBYUo2wgFQa7QgPjv89F5g',
  authDomain: 'phone-login-c1ab2.firebaseapp.com',
  projectId: 'phone-login-c1ab2',
  storageBucket: 'phone-login-c1ab2.appspot.com',
  messagingSenderId: '521528539933',
  appId: '1:521528539933:web:29a32c57b410edb780bff4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
