export const getData = (url: string): Promise<Response> => {
  return fetch(url);
};
