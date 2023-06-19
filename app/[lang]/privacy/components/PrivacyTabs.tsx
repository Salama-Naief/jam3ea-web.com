'use client';

import { useContext } from 'react';
import { AuthContext } from '@/lib/providers/AuthProvider';
import { Tab } from '@headlessui/react';

export default function PrivacyTabs() {
  const { translate } = useContext(AuthContext);
  return (
    <Tab.Group>
      <Tab.List className="border-gray-200 bg-white pt-2 flex justify-center">
        <Tab
          className={({ selected }) =>
            selected
              ? ' border-b-2 px-4 py-2 border-primary text-primary'
              : 'text-black px-4 py-2'
          }
        >
          {translate('privacy')}
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? ' border-b-2 px-4 py-2 border-primary text-primary'
              : 'text-black px-4 py-2'
          }
        >
          {translate('policy')}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className={'py-5'}>
          <div className="bg-gray-300 rounded-lg mb-4">
            <div className="text-primary p-2">text to replace</div>
            <div className="bg-[#e8dcd4] p-2 rounded-b-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem quis expedita non doloribus totam ipsa ea
              dignissimos explicabo voluptatum esse placeat, labore facilis
              beatae qui aliquam culpa enim cumque dolore. Quaerat minus
              provident labore autem non, quod laudantium facilis ullam expedita
              culpa ut fugiat alias ab debitis atque magnam delectus?
            </div>
          </div>
          <div className="bg-gray-300 rounded-lg">
            <div className="text-primary p-2">text to replace</div>
            <div className="bg-[#e8dcd4] p-2 rounded-b-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem quis expedita non doloribus totam ipsa ea
              dignissimos explicabo voluptatum esse placeat, labore facilis
              beatae qui aliquam culpa enim cumque dolore. Quaerat minus
              provident labore autem non, quod laudantium facilis ullam expedita
              culpa ut fugiat alias ab debitis atque magnam delectus?
            </div>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
