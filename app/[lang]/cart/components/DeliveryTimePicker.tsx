'use client';
import { Fragment, useState } from 'react';
import { Dialog, Switch, Tab, Transition } from '@headlessui/react';
import { IDeliveryTime } from '../types';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface DeliveryTimePickerProps {
  deliveryTimes: IDeliveryTime[];
}

export default function DeliveryTimePicker({
  deliveryTimes,
}: DeliveryTimePickerProps) {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  console.log('delivery times: ', deliveryTimes);
  return (
    <div>
      <h5 className="text-base mb-2">Delivery time</h5>
      <button
        onClick={() => {
          openModal();
        }}
        className="flex py-4 mb-2 rounded-xl bg-white gap-3 items-center justify-center w-full"
      >
        <svg
          id="Group_539"
          data-name="Group 539"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            id="Ellipse_34"
            data-name="Ellipse 34"
            fill="#fff"
            stroke="#f77d0f"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="12" stroke="none" />
            <circle cx="12" cy="12" r="11" fill="none" />
          </g>
          <path
            id="Path_3022"
            data-name="Path 3022"
            d="M51,159.849v5.832l2.717,2.717"
            transform="translate(-39 -153)"
            fill="none"
            stroke="#f77d0f"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>

        <span className="text-md">Pick Delivering time</span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md h-screen transform overflow-hidden bg-[#fafafa] text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="mb-2 p-4 flex items-center gap-2 justify-between bg-white">
                    <button
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      <ArrowLeftIcon className="w-6 h-6" />
                    </button>
                    <div className="text-lg font-medium leading-6 text-gray-900 text-center ">
                      Delivery Time
                    </div>
                    <div>&nbsp;</div>
                  </Dialog.Title>
                  <div className="p-6 pt-2 ">
                    <Tab.Group>
                      <Tab.List className="">
                        {deliveryTimes.map((d, i) => (
                          <Tab
                            key={i}
                            className={({ selected }) =>
                              selected
                                ? ' px-4 py-2  text-white bg-primary rounded-2xl'
                                : 'text-black px-4 py-2'
                            }
                          >
                            {d.day}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels>
                        {deliveryTimes.map(({ times }, i) => (
                          <Tab.Panel key={i} className={'py-5'}>
                            <div className="flex flex-col gap-4">
                              {times.map(({ text, time }, i) => (
                                <div
                                  key={i}
                                  onClick={() => {
                                    alert('selected!');
                                  }}
                                  className="bg-white rounded-2xl w-full flex p-4 cursor-pointer"
                                >
                                  <div className="flex flex-col">
                                    <div>{time}</div>
                                    <div className="text-sm text-success">
                                      {text}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
