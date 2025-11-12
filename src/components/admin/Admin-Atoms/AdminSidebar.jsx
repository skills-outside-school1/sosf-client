import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Users, Settings, LogOut } from "lucide-react";

export default function AdminSidebar() {
  const router = useRouter();
  
  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Ambassadors", href: "/admin/ambassadors", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];
  
  return (
    <aside className="w-64 min-h-screen p-6 text-white bg-gray-900">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">SOSF Admin</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = router.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
    </aside>
  );
}