import { environments } from "../environments/environments"

export class Usuarios{
    static readonly POST_LOGIN=`${environments.apiUrl}login`
    static readonly POST_REGISTRO=`${environments.apiUrl}registro`
    static readonly GET_PROTEGIDO=`${environments.apiUrl}protegido`
}