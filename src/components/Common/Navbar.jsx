import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";

import logo from "../../assets/Logo/learnsphere.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropdown";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCoursesMenuOpen, setIsCoursesMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data?.data || []);
      } catch (error) {
        console.error("Could not fetch Categories.", error);
        setSubLinks([]);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div
      className="flex h-14 items-center justify-center border-b-[1px] border-b-gray-300 
        font-bold bg-blue-100
       transition-all duration-200"
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-600">
            {NavbarLinks.map((link, index) => (
              <li key={index} className="group relative">
                {link.title === "Courses" ? (
                  <>
                    <div
                      className={`flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-richblue-25"
                          : "text-gray-300"
                      }`}
                      onClick={() => setIsCoursesMenuOpen(!isCoursesMenuOpen)}
                    >
                      <p>{link.title}</p>
                    </div>

                    {isCoursesMenuOpen && (
                      <div
                        className="absolute left-[50%] top-[100%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-2 flex-col rounded-xl bg-richblack-600 p-4 text-white lg:w-[300px] shadow-lg"
                      >
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-gray-50"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks.length > 0 ? (
                          subLinks
                            .filter((subLink) => subLink?.courses?.length > 0)
                            .map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-gray-100"
                                key={i}
                                onClick={() => setIsCoursesMenuOpen(false)}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-richblue-25"
                          : "text-gray-300"
                      } transition-colors`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
                <div className="absolute left-0 bottom-[-4px] h-[2px] w-full scale-x-0 bg-richblue-25 transition-transform duration-200 group-hover:scale-x-100"></div>
              </li>
            ))}
          </ul>
        </nav>

        {/* User actions: Login, Signup, Dashboard, Cart */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-pure-greys-400 hover:text-yellow-500 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-red-600 text-center text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null ? (
            <>
              <Link to="/login">
                <button className="bg-caribbeangreen-300 px-[18px] py-[4px] text-white hover:bg-blue-600 transition-colors rounded-md shadow-md">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-caribbeangreen-300 px-[18px] py-[4px] text-white hover:bg-blue-600 transition-colors rounded-md shadow-md">
                  Sign up
                </button>
              </Link>
            </>
          ) : (
            <ProfileDropdown />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="mr-4 md:hidden hover:text-yellow-500 transition-colors">
          <AiOutlineMenu fontSize={20} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
