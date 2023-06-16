import Navbar from '@/components/Navbar';
import UpdatePasswordForm from './components/UpdatePasswordForm';
import Container from '@/components/Container';

export default async function Profile() {
  return (
    <div>
      <Navbar title="Update password" />
      <Container>
        <UpdatePasswordForm />
      </Container>
    </div>
  );
}
