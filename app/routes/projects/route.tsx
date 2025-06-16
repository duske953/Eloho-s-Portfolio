import { Outlet } from '@remix-run/react';
import Navbar from '~/components/Navbar';

export default function page() {
  return (
    <>
      <Navbar className="fixed left-0 right-0 top-0 w-full z-[100] bg-slate-900" />

      <main className="section-container">
        <Outlet />
      </main>
    </>
  );
}
