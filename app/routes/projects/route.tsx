import { Outlet } from '@remix-run/react';
import Navbar from '~/components/Navbar';

export default function page() {
  return (
    <>
      <Navbar className="" />

      <main className="section-container">
        <Outlet />
      </main>
    </>
  );
}
