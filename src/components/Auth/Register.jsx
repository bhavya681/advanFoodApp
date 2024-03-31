import React, { useState } from "react";
import {toast} from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Successfully Created User");
        navigate("/login");
      } else {
        toast.error("Error while signup");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <section className="h-screen px-50 ">
      <div className="container h-full px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 ml-[4rem]">
            <img
              src="https://img.freepik.com/premium-photo/image-delivery-man-with-motorbike_747552-27261.jpg?w=740"
              className="w-full transition-all ease-linear cursor-pointer hover:animate-bounce"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            <h1 className="text-3xl font-bold font-mono mb-5 p-2">Register</h1>
            <form>
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="text"
                  style={{ border: "1px solid black" }}
                  className="rounded-lg peer block min-h-[auto] w-full  border px-3 py-[0.32rem] placeholder:text-black
                  text-black "
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter Name"
                />
              </div>
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
              <button
                onClick={() => {
                  handleRegister();
                }}
                className="bg-blue-600 w-full text-xl font-bold font-mono text-white p-3 rounded-lg shadow-lg hover:bg-blue-900"
              >
                Register
              </button>
              <Link to="/login">
                <button className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-lg capitalize leading-normal text-black font-mono font-bold shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600">
                  <span className="text-lg text-blue-700 font-bold font-mono ">
                    Already have account?
                  </span>{" "}
                  Sign In
                </button>
              </Link>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500 text-black">
                <p className="mx-4 mb-0 text-center font-semibold text-black">
                  OR
                </p>
              </div>
              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                style={{ backgroundColor: "#3b5998" }}
                href="https://facebook.com"
                role="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Continue with Facebook
              </a>
              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                style={{ backgroundColor: "#55acee" }}
                href="https://twitter.com"
                role="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Continue with X
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
