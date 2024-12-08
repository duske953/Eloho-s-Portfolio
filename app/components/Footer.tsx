import { Link } from '@remix-run/react';
import { FaGithub, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { Separator } from './ui/separator';

export default function Footer() {
  const date = new Date();
  return (
    <footer className="px-8 py-8 grid grid-cols-2 sm:grid-cols-1 sm:gap-16 section-container">
      <div>
        <div className="flex gap-3">
          <img
            className="size-14 object-cover rounded-full"
            src="/eloho.jpg"
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
      {/* <div>
        <div className="flex items-center gap-3 pb-5">
          <p className="text-4xl">Get in touch</p>
          <FaArrowRight className="size-9 text-blue-500" />
        </div>
        <div className="">
          <p className="text-gray-300 text-sm">EMAIL ME:</p>
          <Link className="underline" to="mailto:kennyduske@gmail.com ">
            kennyduske@gmail.com
          </Link>
        </div>
      </div> */}
      <Separator className="col-span-2 mt-7 sm:col-auto sm:mt-3" />
      <div className="pt-14 sm:pt-6">
        <p>© {date.getFullYear()} Eloho Kennedy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
