import AdminHeader from "../admin-atoms/AdminHeader";
import AdminCredentialsCard from "../admin-atoms/AdminCredentialsCard";
import AdminDescription from "../admin-atoms/AdminDescription";
import LogoutButton from "../admin-atoms/LogoutButton";

export default function AdminContainer({ session, signOut }) {
  return (
    <div className="min-h-screen p-8 pt-24 bg-gray-50">
      <div className="max-w-3xl p-8 mx-auto bg-white border border-gray-200 shadow-lg rounded-xl">
        <AdminHeader />
        <AdminCredentialsCard session={session} />
        <AdminDescription />
        <LogoutButton signOut={signOut} />
      </div>
    </div>
  );
}
