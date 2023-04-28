import { EstrategiaDeExportacion } from "../main/estrategiaDeExportacion";
import { Exportable } from "../main/exportable";

export class exportarAExcel implements EstrategiaDeExportacion{
    exportar(exportable: Exportable): string {
        //Aca debemos acoplarnos a una biblioteca de terceros
        return "";
    }
    
}