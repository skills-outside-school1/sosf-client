import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import MainLayout from "@/components/layouts/MainLayout";
import LoginContainer from "@/components/Auth/Login/Login-Container/LoginContainer";
import Head from "next/head";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Show unauthorized error
  useEffect(() => {
    if (router.query?.error === "NotAuthorized") {
      toast.error(
        "This account is not authorized to access the admin dashboard."
      );
      router.replace("/auth/login", undefined, { shallow: true });
    }
  }, [router]);

  // Redirect if already authenticated
  useEffect(() => {
    if (status === "authenticated") router.replace("/admin");
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

    toast.dismiss();
    if (result?.ok) {
      toast.success("Login Successful! Redirecting...");
      setTimeout(() => router.push("/admin"), 1500);
    } else {
      toast.error(result?.error || "Invalid email or password");
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    toast.info("Redirecting to Google...");
    signIn("google", { callbackUrl: "/admin" });
  };

  const handleGithubLogin = () => {
    toast.info("Redirecting to GitHub...");
    signIn("github", { callbackUrl: "/admin" });
  };

  if (status === "loading") return null;

  return (
    <>
      <Head>
        {/* in page seo for the history page  */}
        <title>Our Work | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <LoginContainer
        email={email}
        password={password}
        loading={loading}
        showPassword={showPassword}
        setEmail={setEmail}
        setPassword={setPassword}
        setShowPassword={setShowPassword}
        handleLogin={handleLogin}
        handleGoogleLogin={handleGoogleLogin}
        handleGithubLogin={handleGithubLogin}
      />
    </>
  );
};

LoginPage.getLayout = function getLayout(page) {
  return <MainLayout showFooter={false}>{page}</MainLayout>;
};

export default LoginPage;
