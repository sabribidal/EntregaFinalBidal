import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCKCCz5AVuwCp4KLfOUUl_IZUw_k7ttIzI",
    authDomain: "ecommerse-1ab68.firebaseapp.com",
    projectId: "ecommerse-1ab68",
    storageBucket: "ecommerse-1ab68.appspot.com",
    messagingSenderId: "520794618139",
    appId: "1:520794618139:web:c79615c8381b2dfe1afbbe"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)