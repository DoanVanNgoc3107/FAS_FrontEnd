import User from "@/types/user";

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user?: User;
}

export interface RegisterRequest extends LoginRequest {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    identityCard: string;
}

