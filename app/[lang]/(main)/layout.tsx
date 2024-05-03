import Navbar from "@/components/Navbar/Navbar";

interface IRootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Jm3eia dot com",
  verification: {
    google: "YejFgWHiYkJdIY9hniJYUP1oZAP8PT4ZVZsPkQYBOgc",
  },
};

export default async function RootLayout({ children }: IRootLayoutProps) {
  return (
    <div>
      <Navbar />
      <>{children}</>
    </div>
  );
}
