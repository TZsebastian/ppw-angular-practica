import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAog3hG9V68wPyf8aKb3D7DTk6L5xWCazU",
  authDomain: "ppw-practica-c2b17.firebaseapp.com",
  projectId: "ppw-practica-c2b17",
  storageBucket: "ppw-practica-c2b17.firebasestorage.app",
  messagingSenderId: "612256533147",
  appId: "1:612256533147:web:eea13bf9e2a2e0fa01543e",
  measurementId: "G-B4T59WVJ7D"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // Auth: registra el servicio de autenticacion en el inyector global.
    provideAuth(() => getAuth()),
    // Firestore: registra la base de datos en el inyector global.
    provideFirestore(() => getFirestore()),
  ],
};
