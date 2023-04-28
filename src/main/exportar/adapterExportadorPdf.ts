import { Exportable } from "../main/exportable";

export interface AdapterExportadorPdf{
    exportarAPdf(exportable:Exportable):string;
}