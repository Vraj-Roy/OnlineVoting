import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// require("dotenv").config({ path: "../" });

export default function Signup({ resetKey, setProgress }) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    e.preventDefault();
    if (e.target.name == "username") {
      setUsername(e.target.value);
    }
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };
  const onsubmit = async () => {
    setLoading(true);
    if (email == "" || password == "" || username == "") {
      toast.error("Please fill all the fields");
      setProgress(100);
      return;
    }
    let userData = { username, email, password };
    let res = await fetch(`/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    let response = await res.json();

    if (response.success) {
      localStorage.setItem("token", response.token);
      setProgress(100);
      router.push("/ongoing");
      setLoading(false);
      resetKey();
    } else {
      setProgress(100);
      setLoading(false);
      toast.error("user already exist");
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
              <div className="text-4xl my-5 text-black">Sign Up</div>
            </div>
            {/* <h2 className="text-3xl text-center text-blue- mb-4">Login</h2> */}
            <div className="px-12 pb-10">
              <div className="w-full mb-2">
                <div className="flex items-center">
                  <i className=" fill-current text-gray-400 text-xs z-10 fas fa-user" />
                  <input
                    onChange={onChange}
                    name="username"
                    type="username"
                    placeholder="Username"
                    value={username}
                    className={
                      "w-full border rounded px-4 py-2   focus:outline-blue-500 "
                    }
                  />
                </div>
              </div>
              <div className="w-full mb-2">
                <div className="flex items-center">
                  <i className=" fill-current text-gray-400 text-xs z-10 fas fa-user" />
                  <input
                    onChange={onChange}
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    className={
                      "w-full border rounded px-4 py-2   focus:outline-blue-500 "
                    }
                  />
                </div>
              </div>

              <div className="w-full mb-2">
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
                Sign up
              </button>

              <div className="h-10 w-10 m-auto mt-2">
                {loading && <img src="/loading.svg" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
