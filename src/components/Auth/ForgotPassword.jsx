import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <section className="h-screen p-50 ">
      <div className="container h-full px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 ml-[4rem]">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzV2cGxlb29lNnVhZjdqZWpnNXh3bGpyaG81ajdsMTU5OHIxbDRneCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/2dfbbH9EtG1Ko1kmok/giphy.gif"
              className="w-full transition-all ease-linear cursor-pointer hover:animate-bounce"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            <h1 className="text-3xl font-bold font-mono mb-5 p-2">
              Forgot Password
            </h1>
            <form>
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="text"
                  style={{ border: "1px solid black" }}
                  className="rounded-lg peer block min-h-[auto] w-full  border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="email"
                  placeholder="Enter Email address"
                />
                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
                  Email address
                </label>
              </div>

              <Link to="/login">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-lg capitalize leading-normal font-mono font-bold shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong  bg-gray-800 text-white dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Reset Passowrd
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
