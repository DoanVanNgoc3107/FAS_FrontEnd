import axios, { AxiosInstance, AxiosError } from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";
const API_PREFIX = "/api"; // match backend route prefix

const axiosInstance: AxiosInstance = axios.create({
	baseURL: `${API_BASE}${API_PREFIX}`,
	headers: { "Content-Type": "application/json" },
	// withCredentials: true, // enable if your API uses cookies for auth
});

// Simple response interceptor to unwrap data and normalize errors
axiosInstance.interceptors.response.use(
	(response) => response,
	(error: AxiosError) => {
		// Provide a normalized rejection value
		if (error.response) return Promise.reject(error.response);
		return Promise.reject(error);
	}
);

export default axiosInstance;

// Typed helpers for convenience
export async function axiosGet<T>(url: string, params?: any): Promise<T> {
	const res = await axiosInstance.get<T>(url, { params });
	return res.data;
}

export async function axiosPost<T, B = any>(url: string, body?: B): Promise<T> {
	const res = await axiosInstance.post<T>(url, body);
	return res.data;
}

export async function axiosPut<T, B = any>(url: string, body?: B): Promise<T> {
	const res = await axiosInstance.put<T>(url, body);
	return res.data;
}

export async function axiosDelete<T>(url: string): Promise<T> {
	const res = await axiosInstance.delete<T>(url);
	return res.data;
}

