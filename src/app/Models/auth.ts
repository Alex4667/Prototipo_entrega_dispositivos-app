export interface LoginI {
    username: string;
    password: string;
}


export interface ResultsJWT {
    access_token: string;
    message: string;
    status: string;
    user_id: number;
}