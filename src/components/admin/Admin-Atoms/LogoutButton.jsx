export default function LogoutButton({ signOut }) {
  return (
    <div className="text-center">
      <button
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
        className="px-6 py-3 font-medium text-white transition bg-red-600 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
