import { API_KEY, AUTH_DOMAIN } from "@env"; // Don't worry about this env error!
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp, getApp, getApps } from "@firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
  Auth,
} from "@firebase/auth";

const firebaseConfig = {
  apiKey: API_KEY || "Mock-Key",
  authDomain: AUTH_DOMAIN,
};

let app;
let auth: Auth;

// Checks if auth and app have already been initilized as Firebase will throw an error if we try to initialize twice!
if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (error) {
    console.log("Error initializing app: " + error);
  }
} else {
  app = getApp();
  auth = getAuth();
}

export { app, auth };
