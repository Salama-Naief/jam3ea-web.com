'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { BackIcon, ChevronRight } from '../Icons';
import IconButton from './IconButton';
import { AuthContext } from '@/lib/providers/AuthProvider';
import { LANGUAGES } from '@/lib/enums';

export default function BackButton() {
  const router = useRouter();
  const { language } = useContext(AuthContext);
  return <IconButton icon={language === LANGUAGES.ENGLISH ? <BackIcon /> : <ChevronRight />} onClick={() => router.back()} />;
}
