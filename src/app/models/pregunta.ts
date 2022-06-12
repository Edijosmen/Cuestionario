import { Respuesta } from "./respuesta";

export class Pregunta{
    descripcion:string;
    listRespueta:Respuesta[];
    hide?:boolean;

    constructor(descripcion:string,listRespueta:Respuesta[]){
        this.descripcion = descripcion;
        this.listRespueta = listRespueta;
        this.hide = true;
    }
}