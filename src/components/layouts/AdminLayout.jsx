import React from "react";
import AdminNavbar from "@/components/Admin/Admin-Atoms/AdminNavbar";
import AdminSidebar from "@/components/Admin/Admin-Atoms/AdminSidebar";
import AdminFooter from "@/components/Admin/Admin-Atoms/AdminFooter";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />
      
      <div className="flex flex-col flex-1">
        {/* Admin Navbar */}
        <AdminNavbar />
        
        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
        
        {/* Admin Footer */}
        <AdminFooter />
      </div>
    </div>
  );
}