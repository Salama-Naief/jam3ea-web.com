'use client';

import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Drawer from '@/components/Drawer';
import IconButton from '../IconButton';
import { CategoriesIcon } from '@/components/Icons';

export default function CategoriesMenuWrapper({ children }: any) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    setIsDomReady(true);
  }, []);

  return (
    <div>
      <IconButton
        onClick={() => setShowDrawer(!showDrawer)}
        icon={<CategoriesIcon />}
        title="Opan Categories Menu"
      />
      {isDomReady &&
        ReactDOM.createPortal(
          <Drawer isOpen={showDrawer} close={setShowDrawer} direction="right">
            <div className="grid grid-cols-3 gap-2 items-start">{children}</div>
          </Drawer>,
          document.getElementById('categories-drawer') as Element
        )}
    </div>
  );
}
