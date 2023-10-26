import type { Company, Logo } from "@prisma/client";
import Link from "next/link";
import React from "react";
import {
  PiX as CloseIcon,
  PiSidebarSimple as InspectorIcon,
} from "react-icons/pi";
import { Button } from "./ui/button";
import PreviewDialog from "./ui/preview-dialog";
import Image from "next/image";

interface LogoPreviewDialogProps {
  company: Company;
  logo: Logo | null;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoPreviewDialog: React.FC<LogoPreviewDialogProps> = ({
  isOpen,
  setIsOpen,
  company,
  logo,
}) => {
  const [showMetaData, setShowMetaData] = React.useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <PreviewDialog isOpen={isOpen} setIsOpen={setIsOpen} onClose={closeModal}>
      <header className="flex items-center justify-between h-12 gap-4 px-4 border-b">
        <div className="flex-shrink-0">
          <Button size={"icon"} variant={"ghost"} onClick={closeModal}>
            <CloseIcon className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center justify-between flex-1 gap-2 px-4 border-x-2">
          <div className="flex items-center justify-center flex-1">
            <Link href={"/company/1"} className="flex items-center gap-2 group">
              <div className="w-8 h-8 border rounded-lg"></div>
              <h3 className="font-medium group-hover:underline">
                {company?.name}
              </h3>
            </Link>
          </div>
          {/* <div className="flex items-center gap-2">
            <Button size={"sm"}>
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download
            </Button>
          </div> */}
        </div>
        <div className="flex-shrink-0">
          <Button
            onClick={() => setShowMetaData(!showMetaData)}
            variant={"ghost"}
            size={"icon"}
          >
            <InspectorIcon className="w-5 h-5 rotate-180" />
          </Button>
        </div>
      </header>
      <main className="flex items-center h-full">
        <div className="flex items-center justify-center flex-1 w-full h-full p-10 bg-muted">
          <div className="relative w-full max-w-3xl pointer-events-auto aspect-video bg-muted-foreground">
            <Image
              src={logo?.url ?? ""}
              alt="logo"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {showMetaData ? (
          <div className="flex-shrink-0 h-full p-4 bg-white w-80">
            Meta data
          </div>
        ) : null}
      </main>
    </PreviewDialog>
  );
};

export default LogoPreviewDialog;
