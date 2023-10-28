import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-shrink-0 items-center justify-center border-t px-4 py-8 text-center">
      <p className="text-sm text-muted-foreground">
        Built by{" "}
        <Link
          target="_blank"
          href={"https://x.com/uglyhenok"}
          className="underline"
        >
          Henok Yehulu
        </Link>
        . The source code is available on{" "}
        <Link
          target="_blank"
          href={"https://github.com/henokyehulu/arma"}
          className="underline"
        >
          GitHub
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
