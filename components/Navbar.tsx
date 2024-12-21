"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="w-full h-[70px] flex justify-center items-center">
      <nav className="flex text-lg border-[1.5px] border-white/20 overflow-hidden fixed rounded-3xl p-[0.5px] justify-center items-center">
        <Link
          className={`${pathname === "/" ? "bg-white text-black" : ""} w-full p-2 px-4 hover:bg-white/5 trans rounded-3xl `}
          href="/"
        >
          Work
        </Link>
        <Link
          className={`${pathname === "/blogs" ? "bg-white text-black" : ""} w-full p-2 px-4 hover:bg-white/5 trans rounded-3xl `}
          href="/blogs"
        >
          Blogs
        </Link>
        <Link
          className={`${pathname === "/hobbies" ? "bg-white text-black" : ""} w-full p-2 px-4 hover:bg-white/5 trans rounded-3xl `}
          href="/hobbies"
        >
          Hobbies
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
