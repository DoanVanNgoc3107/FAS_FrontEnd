import User from "@/types/user";

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user?: User;
}

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    phoneNumber: string;
    email: string;
    identityCard: string;
}

export interface RegisterResponse {
    user?: User;
}

