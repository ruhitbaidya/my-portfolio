import { useForm } from "react-hook-form";
import { FaSignInAlt, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-400/10 rounded-full filter blur-3xl animate-blob"></div>
      </div>

      <div className="w-full max-w-md">
        {/* Return Home Button */}
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 mb-6 transition-colors"
        >
          <FaHome className="w-5 h-5" />
          <span>Return Home</span>
        </Link>

        {/* Login Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400/30 transition-all duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <h2 className="text-xl font-medium tracking-wider text-cyan-400">
              LOGIN
            </h2>
            <div className="text-slate-400 text-sm">
              <Typewriter
                words={["Welcome Back", "Secure Access", "Your Account"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">
            Sign In to Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Account
            </span>
          </h1>
          <p className="text-slate-400 mb-8">
            Enter your credentials to access your dashboard
          </p>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email Address *
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                className={`w-full px-4 py-3 bg-slate-800 border ${
                  errors.email ? "border-red-500" : "border-slate-700"
                } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Password *
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                id="password"
                className={`w-full px-4 py-3 bg-slate-800 border ${
                  errors.password ? "border-red-500" : "border-slate-700"
                } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-slate-700 rounded bg-slate-800"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-slate-300"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-cyan-400 hover:text-cyan-300"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaSignInAlt className="w-5 h-5" />
              Sign In
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-800 text-slate-400">
                  {`Don't have an account?`}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/register"
                className="w-full flex justify-center py-2 px-4 border border-slate-700 rounded-lg shadow-sm text-sm font-medium text-slate-300 hover:bg-slate-700/50 transition-colors"
              >
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
