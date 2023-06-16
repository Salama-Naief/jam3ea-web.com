import Navbar from '@/components/Navbar';
import UpdateProfileForm from './components/UpdateProfileForm';
import apiHandler from '@/lib/utils/apiHandler';
import { IUser } from '@/module/(profile)/types';
import Container from '@/components/Container';

export default async function Profile() {
  const user: IUser = await apiHandler('/profile');
  return (
    <div>
      <Navbar />
      <Container>
        <UpdateProfileForm user={user} />
      </Container>
    </div>
  );
}
