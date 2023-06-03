import Navbar from '@/components/Navbar';
import UpdatePasswordForm from './components/UpdatePasswordForm';

export default async function Profile() {
  return (
    <div>
      <Navbar />
      <div className="pt-20"></div>
      <div className="app-container">
        <UpdatePasswordForm />
      </div>
    </div>
  );
}
