import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/client-app";

export const signInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try{
            await  signInWithPopup(auth, provider)
      }catch(err){
            console.log(error.message)
      }
      // signInWithPopup(auth, provider)
      //       .then()
      //       .catch((error) => {
      //             console.log(error.message)
      //       });
}
