import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import PrivacyTabs from './components/PrivacyTabs';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '@/lib/utils/dictionary';
import { translate } from '@/lib/utils/serverHelpers';

export default async function MyOrders({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <Navbar title={translate(dict, 'privacy_and_policy')} />
      <Container>
        <PrivacyTabs />
      </Container>
    </div>
  );
}
