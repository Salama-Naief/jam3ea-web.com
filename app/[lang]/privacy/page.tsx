import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import PrivacyTabs from './components/PrivacyTabs';

export default function MyOrders() {
  return (
    <div>
      <Navbar />
      <Container>
        <PrivacyTabs />
      </Container>
    </div>
  );
}
