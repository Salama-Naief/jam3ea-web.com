"use client";

import { SetStateAction } from "react";
import { BackIcon } from "../Icons";

interface PopupProps {
  backBtn?: boolean;
  title?: string;
  description?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  close: (isOpen: SetStateAction<boolean>) => void;
}

export default function Popup({
  backBtn = false,
  title,
  description,
  isOpen = false,
  close,
  children,
}: PopupProps) {
  return (
    <>
      {/* {isOpen && (
        <div
          //id="addressModal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 bottom-0 z-50 items-center justify-center"
        >
          <div className="relative bg-white shadow w-full h-full max-w-md">
            <div className="relative h-full overflow-y-auto">
              {backBtn && (
                <div className="flex items-start justify-between p-4">
                  <button
                    data-modal-target="addressModal"
                    data-modal-toggle="addressModal"
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center"
                    data-modal-hide="addressModal"
                    onClick={() => close(false)}
                  >
                    <BackIcon />

                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
              )}
              <div className="p-4 h-full bg-[#fafafa]">{children}</div>
            </div>
          </div>
        </div>
      )} */}
      <div
        className={`fixed z-50 inset-0 overflow-y-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div
              className="absolute inset-0 bg-gray-500 opacity-75"
              onClick={() => close(false)}
            />
          </div>

          <div className="z-10 rounded-lg shadow-xl overflow-y-auto">
            {backBtn && (
              <div className="flex items-start justify-between p-4 bg-white">
                <button
                  data-modal-target="addressModal"
                  data-modal-toggle="addressModal"
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center"
                  data-modal-hide="addressModal"
                  onClick={() => close(false)}
                >
                  <BackIcon />

                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            )}
            <div className="p-4 h-full bg-[#fafafa]">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
