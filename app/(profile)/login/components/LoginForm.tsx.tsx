'use client';

import { login } from '@/(profile)/services';
import { ILogin, ILoginResponseResult } from '@/(profile)/types';
import Button from '@/components/Button';
import Input from '@/components/Input';
import useHttpClient from '@/lib/hooks/useHttpClient';
import webRoutes from '@/lib/utils/webRoutes';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const {
    isLoading,
    errors: validationErrors,
    sendRequest,
  } = useHttpClient<ILoginResponseResult, ILogin>();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const status = await sendRequest(login(values));
      if (status == true) {
        router.replace(webRoutes.home);
      }
    },
  });

  const { touched, errors, values, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-10">Login</h2>
      <div>
        <Input
          placeholder="Username"
          aria-describedby="Username"
          type="text"
          name="username"
          id="username"
          required
          value={values.username}
          onChange={handleChange}
          error={
            touched.username && errors.username
              ? errors.username
              : validationErrors && validationErrors.username
              ? validationErrors.username
              : undefined
          }
        />
        <Input
          placeholder="Password"
          aria-describedby="Password"
          type="password"
          name="password"
          id="password"
          required
          value={values.password}
          onChange={handleChange}
          error={
            touched.password && errors.password
              ? errors.password
              : validationErrors && validationErrors.password
              ? validationErrors.password
              : undefined
          }
        />
      </div>
      <div className="mb-3">
        <Link className="text-primary" href={webRoutes.resetPassword}>
          Reset pasword
        </Link>
      </div>
      <Button type="submit" loading={isLoading}>
        Login
      </Button>
      <button className="w-full bg-secondary py-2 rounded-full text-white mb-3">
        Shop as Guest
      </button>
      <div className="text-sm text-center">
        <span className="text-gray-400">Don't have any account here?</span>
        <Link className="text-primary" href={webRoutes.register}>
          Register
        </Link>
      </div>
    </form>
  );
}
