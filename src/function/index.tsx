const env = process.env.NEXT_PUBLIC_APP_ENV;
export const PRODUCTION = env == "production";
export const DEVELOPMENT = env == "development";

const urls = {
  production: {
    api: "https://api.kemariya.id/api/",
    api_client: "https://kemariya.id",
  },
  test: {
    api: "https://api.kemariya.id/api/",
    api_client: "https://kemariya.id",
  },
  development: {
    api: "https://api.kemariya.id/api/",
    api_client: "http://localhost:3000",
  },
};

export const API_URL = PRODUCTION
  ? urls.production.api
  : DEVELOPMENT
  ? urls.development.api
  : urls.test.api;
export const API_CLIENT = PRODUCTION
  ? urls.production.api_client
  : DEVELOPMENT
  ? urls.development.api_client
  : urls.test.api_client;

interface api {
  url: string;
  data?: any;
  method?: string;
  token?: string;
  type?: string;
  name?: string;
}

export const SecureAPI = async ({
  url,
  data,
  method = "GET",
  token = "",
  type = "json",
  name = "api",
}: api) => {
  const urls = API_URL + "v1/" + url;
  console.log(urls);
  var cfg = {
    method: method,
    body: JSON.stringify(data),
    next: { tags: [name] },
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    const apnd = {
      Authorization: `Bearer ${token}`,
    };
    cfg.headers = { ...cfg.headers, ...apnd };
  }
  const res: any = await fetch(urls, cfg);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
