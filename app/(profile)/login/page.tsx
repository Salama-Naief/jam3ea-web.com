import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import LoginForm from './components/LoginForm.tsx.jsx';

export default function Login() {
  return (
    <div>
      <Navbar />
      <Container>
        <LoginForm />
      </Container>
    </div>
  );
}
