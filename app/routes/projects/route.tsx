import { Outlet } from '@remix-run/react';
import Navbar from '~/components/Navbar';

export default function page() {
  return (
    <>
      <header className="px-11 pb-14">
        <Navbar className="fixed left-0 right-0 top-0 w-full px-8 z-20 bg-black/100" />
      </header>

      <main className="max-w-[65rem] mx-auto pt-32 px-24 sm:px-6">
        <Outlet />
      </main>
    </>
  );
}
