import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.css';

export const metadata = {
  title: 'Jm3eia dot com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
