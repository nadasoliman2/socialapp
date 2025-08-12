import { useContext, useState } from "react";
import { ThemeContext } from "../context/theme.context";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { auth } from "../context/auth.login";

export default function Navbar() {
  const router = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLogin, setLogin, userData } = useContext(auth);
  const [isOpen, setIsOpen] = useState(false);

  function logOut() {
    setLogin(null);
    localStorage.removeItem("token");
    router("/");
  }

  return (
    <nav
      className={`${theme} bg-white border-gray-200 dark:bg-gray-900 w-full fixed top-0 left-0 z-50`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>

        {/* زرار القائمة للموبايل */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* القائمة */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {isLogin ? (
              <>
                <li>
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" onClick={logOut} className="nav-link">
                    LogOut
                  </NavLink>
                </li>
                <li>
                  <Link
                    to={`/profile/${userData?._id}`}
                    className="flex items-center gap-2"
                  >
                    <img
                      src={userData?.photo}
                      className="w-6 h-6 rounded-full"
                      alt="User"
                    />
                    <span>{userData?.name}</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/" className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </li>
              </>
            )}

            {/* زرار تغيير الثيم */}
            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  onChange={toggleTheme}
                  type="checkbox"
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
