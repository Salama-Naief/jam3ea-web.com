import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import AddAddress from './components/AddAddress';
import AddressesList from './components/AddressesList';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/lib/utils/dictionary';
import { translate } from '@/lib/utils/serverHelpers';

export default async function Addresses({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <Navbar title={translate(dict, 'addresses')} />
      <Container>
        <AddAddress />
        <AddressesList />
      </Container>
    </div>
  );
}
