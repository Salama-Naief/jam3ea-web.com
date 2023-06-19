'use client';

import { useCookies } from 'react-cookie';
import { Locale } from '../../i18n-config';
import { useRouter } from 'next/navigation';
import webRoutes from '@/lib/utils/webRoutes';

export default function VipCard({ lang }: { lang: Locale }) {
  const [cookies, setCookie] = useCookies(['isVIP']);
  const router = useRouter();
  const makeVIP = () => {
    setCookie('isVIP', true);
    router.replace(webRoutes.home);
  };
  return (
    <button onClick={makeVIP} className="w-1/2">
      <img src={`/assets/vip/${lang}.jpg`} className="object-cover" alt="VIP" />
    </button>
  );
}
