import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/auth/login");
    } else if (status === "authenticated" && session?.user?.role !== "admin") {
      router.replace("/");
    }
  }, [status, session, router]);

  if (status === "loading" || !session) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-medium">
        Loading admin dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 pt-24 bg-gray-50">
      <div className="max-w-3xl p-8 mx-auto bg-white border border-gray-200 shadow-lg rounded-xl">
        {/* Header */}
        <h1 className="mb-2 text-3xl font-bold text-center text-gray-800">
          Admin Dashboard
        </h1>
        <p className="mb-8 text-center text-gray-500">
          Access granted to administrators only
        </p>

        {/* User Credentials Card */}
        <div className="p-6 mb-8 bg-gray-100 border border-gray-300 rounded-lg">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Admin Credentials
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Name:</span> {session?.user?.name}
            </li>
            <li>
              <span className="font-medium">Email:</span> {session?.user?.email}
            </li>
            <li>
              <span className="font-medium">Role:</span>{" "}
              <span className="font-semibold text-green-700 uppercase">
                {session?.user?.role}
              </span>
            </li>
          </ul>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            Admin Controls
          </h3>
          <p className="text-gray-600">
            You can manage users, monitor activities, and perform administrative
            operations from this dashboard.
          </p>
        </div>

        {/* Logout Button */}
        <div className="text-center">
          <button
            onClick={() => signOut({ callbackUrl: "/auth/login" })}
            className="px-6 py-3 font-medium text-white transition bg-red-600 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
