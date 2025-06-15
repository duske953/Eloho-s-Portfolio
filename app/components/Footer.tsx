import { Link } from '@remix-run/react';
import { FaGithub, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { Separator } from './ui/separator';

export default function Footer() {
  const date = new Date();
  return (
    <>
      <div className="px-8">
        <Separator />
      </div>

      <footer className="px-8 py-8 grid grid-cols-1 gap-8 section-container">
        <div>
          <div className="flex gap-3 items-center">
            <img
              className="size-20 object-cover rounded-full"
              src="/logo.jpg"
              alt="Eloho Kennedy | Fullstack Web Developer"
            />
            <div className="">
              <p>Eloho Kennedy</p>
              <p className="text-gray-400">Fullstack Web Developer</p>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Link
              target="_blank"
              rel="noreferrer noopener"
              to="https://linkedin.com/in/eloho-kennedy-65b731139"
            >
              <FaLinkedinIn className="size-5" />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer noopener"
              to="https://github.com/duske953"
            >
              <FaGithub className="size-5" />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer noopener"
              to="https://www.pinterest.com/Eloho_ken/"
            >
              <FaPinterest className="size-5" />
            </Link>
          </div>
        </div>

        <div className="pt-14 sm:pt-6">
          <p>© {date.getFullYear()} Eloho Kennedy. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
