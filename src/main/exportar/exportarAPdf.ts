import { EstrategiaDeExportacion } from "../main/estrategiaDeExportacion";
import { Exportable } from "../main/exportable";
import { AdapterExportadorPdf } from "./adapterExportadorPdf";
export class ExportarAPdf implements EstrategiaDeExportacion{
    private adapter?: AdapterExportadorPdf;
    constructor 
    exportar(exportable: Exportable): string {      //Aca es distinto a Excel, porque puede cambiar la biblioteca a terceros
        return this.adapter!!.exportarAPdf(exportable);
    }
    
}