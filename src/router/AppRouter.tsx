import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import TodayTasks from "../pages/Dashboard/TodayTasks";
import UpcomingTasks from "../pages/Dashboard/UpcomingTasks";
import LandingPage from "../pages/LandingPage";
import Profile from "../pages/Dashboard/Profile";
import { AuthenticatedPages, UnAuthenticatedPages } from "./routes";
import Notifications from "../pages/Dashboard/Notifications";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={UnAuthenticatedPages.LandingPage}
        element={<LandingPage />}
      />
      <Route path={UnAuthenticatedPages.SignUp} element={<SignUp />} />
      <Route path={UnAuthenticatedPages.SignIn} element={<SignIn />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route
          index
          element={<Navigate to={AuthenticatedPages.dashboard} replace />}
        />

        <Route
          path={AuthenticatedPages.dashboard}
          element={<DashboardHome />}
        />
        <Route path={AuthenticatedPages.TodayTasks} element={<TodayTasks />} />
        <Route
          path={AuthenticatedPages.UpcomingTasks}
          element={<UpcomingTasks />}
        />
        <Route path={AuthenticatedPages.Profile} element={<Profile />} />
        <Route
          path={AuthenticatedPages.Notifications}
          element={<Notifications />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
