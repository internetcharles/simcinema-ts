// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  User,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { CompanyInfoState } from "./Redux/Reducers/companyInfoSlice";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7lukMRtue8hQf-B_ds5X6gXFw_fgcXnE",
  authDomain: "simcinema-9186e.firebaseapp.com",
  projectId: "simcinema-9186e",
  storageBucket: "simcinema-9186e.appspot.com",
  messagingSenderId: "613744411509",
  appId: "1:613744411509:web:6e99812a1c141d35ea893c",
  measurementId: "G-91E1B7PVZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async (): Promise<any> => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<any> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
): Promise<any> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email: string): Promise<any> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const logout = async (): Promise<any> => {
  try {
    await signOut(auth);
  } catch (err: any) {
    console.log(err);
    alert(err.message);
  }
};

const getCompany = async (user: User): Promise<any> => {
  try {
    const docRef = doc(db, `${user.uid}`, "company");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().companyInfo as CompanyInfoState;
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

const saveCompany = async (
  user: User,
  companyInfo: CompanyInfoState,
): Promise<any> => {
  try {
    if (user) {
      await setDoc(doc(db, user.uid, "company"), {
        companyInfo,
      });
    }
  } catch (error: any) {
    console.log(error.message);
  }
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  saveCompany,
  getCompany,
};
