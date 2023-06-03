export const clientRequest = async (
  route: string,
  method: string = 'GET',
  body?: object | null | undefined
) => {
  const res = await fetch(`/api?route=${route}`, {
    method,
    body: body && JSON.stringify(body),
  });
  return await res.json();
};
