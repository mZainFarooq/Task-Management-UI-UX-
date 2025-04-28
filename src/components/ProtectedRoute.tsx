import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Loader from "./Loader"; // Assuming Loader is a loading spinner or animation
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const loading = useSelector((state: RootState) => state.auth.loading);

  // If still loading, show loader
  if (loading) {
    return <Loader />;
  }

  // If no user (not authenticated), redirect to sign-in
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // If user exists, render children (protected route)
  return <>{children}</>;
};

export default ProtectedRoute;
