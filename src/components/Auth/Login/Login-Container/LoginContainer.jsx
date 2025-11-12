import BrandingSection from "../Login-Atoms/BrandingSection";
import LoginForm from "../Login-Atoms/LoginForm";

export default function LoginContainer(props) {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 pb-10 overflow-hidden pt-28 xl:px-0 bg-gray-50">
      <div className="w-full max-w-5xl overflow-hidden bg-white shadow-2xl rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <LoginForm {...props} />
          <BrandingSection />
        </div>
      </div>
    </div>
  );
}
