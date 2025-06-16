import { Outlet } from '@remix-run/react';
import Navbar from '~/components/Navbar';

export default function page() {
  return (
    <>
      <header className="px-11">
        <Navbar className="fixed left-0 right-0 top-0 w-full px-8 z-[100] bg-slate-900" />
      </header>

      <main className="section-container">
        <Outlet />
      </main>
    </>
  );
}
