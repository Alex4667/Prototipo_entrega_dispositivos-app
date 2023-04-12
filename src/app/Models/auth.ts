export interface LoginI {
    username: string;
    password: string;
}


export interface ResultsJWT {
    token: string;
    message: string;
    status: string;
    user_id: number;
}