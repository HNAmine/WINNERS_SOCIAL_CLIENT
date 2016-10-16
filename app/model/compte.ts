import {User} from "./user";

export class Compte {
    idCompte: number;
    login: string;
    email: string;
    password: string;
    created: Date;
    visiblite: string;
    activity: string;
    user: User
}