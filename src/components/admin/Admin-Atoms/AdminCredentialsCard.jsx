export default function AdminCredentialsCard({ session }) {
  return (
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
  );
}
