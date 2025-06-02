import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export default function ProjectsBtn() {
  return (
    <div className="mx-auto xl:mx-0 relative z-50">
      <Link
        href={"/work"}
        className="relative w-[185px] h-[185px] flex justify-center items-center
       bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight
          className="absolute text-5xl transform transition-transform 
        group-hover:translate-x-3 group-hover:text-accent duration-300"
        />
      </Link>
    </div>
  );
}
