import Container from '@/components/Container';
import webRoutes from '@/lib/utils/webRoutes';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSelect from './components/LanguageSelect';
import { CookieProvider } from '@/lib/providers/cookieProvider';

export default function Choose() {
  return (
    <div>
      <Container>
        <div className="app-container pt-24">
          <Image
            src={'/assets/logo.svg'}
            className="mx-auto mb-16"
            alt="jamie"
            width={200}
            height={100}
          />
          <div className="flex"></div>
          <form action="">
            <div className="flex gap-2 mb-16">
              <CookieProvider>
                <LanguageSelect />
              </CookieProvider>
            </div>
            <div className="flex gap-4 justify-center mb-8">
              <Link
                href={webRoutes.login}
                className="bg-primary px-4 py-2 text-white rounded-full"
              >
                Login
              </Link>
              <Link href={webRoutes.register} className="text-secondary">
                Register
              </Link>
            </div>
            <div className="flex">
              <Link
                href={webRoutes.addresses}
                className="text-secondary mx-auto"
              >
                Shop as guest
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
