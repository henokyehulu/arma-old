"use client";
import type { Category } from "@prisma/client";
import React, { useEffect, useState } from "react";
import HeaderMenu from "../header.menu";
import Logo from "./logo";
import SearchDialog from "./search.dialog";
import RequestContentDialog from "./request-content.dialog";

interface HeaderProps {
  categories: ({
    _count: {
      companies: number;
    };
  } & Category)[];
  // companies: Company[];
}
const Header: React.FC<HeaderProps> = ({ categories }) => {
  const [openSearchDialog, setOpenSearchDialog] = useState(false);
  const [openRequestContentDialog, setOpenRequestContentDialog] =
    useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenSearchDialog((openSearchDialog) => !openSearchDialog);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <header className="sticky top-0 z-20 flex h-14 flex-shrink-0 items-center justify-between border-b bg-background/75 px-4 backdrop-blur-lg sm:gap-4">
      <Logo />
      <div className="flex flex-1 items-center justify-center">
        <SearchDialog
          open={openSearchDialog}
          setOpen={setOpenSearchDialog}
          setOpenRequestContentDialog={setOpenRequestContentDialog}
          categories={categories}
        />
      </div>
      <HeaderMenu />
      <RequestContentDialog
        open={openRequestContentDialog}
        setOpen={setOpenRequestContentDialog}
      />
    </header>
  );
};

export default Header;
