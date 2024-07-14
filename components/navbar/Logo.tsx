import React from "react";
import { Button } from "../ui/button";
import { LuTent } from "react-icons/lu";
import Link from "next/link";

const Logo = () => {
  return (
    <Button>
      <Link href="/">
        <LuTent className="w-6 h-6" />
      </Link>
    </Button>
  );
};

export default Logo;
