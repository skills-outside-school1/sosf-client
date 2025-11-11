import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //Show unauthorized error from URL
  useEffect(() => {
    if (router.query?.error === "NotAuthorized") {
      toast.error(
        "This account is not authorized to access the admin dashboard."
      );
      //Clears error from URL
      router.replace("/auth/login", undefined, { shallow: true }); 
    }
  }, [router]);

  // Redirect if already authenticated
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/admin");
    }
  }, [status, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.info("Authenticating...");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/admin",
    });

    if (result?.ok) {
      toast.dismiss();
      toast.success("Login Successful! Redirecting...");
      setTimeout(() => {
        router.push("/admin");
      }, 1500);
    } else {
      toast.dismiss();
      toast.error(result?.error || "Invalid email or password");
      setLoading(false);
    }
  };

  if (status === "loading") return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-center">Admin Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white bg-green-800 rounded font-medium transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <span className="w-5 h-5 border-2 rounded-full animate-spin border-t-transparent"></span>
                <span>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="mt-6 space-y-2">
          <button
            onClick={() => signIn("google", { callbackUrl: "/admin" })}
            className="w-full py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Login with Google
          </button>
          <button
            onClick={() => signIn("github", { callbackUrl: "/admin" })}
            className="w-full py-2 text-white bg-gray-800 rounded hover:bg-gray-900"
          >
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
