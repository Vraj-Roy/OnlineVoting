import { useState } from "react";
import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

require("dotenv").config();

export default function Login({ resetKey, setProgress }) {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onChange = (e) => {
    if (e.target.name == "username") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const onsubmit = async (e) => {
    // console.log(process.env.URL_PATH)
    e.preventDefault();
    setLoading(true);
    const data = { username, password };
    let res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    if (response.success) {
      setProgress(50);
      setProgress(100);
      resetKey();
      setLoading(false);
      localStorage.setItem("token", response.token);
      router.push("/");
    } else {
      setLoading(false);
      toast.error("Wrong Credentials");
    }
  };
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <div
          className={`main-bg w-full h-[90vh] overflow-hidden flex  items-center justify-cente`}
        >
          <div className="w-full md:w-1/3   rounded-lg shadow-xl shadow-gray-300 m-auto">
            <div className="flex font-bold justify-center mt-6">
              <div className="text-4xl my-5 text-black">Login</div>
            </div>
            {/* <h2 className="text-3xl text-center text-blue- mb-4">Login</h2> */}
            <div className="px-12 pb-10">
              <div className="w-full mb-2">
                <div className="flex items-center">
                  <i className=" fill-current text-gray-400 text-xs z-10 fas fa-user" />
                  <input
                    onChange={onChange}
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    className={
                      "w-full border rounded px-4 py-2   focus:outline-blue-500 "
                    }
                  />
                </div>
              </div>
              <div className="w-full mb-3 ">
                <div className="flex items-center">
                  <i className=" fill-current text-gray-400 text-xs z-10 fas fa-lock" />
                  <input
                    onChange={onChange}
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    className={
                      "w-full border rounded px-4 py-2   focus:outline-blue-50 "
                    }
                  />
                </div>
              </div>

              <button
                onClick={onsubmit}
                type="submit"
                className="w-full py-2 mb-5  rounded-md bg-blue-600 text-gray-100  focus:outline-none"
              >
                Login
              </button>
              <div className="text-center my-1 -mt-3">Or</div>
              <button
                onClick={() => {
                  router.push("./signup");
                }}
                type="submit"
                className="w-full py-2 mb-5  rounded-md bg-blue-600 text-gray-100  focus:outline-none"
                name="sign-up"
              >
                Sign up
              </button>

              <div className="h-16 w-16  w-fit m-auto mt-2">
                {loading && <img src="/loading.svg" className="h-16 w-16 " />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
