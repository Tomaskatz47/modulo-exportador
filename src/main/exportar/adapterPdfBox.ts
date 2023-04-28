import { Exportable } from "../main/exportable";
import { AdapterExportadorPdf } from "./adapterExportadorPdf";

export class AdapterPdfBox implements AdapterExportadorPdf{
    exportarAPdf(exportable: Exportable): string {
        return "";
    }
    
}