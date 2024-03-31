import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const { auth, setAuth } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", JSON.stringify(data.token));
        setAuth(data);
        console.log(localStorage.getItem("user"));
        console.log(localStorage.getItem("token"));
        console.log(data);
        console.log(auth);
        navigate("/");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-screen p-50 ">
      <div className="container h-full px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 ml-[4rem]">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZng3d21tM2RzdHdqZWM1ZmQ1bjJuZzBzOGhuNW1rano4NXllbjJzZSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/ZaF5ecBGv9np9oX3vH/giphy.gif"
              className="w-full transition-all ease-linear cursor-pointer hover:animate-bounce"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            <h1 className="text-3xl font-bold font-mono mb-5 p-2">Login</h1>
            <form>
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="text"
                  style={{ border: "1px solid black" }}
                  className="rounded-lg peer block min-h-[auto] w-full  border px-3 py-[0.32rem] placeholder:text-black
                  text-black "
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email address"
                />
              </div>

              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="password"
                  style={{ border: "1px solid black" }}
                  className="rounded-lg peer block min-h-[auto] w-full  border px-3 py-[0.32rem] placeholder:text-black
                  text-black "
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
              </div>
              <Link to="/forgot-password">
                {" "}
                <h1 className="text-2xl font-bold font-mono text-blue-500 p-3 mb-1">
                  Forgot Passowrd
                </h1>
              </Link>
              <button
                onClick={() => {
                  handleLogin();
                }}
                className="bg-blue-600 w-full text-xl font-bold font-mono text-white p-3 rounded-lg shadow-lg hover:bg-blue-900"
              >
                Login
              </button>
              <Link to="/register">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-lg capitalize leading-normal text-black font-mono font-bold shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  <span className="text-lg text-blue-700 font-bold font-mono ">
                    Not have account?
                  </span>{" "}
                  Sign Up
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
