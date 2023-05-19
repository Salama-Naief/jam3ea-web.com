import Navbar from '../Navbar';
import Container from './Container';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
