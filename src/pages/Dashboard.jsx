import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/core/Dashboard/Sidebar";

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading } = useSelector((state) => state.auth);

  // Show a loading spinner if profile or auth data is loading
  if (profileLoading || authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex items-center space-x-2">
          <div className="spinner" /> {/* Ensure you have a spinner component or style */}
          <span className="text-gray-500">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-100">
        <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
      {/* Sidebar */}
      <Sidebar className="flex-shrink-0 w-64 bg-richblack-800 text-white" />
    </div>
  );
}

export default Dashboard;
