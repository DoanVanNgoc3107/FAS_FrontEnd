export default interface User {
    id: number;
    fullName: string;
    username: string;
    password: string;
    phoneNumber: string;
    email: string;
    identityCard: string;
    provider: "GITHUB" | "GOOGLE" | "FACEBOOK";
    providerId: string;
    avatarUrl: string;
    balance: number;
    status: "ACTIVE" | "BANNED" | "DELETED";
    role: "ADMIN" | "USER";
    createdAt: Date;
    updatedAt: Date;
}