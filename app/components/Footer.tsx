import { Link } from '@remix-run/react';
import { FaGithub, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { Separator } from './ui/separator';

export default function Footer() {
  const date = new Date();
  return (
    <>
      <div className="px-8 max-sm:px-3">
        <Separator />
      </div>

      <footer className="px-8 py-8 grid grid-cols-1 gap-8 section-container">
        <div>
          <div className="flex gap-3 items-center">
            <Link to="/">
              <img
                src="/Eloho-Logo.png"
                className="w-10 object-cover"
                alt="Logo - Eloho Kennedy, A fullstack web developer"
              />
            </Link>
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

        <div className="pt-14 sm:pt-6 flex flex-col gap-2">
          <p>© {date.getFullYear()} Eloho Kennedy. All Rights Reserved.</p>
          <Link viewTransition to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </>
  );
}
