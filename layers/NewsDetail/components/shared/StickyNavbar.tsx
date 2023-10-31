import DialogModal from "@/layers/Root/components/dialogModal/DialogModal";
import { debounce } from "@/layers/Root/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const StickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleScroll = debounce(() => {
    setIsSticky(window.scrollY > 400);
  }, 10);

  useEffect(() => {
    setIsSticky(window.scrollY > 400);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div
        className={` w-full text-black bg-white drop-shadow-md fixed top-0 left-0 z-40 transition-opacity ${
          isSticky ? "opacity-95" : "opacity-0"
        }`}
      >
        <div className="h-[50px] max-w-container-lg mx-auto px-3 lg:px-0 flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src={"/logo.svg"}
                width={250}
                height={50}
                alt="plus"
                className="mb-4 mr-10 hover:opacity-70"
              />
            </Link>
          </div>

          <button className="flex hover:opacity-50" onClick={openModal}>
            <span className="font-kanit">Menu</span>

            <Image
              src={"/plus-black.svg"}
              width={25}
              height={25}
              alt="plus"
              className="inline-block ml-2 md:mb-1"
            />
          </button>
        </div>
      </div>

      <DialogModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default StickyNavbar;
