import { Outlet } from "react-router-dom";
import Footer from "../components/public/Footer.jsx";
import PublicNavbar from "../components/public/PublicNavbar.jsx";

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface">
      <PublicNavbar />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}