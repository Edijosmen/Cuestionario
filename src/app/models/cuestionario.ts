import { Pregunta } from "./pregunta";

export class Cuestionario{
    id?: number;
    cName: string;
    cDescripcion: string;
    cFechaCreacion?: Date;
    listPregunta: Pregunta[];

    constructor(nombre: string, descripcion: string,fechaCreacion:Date,listPregunta:Pregunta[]){
        this.cName = nombre;
        this.cDescripcion = descripcion;
        this.cFechaCreacion = fechaCreacion;
        this.listPregunta = listPregunta; 
    }
}