import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className='container py-2 min-h-[80svh] flex items-center justify-center'>
        <Outlet />
      </main>
    </>
  );
}
