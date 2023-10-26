import { cn } from "@/lib/utils";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";

interface PreviewDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
}

const PreviewDialog: React.FC<PreviewDialogProps> = ({
  isOpen,
  children,
  className,
  onClose,
}) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-screen overflow-hidden">
            <Transition.Child
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Dialog.Panel
                className={cn(
                  "flex h-full w-full transform flex-col bg-white transition-all",
                  className,
                )}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PreviewDialog;
