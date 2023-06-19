import Swal from 'sweetalert2';

export const clientRequest = async (
  route: string,
  method: string = 'GET',
  body?: object | null | undefined
) => {
  const res = await fetch(
    `/api?route=${route}${
      body && typeof body === 'object' ? '' : '&nobody=' + true
    }`,
    {
      method,
      body: body && typeof body === 'object' ? JSON.stringify(body) : undefined,
      cache: 'no-store',
    }
  );
  const resData = await res.json();
  return resData;
};

export const showErrorAlert = (text: string, confirmation: string = 'ok') => {
  Swal.fire({
    text: text,
    confirmButtonText: confirmation,
    icon: 'error',
    confirmButtonColor: '#E82F3E',
    customClass: {
      icon: 'custom-danger',
    },
  });
};

export const showSuccesAlert = (text: string, confirmation: string = 'ok') => {
  Swal.fire({
    text: text,
    confirmButtonText: confirmation,
    icon: 'success',
    confirmButtonColor: '#3DB754',
    customClass: {
      icon: 'custom-success',
    },
  });
};
