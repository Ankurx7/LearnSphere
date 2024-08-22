import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { NavLink, matchPath, useLocation } from "react-router-dom";

import { resetCourseState } from "../../../slices/courseSlice";

export default function SidebarLink({ link, iconName }) {
  const Icon = Icons[iconName];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <NavLink
      to={link.path}
      onClick={() => dispatch(resetCourseState())}
      className={`relative px-8 py-2 text-sm font-medium ${
        matchRoute(link.path)
          ? "bg-richblack-700 text-white"
          : "bg-transparent text-richblack-300"
      } transition-all duration-200 flex items-center gap-x-2 rounded-md hover:bg-richblack-600`}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[0.15rem] bg-red-100 ${
          matchRoute(link.path) ? "opacity-100" : "opacity-0"
        } transition-all duration-200`}
      ></span>
      <Icon className="text-lg" />
      <span>{link.name}</span>
    </NavLink>
  );
}
