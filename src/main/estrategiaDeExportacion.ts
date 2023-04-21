import { Exportable } from "./exportable";

export interface EstrategiaDeExportacion{
    exportar(exportable:Exportable): string;
 }