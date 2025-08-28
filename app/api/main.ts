interface props {
  url: string;
  options?: RequestInit;
}

const fetchFunc = async <T>({ url, options }: props): Promise<T> => {
  const optionsWithHeaders: RequestInit = {
    ...options,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      ...options?.headers,
    },
  };

  return (await fetch(url, optionsWithHeaders)
    .then(async (res) => await res.json())
    .catch((err) => console.error(err))) as T;
};

export default fetchFunc;
