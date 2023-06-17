import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

if (!import.meta.env.VITE_LIVRARIA_API_URL) {
  toast.error("VITE_LIVRARIA_API_URL não configurada...", { theme: "light" });
}

export const livrariaService = axios.create({
  baseURL: import.meta.env.VITE_LIVRARIA_API_URL,
  headers: {},
});

function responseOnFulfilled(res: AxiosResponse) {
  return res;
}
function responseOnReject(error: AxiosError) {
  return Promise.reject(error);
}

livrariaService.interceptors.response.use(responseOnFulfilled, responseOnReject);
