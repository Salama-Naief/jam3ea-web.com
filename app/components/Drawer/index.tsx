import { SetStateAction } from 'react';

interface DrawerProps {
  direction?: 'left' | 'right';
  isOpen?: boolean;
  close: (isOpen: SetStateAction<boolean>) => void;
  children: React.ReactNode;
}

export default function Drawer({
  direction = 'left',
  isOpen = false,
  close,
  children,
}: DrawerProps) {
  return (
    <>
      <div
        className={`fixed top-0 ${
          direction === 'right' ? 'right-0' : 'left-0'
        } z-40 h-screen py-4 overflow-y-auto transition-transform ${
          isOpen
            ? ''
            : direction === 'left'
            ? 'rtl:translate-x-full ltr:-translate-x-full'
            : 'ltr:translate-x-full rtl:-translate-x-full'
        } bg-white w-80`}
        tabIndex={1}
      >
        <img src="/assets/logo.svg" className="h-8 mx-auto" alt="Jamei" />

        <div className="py-4 overflow-y-auto">{children}</div>
      </div>
      {isOpen && (
        <div
          onClick={() => {
            close(false);
          }}
          className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"
        ></div>
      )}
    </>
  );
}
