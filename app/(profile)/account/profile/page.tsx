import Navbar from '@/components/Navbar';
import UpdateProfileForm from './components/UpdateProfileForm';
import apiHandler from '@/lib/utils/apiHandler';
import { IUser } from '@/(profile)/types';

export default async function Profile() {
  const user: IUser = await apiHandler('/profile');
  return (
    <div>
      <Navbar />
      <div className="pt-20"></div>
      <div className="app-container">
        <UpdateProfileForm user={user} />
      </div>
    </div>
  );
}
