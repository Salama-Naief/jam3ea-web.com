'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import useHttpClient from '@/lib/hooks/useHttpClient';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { getCities } from '@/module/city/services';
import { IDataLoadedResponse } from '@/lib/types';
import { ICity } from '@/module/city/types';
import {
  IUpdateProfile,
  IUpdateProfileResponseResult,
  IUser,
} from '@/module/(profile)/types';
import { updateProfile } from '@/module/(profile)/services';
import { AuthContext } from '@/lib/providers/AuthProvider';

interface UpdateProfileFormProps {
  user: IUser;
}

export default function UpdateProfileForm({ user }: UpdateProfileFormProps) {
  const router = useRouter();
  const {
    isLoading,
    errors: validationErrors,
    sendRequest,
  } = useHttpClient<IUpdateProfileResponseResult, IUpdateProfile>();

  const { results: cities, sendRequest: citiesRequest } =
    useHttpClient<IDataLoadedResponse<ICity>>();
  const { translate } = useContext(AuthContext);

  useEffect(() => {
    citiesRequest(getCities());
  }, []);

  const formik = useFormik({
    initialValues: {
      fullname: user.fullname || '',
      username: user.username || '',
      email: user.email || '',
      mobile: user.mobile || '',
      address: {
        city_id: user.address.city_id || '',
        widget: user.address.widget || '',
        gada: user.address.gada || '',
        street: user.address.street || '',
        house: user.address.house || '',
        floor: user.address.floor || '',
        apartment_number: user.address.apartment_number || '',
      },
    },
    onSubmit: async (values) => {
      const status = await sendRequest(updateProfile(values));
      if (status == true) {
        router.back();
      }
    },
  });

  const { touched, errors, values, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-2">{translate('update_profile')}</h2>
      <div>
        <div className="text-primary mb-3">
          {translate('personal_information')}
        </div>
        <Input
          placeholder={translate('fullname')}
          aria-describedby={translate('fullname')}
          type="text"
          name="fullname"
          id="fullname"
          required
          value={values.fullname}
          onChange={handleChange}
          error={
            touched.fullname && errors.fullname
              ? errors.fullname
              : validationErrors && validationErrors.fullname
              ? validationErrors.fullname
              : undefined
          }
        />
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
          placeholder={translate('email')}
          aria-describedby={translate('email')}
          type="email"
          name="email"
          id="email"
          required
          value={values.email}
          onChange={handleChange}
          error={
            touched.email && errors.email
              ? errors.email
              : validationErrors && validationErrors.email
              ? validationErrors.email
              : undefined
          }
        />
        <Input
          placeholder={translate('mobile')}
          aria-describedby={translate('mobile')}
          type="text"
          name="mobile"
          id="mobile"
          required
          value={values.mobile}
          onChange={handleChange}
          error={
            touched.mobile && errors.mobile
              ? errors.mobile
              : validationErrors && validationErrors.mobile
              ? validationErrors.mobile
              : undefined
          }
        />
      </div>
      <div className="mb-2">
        <div className="text-primary mb-3">
          {translate('residential_information')}
        </div>
        <Select
          placeholder={translate('choose_city')}
          options={
            cities && cities.data
              ? cities.data.length == 1 && cities.data[0].children
                ? cities.data[0].children.map(({ _id, name }) => ({
                    label: typeof name === 'object' ? name.en : name,
                    value: _id,
                  }))
                : cities.data.map(({ _id, name }) => ({
                    label: typeof name === 'object' ? name.en : name,
                    value: _id,
                  }))
              : []
          }
          name="address.city_id"
          id="address.city_id"
          required
          value={values.address.city_id}
          onChange={handleChange}
          error={
            touched.address?.city_id && errors.address?.city_id
              ? errors.address.city_id
              : validationErrors &&
                validationErrors.address &&
                validationErrors.address.city_id
              ? validationErrors.address.city_id
              : undefined
          }
        />

        <Input
          placeholder={translate('block')}
          aria-describedby={translate('block')}
          type="text"
          name="address.widget"
          id="address.widget"
          required
          value={values.address.widget}
          onChange={handleChange}
          error={
            touched.address?.widget && errors.address?.widget
              ? errors.address.widget
              : validationErrors &&
                validationErrors.address &&
                validationErrors.address.widget
              ? validationErrors.address.widget
              : undefined
          }
        />

        <Input
          placeholder={translate('gada')}
          aria-describedby={translate('gada')}
          type="text"
          name="address.gada"
          id="address.gada"
          value={values.address.gada}
          onChange={handleChange}
          error={
            touched.address?.gada && errors.address?.gada
              ? errors.address.gada
              : validationErrors &&
                validationErrors.address &&
                validationErrors.address.gada
              ? validationErrors.address.gada
              : undefined
          }
        />

        <Input
          placeholder={translate('street')}
          aria-describedby={translate('street')}
          type="text"
          name="address.street"
          id="address.street"
          value={values.address.street}
          onChange={handleChange}
          error={
            touched.address?.street && errors.address?.street
              ? errors.address.street
              : validationErrors &&
                validationErrors.address &&
                validationErrors.address.street
              ? validationErrors.address.street
              : undefined
          }
        />

        <Input
          placeholder={translate('house')}
          aria-describedby={translate('house')}
          type="text"
          name="address.house"
          id="address.house"
          value={values.address.house}
          onChange={handleChange}
          error={
            touched.address?.house && errors.address?.house
              ? errors.address.house
              : validationErrors &&
                validationErrors.address &&
                validationErrors.address.house
              ? validationErrors.address.house
              : undefined
          }
        />

        <div className="flex gap-2">
          <Input
            placeholder={translate('floor')}
            aria-describedby={translate('floor')}
            type="text"
            name="address.floor"
            id="address.floor"
            value={values.address.floor}
            onChange={handleChange}
            error={
              touched.address?.floor && errors.address?.floor
                ? errors.address.floor
                : validationErrors &&
                  validationErrors.address &&
                  validationErrors.address.floor
                ? validationErrors.address.floor
                : undefined
            }
          />
          <Input
            placeholder={translate('apartment')}
            aria-describedby={translate('apartment')}
            type="text"
            name="address.apartment_number"
            id="address.apartment_number"
            value={values.address.apartment_number}
            onChange={handleChange}
            error={
              touched.address?.apartment_number &&
              errors.address?.apartment_number
                ? errors.address.apartment_number
                : validationErrors &&
                  validationErrors.address &&
                  validationErrors.address.apartment_number
                ? validationErrors.address.apartment_number
                : undefined
            }
          />
        </div>
      </div>
      <Button type="submit" loading={isLoading}>
        {translate('update')}
      </Button>
    </form>
  );
}
