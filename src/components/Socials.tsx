//links to social media
import Link from "next/link";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

export default function Socials() {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={""}
        className="transition-transform transform hover:scale-125 hover:text-accent duration-300 text-2xl"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={""}
        className="transition-transform transform hover:scale-125 hover:text-accent duration-300 text-2xl"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={""}
        className="transition-transform transform hover:scale-125 hover:text-accent duration-300 text-2xl"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={""}
        className="transition-transform transform hover:scale-125 hover:text-accent duration-300 text-2xl"
      >
        <RiDribbbleLine />
      </Link>
      <Link
        href={""}
        className="transition-transform transform hover:scale-125 hover:text-accent duration-300 text-2xl"
      >
        <RiBehanceLine />
      </Link>
      <Link
        href={""}
        className="transition-transform transform hover:scale-125 hover:text-accent duration-300 text-2xl"
      >
        <RiPinterestLine />
      </Link>
    </div>
  );
}
