"use client";
import { Fragment, useState } from "react";
import { Dialog, Switch, Tab, Transition } from "@headlessui/react";
import { IDeliveryTime, ITime } from "../types";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { TimePickerIcon } from "@/components/Icons";

interface DeliveryTimePickerProps {
  deliveryTimes: IDeliveryTime[];
  dictionary: {
    delivery_time: string;
    pick_delivery_time: string;
  };
  onSelect: (value: ITime) => void;
  selectedDeliveryTime?: string;
}

export default function DeliveryTimePicker({
  deliveryTimes,
  dictionary,
  onSelect,
  selectedDeliveryTime,
}: DeliveryTimePickerProps) {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="w-full">
      <h5 className="text-2xl font-bold text-secondary my-4 text-center ">
        {dictionary.delivery_time}
      </h5>
      <button
        type="button"
        onClick={() => {
          openModal();
        }}
        className="flex py-4 mb-2 rounded-xl bg-white gap-3 items-center justify-center w-full"
      >
        <TimePickerIcon />

        <span className="text-md">
          {selectedDeliveryTime
            ? selectedDeliveryTime
            : dictionary.pick_delivery_time}
        </span>
      </button>

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
                      {dictionary.delivery_time}
                    </div>
                    <div>&nbsp;</div>
                  </Dialog.Title>
                  <div className="p-6 pt-2 max-h-screen pb-16 overflow-y-auto">
                    <Tab.Group>
                      <Tab.List className="">
                        {deliveryTimes.map((d, i) => (
                          <Tab
                            key={i}
                            className={({ selected }) =>
                              selected
                                ? " px-4 py-2  text-white bg-primary rounded-2xl"
                                : "text-black px-4 py-2"
                            }
                          >
                            {d.day}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels>
                        {deliveryTimes.map(({ times }, i) => (
                          <Tab.Panel key={i} className={"py-5"}>
                            <div className="flex flex-col gap-4">
                              {times.map((dt, i) => (
                                <div
                                  key={i}
                                  onClick={() => {
                                    onSelect(dt);
                                    closeModal();
                                  }}
                                  className="bg-white rounded-2xl w-full flex p-4 cursor-pointer"
                                >
                                  <div className="flex flex-col">
                                    <div>{dt.time}</div>
                                    <div className="text-sm text-success">
                                      {dt.text}
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
