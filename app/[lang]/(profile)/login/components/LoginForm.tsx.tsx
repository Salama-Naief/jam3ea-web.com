'use client';

import { login } from '@/module/(profile)/services';
import { ILogin, ILoginResponseResult } from '@/module/(profile)/types';
import Button from '@/components/Button';
import Input from '@/components/Input';
import useHttpClient from '@/lib/hooks/useHttpClient';
import webRoutes from '@/lib/utils/webRoutes';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { AuthContext } from '@/lib/providers/AuthProvider';

export default function LoginForm() {
  const router = useRouter();
  const {
    isLoading,
    errors: validationErrors,
    sendRequest,
  } = useHttpClient<ILoginResponseResult, ILogin>();
  const { translate, login: makeLogin } = useContext(AuthContext);
  const [redirecting, setRedirecting] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const status = await sendRequest(login(values));
      if (status == true) {
        setRedirecting(true);
        makeLogin();
      }
    },
  });

  const { touched, errors, values, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-5">{translate('login')}</h2>
      <div>
        <Input
          placeholder={translate('username')}
          aria-describedby={translate('username')}
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
          placeholder={translate('password')}
          aria-describedby={translate('password')}
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
      {/* <div className="mb-3">
        <Link className="text-primary" href={webRoutes.resetPassword}>
          {translate('reset_password')}
        </Link>
      </div> */}
      <Button type="submit" loading={isLoading || redirecting}>
        {translate('login')}
      </Button>
      <Link
        href={webRoutes.addresses}
        className="w-full bg-secondary py-2 rounded-full text-white mb-3 block text-center"
      >
        {translate('shop_as_guest')}
      </Link>
      <div className="text-sm text-center">
        <span className="text-gray-400">{translate('no_account')} </span>
        <Link className="text-primary" href={webRoutes.register}>
          {translate('register')}
        </Link>
      </div>
    </form>
  );
}
