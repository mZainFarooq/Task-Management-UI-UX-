import { useForm, SubmitHandler } from "react-hook-form";
// import Glogo from "/assets/images/google-icon-logo.png";
import { useState } from "react";
import { VscEyeClosed } from "react-icons/vsc";
import { RxEyeOpen } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { UnAuthenticatedPages } from "../router/routes";
import Loader from "../components/Loader";
import { SignInWithEmailandPassword } from "../firebase/authService";

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data: ", data);
    SignInWithEmailandPassword({
      email: data.email,
      password: data.password,
      setIsLoading,
      navigate,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="  max-w-md sm:min-w-md mx-auto">
            <h1 className="text-2xl font-semibold">Welcome Back!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
              <div>
                <div className="relative">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    autoComplete="off"
                    id="email"
                    type="text"
                    className="peer lowercase placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-yellow-500"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must not exceed 12 characters",
                    },
                  })}
                  autoComplete="off"
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-yellow-500"
                  placeholder="Password"
                />
                <div className="absolute top-1.5 right-0">
                  {isPasswordVisible ? (
                    <RxEyeOpen
                      size={20}
                      color="gray"
                      className="cursor-pointer"
                      onClick={() => setIsPasswordVisible(false)}
                    />
                  ) : (
                    <VscEyeClosed
                      size={20}
                      color="gray"
                      className="cursor-pointer"
                      onClick={() => setIsPasswordVisible(true)}
                    />
                  )}
                </div>
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black font-semibold rounded-md px-3 py-2 w-full transition duration-200"
              >
                Sign In
              </button>
            </form>

            {/* <div className="flex justify-center mt-6">
              <button
                type="button"
                className="w-full cursor-pointer flex justify-center items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 space-x-2"
              >
                <img src={Glogo} className="w-5" alt="Google logo" />
                <span>Continue with Google</span>
              </button>
            </div> */}

            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <Link
                to={UnAuthenticatedPages.SignUp}
                className="underline text-yellow-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {isLoading && <Loader />}
    </div>
  );
};

export default SignIn;
