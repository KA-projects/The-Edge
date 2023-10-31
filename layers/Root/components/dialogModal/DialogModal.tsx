import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment } from "react";
import { menuLinks } from "../../constants";

type DialogModalType = {
  isOpen: boolean;
  closeModal: () => void;
};

const obj: Record<string, boolean> = {};

menuLinks.forEach((link) => {
  obj[link.title] = false;
});

const DialogModal = ({ isOpen, closeModal }: DialogModalType) => {
  const [openObject, setOpen] = React.useState(obj);

  const handleOpenCategoriesList = (title: string) => {
    const updatedOpenObject = { ...openObject, [title]: true };
    setOpen(updatedOpenObject);
  };

  const handleCloseCategoriesList = (title: string) => {
    const updatedOpenObject = { ...openObject, [title]: false };
    setOpen(updatedOpenObject);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-y-0 right-0 max-w-full">
          <div className="w-screen max-w-[340px] h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-full bg-blurpre shadow-xl transition-all">
                <aside className="py-6 pl-4 pr-3 font-kanit">
                  <button
                    onClick={closeModal}
                    className=" cursor-pointer hover:opacity-60 ml-auto block mr-4"
                  >
                    <svg
                      className="h-6 w-6 fill-franklin"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Close</title>
                      <path d="M12 15.632 4.432 23.2.8 19.568 8.368 12 .8 4.432 4.432.8 12 8.368 19.568.8 23.2 4.432 15.632 12l7.568 7.568-3.632 3.632L12 15.632Z"></path>
                    </svg>
                  </button>

                  <nav>
                    <ol>
                      {menuLinks.map(({ title, categories }) => (
                        <li
                          className="w-full px-2 py-6 border-b border-[#3D00BF]"
                          key={title}
                        >
                          <div className="flex justify-between items-baseline w-full  leading-[1] text-white">
                            <div
                              className="text-4xl cursor-pointer hover:opacity-60"
                              onClick={() => handleOpenCategoriesList(title)}
                            >
                              {title}
                            </div>

                            {openObject[title] ? (
                              <div
                                className="text-franklin text-2xl cursor-pointer hover:opacity-60"
                                onClick={() => handleCloseCategoriesList(title)}
                              >
                                Close
                              </div>
                            ) : null}
                          </div>

                          {openObject[title] ? (
                            <ol className="pt-4 pl-2">
                              {categories.map((category) => (
                                <li
                                  className="text-franklin text-2xl pb-5 last:pb-0 cursor-pointer  hover:opacity-60"
                                  key={category}
                                >
                                  {category}
                                </li>
                              ))}
                            </ol>
                          ) : null}
                        </li>
                      ))}
                    </ol>
                  </nav>
                </aside>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DialogModal;
