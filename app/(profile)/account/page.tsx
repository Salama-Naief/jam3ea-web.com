import Container from '@/components/Container';
import { AccountIcon, ChevronRight } from '@/components/Icons';
import Navbar from '@/components/Navbar';
import webRoutes from '@/lib/utils/webRoutes';
import Link from 'next/link';

export default function Account() {
  return (
    <div>
      <Navbar />
      <div className="pt-20"></div>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-28 h-28 rounded-full mx-auto mb-2"
            src="https://ui-avatars.com/api/?name=John+Doe"
            alt=""
          />
          <div className="text-center mb-4">
            <div className="text-xl font-bold text-secondary">Mark Hemlin</div>
            <div className="text-xs text-gray-300">markhemlin@gmail.com</div>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <Link
            href={webRoutes.updateProfile}
            className="w-full bg-white flex items-center gap-4 p-4 rounded-2xl mb-3"
          >
            <AccountIcon />
            <span>Update profile</span>
            <span className="ms-auto">
              <ChevronRight />
            </span>
          </Link>
          <Link
            href={webRoutes.updatePassword}
            className="w-full bg-white flex items-center gap-4 p-4 rounded-2xl mb-3"
          >
            <AccountIcon />
            <span>Update password</span>
            <span className="ms-auto">
              <ChevronRight />
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
