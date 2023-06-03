import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';
import { CookieProvider } from '@/lib/providers/cookieProvider';

export const metadata = {
  title: 'Jm3eia dot com',
};

export default async function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        <div>
          <div id="root">{children}</div>
          <div id="menu-drawer"></div>
          <div id="categories-drawer"></div>
          <div id="popup"></div>
        </div>
      </body>
    </html>
  );
}
