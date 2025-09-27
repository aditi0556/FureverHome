import { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useAuth } from "./AuthContext";
export default function Navbar() {
  const navigate=useNavigate();
  const [state, setState] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  async function handleLogOut() {
    try {
      const res = await axios.get("/v1/users/logout");
      setState(false);
      setIsAuthenticated(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

   useEffect(() => {
     const checkauth = async () => {
       try {
         const res = await axios.get("/v1/users/checkauth", {
           withCredentials: true,
         });
         console.log(res);
         setState(() => res.data);
       } catch (err) {
         console.log(err);
       }
     };
     checkauth();
   }, []);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
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
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <h1
                onClick={() => navigate("/")}
                className="block py-2 px-3 hover:cursor-pointer hover:scale-110 hover:font-extrabold font-bold  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </h1>
            </li>
            <li>
              <h1
                // onClick={() => navigate("/about")}
                className="block py-2 px-3 hover:cursor-pointer hover:scale-110 hover:font-extrabold font-bold  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </h1>
            </li>
            <li>
              <h1
                // onClick={() => navigate("/adopt")}
                className="block py-2 px-3 hover:cursor-pointer hover:scale-110 hover:font-extrabold font-bold  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Adopt
              </h1>
            </li>
            <li>
              <h1
                // onClick={() => navigate("/")}
                className="block py-2 px-3 hover:cursor-pointer hover:scale-110 hover:font-extrabold font-bold  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </h1>
            </li>
            <li>
              {/* <h1
                onClick={() => navigate("/signup")}
                className="block py-2 px-3 hover:cursor-pointer hover:scale-110 hover:font-extrabold font-bold  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Login
              </h1> */}
              {!isAuthenticated && (
                <h1
                  onClick={() => navigate("/signup")}
                  className="block py-2 px-3 hover:cursor-pointer hover:scale-110 hover:font-extrabold font-bold  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </h1>
              )}
              {isAuthenticated && (
                <h1
                  onClick={ handleLogOut }
                  className="block py-2 px-3 hover:cursor-pointer hover:scale-110 hover:font-extrabold font-bold  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Log Out
                </h1>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
