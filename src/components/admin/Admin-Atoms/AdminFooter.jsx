import React from "react";

export default function AdminFooter() {
  return (
    <footer className="px-6 py-4 text-sm text-center text-gray-600 bg-white border-t">
      © {new Date().getFullYear()} Skills Outside School Foundation - Admin Panel
    </footer>
  );
}