import { useDispatch } from "react-redux";
import AppRouter from "./router/AppRouter";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { clearUser, setLoading, setUser } from "./features/auth/authSlice";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig"; // Adjust this import based on your Firebase configuration

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      dispatch(setLoading(true));
      console.log(currentUser);
      if (currentUser) {
        // Fetch user data from Firestore using the uid
        const userDocRef = doc(db, "users", currentUser.uid);
        try {
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            // Data found, set it to Redux store
            const userData = userDocSnap.data();
            dispatch(
              setUser({
                uid: currentUser.uid,
                email: currentUser.email,
                name: userData.name || "",
                username: userData.username || "",
                createdAt:
                  userData.createdAt?.toDate().toISOString() ||
                  new Date().toISOString(),
              })
            );
          }
        } catch (error) {
          console.error("Error fetching user data from Firestore:", error);
        }
      } else {
        console.log("ok");

        dispatch(clearUser());
      }
      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
