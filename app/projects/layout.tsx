import Navbar from '~/components/Navbar';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar className="" />
      <main className="section-container">
        {children}
      </main>
    </>
  );
}
