import { Outlet } from "react-router-dom";
import AppSidebar from "../components/layout/AppSidebar.jsx";

export default function TeacherLayout() {
  return (
    <div className="min-h-screen bg-background text-on-surface md:flex">
      <AppSidebar role="teacher" />
      <main className="min-w-0 flex-1 overflow-x-hidden px-md py-lg md:px-lg md:py-xl">
        <Outlet />
      </main>
    </div>
  );
}