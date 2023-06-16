'use client';

import { useRouter } from 'next/navigation';
import { BackIcon } from '../Icons';
import IconButton from './IconButton';

export default function BackButton() {
  const router = useRouter();
  return <IconButton icon={<BackIcon />} onClick={() => router.back()} />;
}
