import React from "react";
import { Bell, User } from "lucide-react";

export default function AdminNavbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <h2 className="text-xl font-semibold">Admin Dashboard</h2>
      
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <User size={20} />
        </button>
      </div>
    </nav>
  );
}