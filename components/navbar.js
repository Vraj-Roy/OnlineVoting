import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = ({ resetKey, setProgress }) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log(router.pathname);
  }, []);
  const showNav = () => {
    if (navHeight === 0) {
      setNavHeight(40);
    } else {
      setNavHeight(0);
    }
  };
  return (
    <>
      <nav className="border-gray-200 bg-gray-50   blueborder-gray-700 shadow-md w-[100%] sticky top-0 z-[50]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap  text-black">
              Online Voting System
            </span>
          </Link>

          <button
            data-collapse-toggle="navbar-solid-bg"
            onClick={showNav}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 bluetext-gray-400 bluehover:bg-gray-700 bluefocus:ring-gray-600"
            aria-controls="navbar-solid-bg"
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
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col items-center	  font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent bluebg-gray-800 md:bluebg-transparent blueborder-gray-700">
              <li>
                <div
                  onClick={() => {
                    setProgress(100), router.push("/");
                  }}
                  // className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 bluetext-white md:bluehover:text-blue-500 bluehover:bg-gray-700 bluehover:text-white md:bluehover:bg-transparent"
                  className={
                    "  select-none block py-2 px-3 md:p-0 cursor-pointer  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 bluetext-white md:bluehover:text-blue-500 bluehover:bg-gray-700 bluehover:text-white md:bluehover:bg-transparen " +
                    (router.pathname == "/"
                      ? " text-blue-700"
                      : "text-grey-900")
                  }
                >
                  Home
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    setProgress(100), router.push("/aboutus");
                  }}
                  // className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 bluetext-white md:bluehover:text-blue-500 bluehover:bg-gray-700 bluehover:text-white md:bluehover:bg-transparent"
                  className={
                    " select-none   block py-2 px-3 md:p-0 cursor-pointer   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 bluetext-white md:bluehover:text-blue-500 bluehover:bg-gray-700 bluehover:text-white md:bluehover:bg-transparen " +
                    (router.pathname == "/aboutus"
                      ? "  text-blue-700"
                      : " text-grreen-900")
                  }
                >
                  About Us
                </div>
              </li>
              {!token && (
                <>
                  <li>
                    <button
                      onClick={() => {
                        router.push("/login");
                      }}
                      type="button"
                      className="focus:outline-none text-white bg-blue-600  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-blue-900"
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        router.push("/signup");
                      }}
                      type="button"
                      className="focus:outline-none text-white bg-blue-600  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-blue-900"
                    >
                      Sign up
                    </button>
                  </li>
                </>
              )}
              {token && (
                <>
                  <li>
                    <button
                      onClick={() => {
                        localStorage.removeItem("token"),
                          resetKey(),
                          router.push("/login"),
                          setProgress(100);
                      }}
                      type="button"
                      className="focus:outline-none text-white bg-blue-600  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-blue-900"
                    >
                      Log out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div
          className={`h-${navHeight} overflow-hidden w-full justify-between px-5 ${
            navHeight > 0 ? "flex" : "hidden"
          }`}
        >
          <div
            onClick={() => {
              setProgress(100), router.push("/");
            }}
            // className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 bluetext-white md:bluehover:text-blue-500 bluehover:bg-gray-700 bluehover:text-white md:bluehover:bg-transparent"
            className={
              "   block py-2 px-3 md:p-0 cursor-pointer  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 bluetext-white md:bluehover:text-blue-500 bluehover:bg-gray-700 bluehover:text-white md:bluehover:bg-transparen " +
              (router.pathname == "/" ? " text-blue-700" : "text-grey-900")
            }
          >
            Home
          </div>
          <div
            onClick={() => {
              setProgress(100), router.push("/aboutus");
            }}
            // className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 bluetext-white md:bluehover:text-blue-500 bluehover:bg-gray-700 bluehover:text-white md:bluehover:bg-transparent"
            className={
              "   block py-2 px-3 md:p-0 cursor-pointer   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 bluetext-white md:bluehover:text-blue-500 bluehover:bg-gray-700 bluehover:text-white md:bluehover:bg-transparen " +
              (router.pathname == "/aboutus"
                ? "  text-blue-700"
                : " text-grreen-900")
            }
          >
            About Us
          </div>
          {!token && (
            <div className="flex">
              <button
                onClick={() => {
                  router.push("/login");
                }}
                type="button"
                className="focus:outline-none text-white bg-blue-600  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-blue-900"
              >
                Login
              </button>

              <button
                onClick={() => {
                  router.push("/signup");
                }}
                type="button"
                className="focus:outline-none text-white bg-blue-600  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-blue-900"
              >
                Sign up
              </button>
            </div>
          )}
          {token && (
            <div className="flex">
              <button
                onClick={() => {
                  localStorage.removeItem("token"),
                    resetKey(),
                    router.push("/login"),
                    setProgress(100);
                }}
                type="button"
                className="focus:outline-none text-white bg-blue-600  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-blue-900"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
