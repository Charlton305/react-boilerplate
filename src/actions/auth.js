import { signInWithPopup, signOut } from "firebase/auth";
import { provider, auth } from "../firebase/firebase";

export const startLogin = async () => {
  provider.setCustomParameters({ prompt: 'select_account' });
  return await signInWithPopup(auth, provider)
}

export const startLogout = async () => {
  return signOut(auth)
}