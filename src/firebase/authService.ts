import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";
import { AuthenticatedPages } from "../router/routes";
import { NavigateFunction } from "react-router-dom";
import toast from "react-hot-toast";

type UserParams = {
  email: string;
  password: string;
  name?: string;
  username?: string;
  dispatch?: Function | undefined;
  setIsLoading?: (boolean: boolean) => void;
  navigate: any;
};

export const SignUpWithEmailAndPassword = async ({
  email,
  password,
  name,
  username,
  setIsLoading,
  navigate,
}: UserParams) => {
  if (setIsLoading) setIsLoading(true);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      name: name,
      username: username,
      createdAt: new Date(),
    });

    console.log("User Signed Up and Saved to Firestore:", user);
    navigate("/dashboard/" + AuthenticatedPages.dashboard);
    if (setIsLoading) setIsLoading(false);
    toast.success("User created successfully");
  } catch (error: any) {
    console.error("Error signing in:", error.code, error.message);
    console.error("Error signing in:", error.code);
    toast.error(error.code || "An error occurred. Please try again.");
    if (setIsLoading) setIsLoading(false);
  }
};

//sigin

export const SignInWithEmailandPassword = async ({
  email,
  password,
  setIsLoading,
  navigate,
}: UserParams) => {
  if (setIsLoading) setIsLoading(true);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    console.log("User signed in:", user);
    navigate("/dashboard/" + AuthenticatedPages.dashboard);

    if (setIsLoading) setIsLoading(false);
    toast.success("User Sign in successfully");
  } catch (error: any) {
    console.error("Error signing in:", error.code, error.message);
    console.error("Error signing in:", error.code);
    toast.error(error.code || "An error occurred. Please try again.");
    if (setIsLoading) setIsLoading(false);
  }
};

//signout

export const handleLogout = async (navigate: NavigateFunction) => {
  try {
    await signOut(auth);
    console.log("User has logged out");

    navigate("/signin");
    toast.success("User logout successfully ");
  } catch (error: any) {
    console.error("Error during logout:", error.code, error.message);
    toast.error(error.code);
  }
};
