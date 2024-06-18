import Swal from "sweetalert2";

export const clientRequest = async (
  route: string,
  method: string = "GET",
  body?: object | null | undefined,
  direct = false
) => {
  try {
    const url = direct
      ? route
      : `/api?route=${route}${
          method !== "POST" || (body && typeof body === "object")
            ? ""
            : "&nobody=" + true
        }`;

    console.log("rouiter", url);
    const res = await fetch(url, {
      method,
      body: body && typeof body === "object" ? JSON.stringify(body) : undefined,
      next: { revalidate: 0 },
    });

    const resData = await res.json();
    console.log("res Data", resData);
    return resData;
  } catch (error) {
    console.error(error);
    return { results: null };
  }
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
