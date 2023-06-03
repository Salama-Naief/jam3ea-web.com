import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import AddAddress from './components/AddAddress';
import AddressesList from './components/AddressesList';
import { AddressProvider } from '@/lib/providers/AddressProvider';

export default function Addresses() {
  return (
    <div>
      <Navbar />
      <div className="pt-20"></div>
      <Container>
        <AddressProvider>
          <AddAddress />
          <AddressesList />
        </AddressProvider>
      </Container>
    </div>
  );
}
