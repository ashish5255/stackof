import Image from "next/image";
import Link from "next/link";
import React from "react";

import Theme from "./Theme";

const Navbar = () => {
  // flex -between is defined to apply flex items-between justify-center
  return (
    <nav className=" flex-between  background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12 ">
      <Link href="/" className="flex items-center gap-1 ">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="Bootleg Overflow Logo"
        ></Image>
        <p className=" h2-bold font-space-grotesk text-dark-100 dark:text-light-900  max-sm:hidden">
          Boot<span className=" text-primary-500">Overflow</span>
        </p>
      </Link>

      <p className="">Global Search</p>

      <div className="flex-between ">
        {" "}
        <Theme />{" "}
      </div>
    </nav>
  );
};

export default Navbar;