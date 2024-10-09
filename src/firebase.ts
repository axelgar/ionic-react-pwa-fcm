import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export { messaging };
