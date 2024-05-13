import Swal from "sweetalert2";

export const clientRequest = async (
  route: string,
  method: string = "GET",
  body?: object | null | undefined,
  direct = false
) => {
  const url = direct
    ? route
    : `/api?route=${route}${
        method !== "POST" || (body && typeof body === "object")
          ? ""
          : "&nobody=" + true
      }`;
  console.log("url", url);
  const res = await fetch(url, {
    method,
    body: body && typeof body === "object" ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  const resData = await res.json();
  console.log("resData====l", resData);
  return resData;
};

export const showErrorAlert = (text: string, confirmation: string = "ok") => {
  Swal.fire({
    text: text,
    confirmButtonText: confirmation,
    icon: "error",
    confirmButtonColor: "#E82F3E",
    customClass: {
      icon: "custom-danger",
    },
  });
};

export const showSuccesAlert = (text: string, confirmation: string = "ok") => {
  Swal.fire({
    text: text,
    confirmButtonText: confirmation,
    icon: "success",
    confirmButtonColor: "#3DB754",
    customClass: {
      icon: "custom-success",
    },
  });
};
