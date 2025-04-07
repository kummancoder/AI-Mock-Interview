import { db } from "@/config/firebase.config";
import { LoaderPage } from "@/routes/loader-page";
import { User } from "@/types";
import { useAuth, useUser } from "@clerk/clerk-react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthHandler = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  // const { isSignedIn, isLoaded: authLoaded } = useAuth();
  // const { user, isLoaded: userLoaded } = useUser();


  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

 useEffect(() => {
   const storeUserData = async () => {

      if (isSignedIn && user) {
       setLoading(true);
       try {
         const userSnap = await getDoc(doc(db, "users", user.id));
         console.log("Document exists?", userSnap.exists());

         if (!userSnap.exists()) {
           const userData: User = {
             id: user.id,
             name: user.fullName || user.firstName || "Anonymous",
             email: user.primaryEmailAddress?.emailAddress || "N/A",
             imageUrl: user.imageUrl,
             createdAt: serverTimestamp(),
             updateAt: serverTimestamp(),
           };

          //  console.log("Creating user doc:", userData);
           await setDoc(doc(db, "users", user.id), userData);
           console.log("User document created.");
         } 
        //  else {
        //    console.log("User already exists, skipping creation.");
        //  }
       } catch (error) {
         console.log("Error on storing the user data:", error);
       } finally {
         setLoading(false);
       }
     } else {
       console.log("Waiting for auth to load or user not signed in.");
     }
   };

   storeUserData();
 }, [isSignedIn, user, pathname, navigate]);



  if (loading) {
    return <LoaderPage />;
  }

  return null;
};

export default AuthHandler;
