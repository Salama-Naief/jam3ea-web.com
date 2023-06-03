'use client';

import {
  IAddAddress,
  IAddAddressResponseResult,
  IAddress,
} from '@/(profile)/types';
import { ICity } from '@/city/types';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import useHttpClient from '@/lib/hooks/useHttpClient';
import { getCities } from '@/city/services';
import { IDataLoadedResponse } from '@/lib/types';
import { useFormik } from 'formik';
import { useContext, useEffect } from 'react';
import { AddressContext } from '@/lib/providers/AddressProvider';

interface AddAddressProps {
  afterSubmit: () => void;
  address?: IAddress;
}

export default function AddAddressForm({
  afterSubmit,
  address,
}: AddAddressProps) {
  const { results: cities, sendRequest: citiesRequest } =
    useHttpClient<IDataLoadedResponse<ICity>>();

  const {
    isLoading,
    errors: validationErrors,
    sendRequest,
  } = useHttpClient<IAddAddressResponseResult, IAddAddress>();

  const { addAddress, editAddress } = useContext(AddressContext);

  useEffect(() => {
    citiesRequest(getCities());
  }, []);

  const formik = useFormik({
    initialValues: address || {
      name: '',
      email: '',
      mobile: '',
      city_id: '',
      widget: '',
      gada: '',
      street: '',
      house: '',
      floor: '',
      apartment_number: '',
    },
    onSubmit: async (values) => {
      const status =
        address && address.id
          ? await editAddress(
              address.id,
              {
                ...values,
                city: cities?.data.find((c) => c._id == values.city_id),
              },
              sendRequest
            )
          : addAddress(
              {
                ...values,
                city: cities?.data.find((c) => c._id == values.city_id),
              },
              sendRequest
            );
      if (status) {
        resetForm();
      }
      afterSubmit();
    },
  });

  const { touched, errors, values, handleChange, handleSubmit, resetForm } =
    formik;

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-2">Register Account</h2>
      <div>
        <div className="text-primary mb-3">Personal Information</div>
        <Input
          placeholder="Full name"
          aria-describedby="Full name"
          type="text"
          name="name"
          id="name"
          required
          value={values.name}
          onChange={handleChange}
          error={
            touched.name && errors.name
              ? errors.name
              : validationErrors && validationErrors.name
              ? validationErrors.name
              : undefined
          }
        />
        <Input
          placeholder="Email"
          aria-describedby="Email"
          type="email"
          name="email"
          id="email"
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
          placeholder="Mobile number"
          aria-describedby="Mobile number"
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
        <div className="text-primary mb-3">Residential Information</div>
        <Select
          placeholder="Choose city"
          options={
            cities && cities.data
              ? cities.data.map(({ _id, name }) => ({
                  label: typeof name === 'object' ? name.en : name,
                  value: _id,
                }))
              : []
          }
          name="city_id"
          id="city_id"
          required
          value={values.city_id}
          onChange={handleChange}
          error={
            touched.city_id && errors.city_id
              ? errors.city_id
              : validationErrors && validationErrors.city_id
              ? validationErrors.city_id
              : undefined
          }
        />

        <Input
          placeholder="Block"
          aria-describedby="Block"
          type="text"
          name="widget"
          id="widget"
          required
          value={values.widget}
          onChange={handleChange}
          error={
            touched.widget && errors.widget
              ? errors.widget
              : validationErrors && validationErrors.widget
              ? validationErrors.widget
              : undefined
          }
        />

        <Input
          placeholder="Gada (Optional)"
          aria-describedby="Gada"
          type="text"
          name="gada"
          id="gada"
          value={values.gada}
          onChange={handleChange}
          error={
            touched.gada && errors.gada
              ? errors.gada
              : validationErrors && validationErrors.gada
              ? validationErrors.gada
              : undefined
          }
        />

        <Input
          placeholder="Street"
          aria-describedby="Street"
          type="text"
          name="street"
          id="street"
          value={values.street}
          onChange={handleChange}
          error={
            touched.street && errors.street
              ? errors.street
              : validationErrors && validationErrors.street
              ? validationErrors.street
              : undefined
          }
        />

        <Input
          placeholder="House"
          aria-describedby="House"
          type="text"
          name="house"
          id="house"
          value={values.house}
          onChange={handleChange}
          error={
            touched.house && errors.house
              ? errors.house
              : validationErrors && validationErrors.house
              ? validationErrors.house
              : undefined
          }
        />

        <div className="flex gap-2">
          <Input
            placeholder="Floor (Optional)"
            aria-describedby="Floor"
            type="text"
            name="floor"
            id="floor"
            value={values.floor}
            onChange={handleChange}
            error={
              touched.floor && errors.floor
                ? errors.floor
                : validationErrors && validationErrors.floor
                ? validationErrors.floor
                : undefined
            }
          />
          <Input
            placeholder="Apartment No. (Optional)"
            aria-describedby="Apartment number"
            type="text"
            name="apartment_number"
            id="apartment_number"
            value={values.apartment_number}
            onChange={handleChange}
            error={
              touched.apartment_number && errors.apartment_number
                ? errors.apartment_number
                : validationErrors && validationErrors.apartment_number
                ? validationErrors.apartment_number
                : undefined
            }
          />
        </div>
      </div>
      <Button type="submit" loading={isLoading}>
        Add address
      </Button>
    </form>
  );
}
