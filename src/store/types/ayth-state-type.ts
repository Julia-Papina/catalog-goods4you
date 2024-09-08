import { UserType } from "./user-type";

export type AuthStateType = {
    user: UserType | null;
    token: string | null;
    isAuthenticated: boolean;

}