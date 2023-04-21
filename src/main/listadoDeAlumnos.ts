import { Exportable } from "./exportable";

export class ListadoDeAlumnos implements Exportable{
    getDatos(): Map<number, string[]> {
        const alumnos= new Map<number,string[]>();
        alumnos.set(0,["Nombre","Apellido"]);
        alumnos.set(1,["Tomas","Katz"]);
        return alumnos;
        //return new Map<number, string[]>();
        //throw new Error("Method not implemented.");
    }
    
}