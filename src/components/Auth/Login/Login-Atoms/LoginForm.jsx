import InputField from "./InputField";
import PasswordField from "./PasswordField";
import Divider from "./Divider";
import OAuthButtons from "./OAuthButtons";

export default function LoginForm({
  email,
  password,
  loading,
  showPassword,
  setEmail,
  setPassword,
  setShowPassword,
  handleLogin,
  handleGoogleLogin,
  handleGithubLogin,
}) {
  return (
    <div className="flex flex-col justify-center px-8 py-12 md:px-16">
      <div className="w-full max-w-md mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-900 font-mont">
          Admin
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <InputField
            label="Username"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter username"
            disabled={loading}
          />

          <PasswordField
            label="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showPassword={showPassword}
            togglePassword={() => setShowPassword(!showPassword)}
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 text-white font-medium rounded-lg transition-all duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-teal-500 hover:bg-teal-600 hover:shadow-lg"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <span className="w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent"></span>
                <span>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <Divider />
        <OAuthButtons
          loading={loading}
          handleGoogleLogin={handleGoogleLogin}
          handleGithubLogin={handleGithubLogin}
        />

        <p className="mt-8 text-xs text-center text-gray-500 font-inter">
          2025 SOSF Admin Console. All rights reserved
        </p>
      </div>
    </div>
  );
}
