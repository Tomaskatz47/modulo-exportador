import { EstrategiaDeExportacion } from "./estrategiaDeExportacion";
import { Exportable } from "./exportable";

export class Exportador {
    public exportar(exportable:Exportable, estrategia:EstrategiaDeExportacion): string {
        return estrategia.exportar(exportable);                  //la ruta del archivo que acabo de generar
    }

}