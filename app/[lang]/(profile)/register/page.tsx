import Navbar from '@/components/Navbar';
import RegisterForm from './components/RegisterForm';

export default function Register() {
  return (
    <div>
      <Navbar />
      <div className="app-container">
        <RegisterForm />
      </div>
    </div>
  );
}
