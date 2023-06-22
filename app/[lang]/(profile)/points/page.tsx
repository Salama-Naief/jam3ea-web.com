import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import PointsCards from './components/PointsCards';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/lib/utils/dictionary';
import { translate } from '@/lib/utils/serverHelpers';
import apiHandler from '@/lib/utils/apiHandler';
import { IUser } from '../types';

export default async function PointsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const user: IUser = await apiHandler('/profile');

  return (
    <>
      <Navbar
        className="bg-primary text-white"
        title={translate(dict, 'my_points') + ' (' + user.points + ')'}
      />
      <Container>
        <PointsCards />
      </Container>
    </>
  );
}
