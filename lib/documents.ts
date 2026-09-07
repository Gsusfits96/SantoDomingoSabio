import { existsSync } from "node:fs";
import path from "node:path";

/**
 * DOCUMENTOS DESCARGABLES — centralizado.
 *
 * Los PDF se colocan en /public/documentos/ con el nombre exacto indicado
 * en `file`. La página de admisiones muestra las tarjetas de descarga
 * automáticamente; si el archivo no existe, su tarjeta no aparece (así no
 * hay enlaces rotos).
 *
 * - Títulos y descripciones: messages/*.json → Admissions.documents.items
 * - Nombres de archivo: este archivo.
 *
 * En producción, al subir un PDF nuevo hay que reconstruir el sitio
 * (npm run build).
 */

export type AdmissionDocument = {
  /** Debe coincidir con el id en Admissions.documents.items (es.json / en.json). */
  id: string;
  /** Nombre del PDF dentro de public/documentos/. */
  file: string;
};

export const admissionDocuments: AdmissionDocument[] = [
  { id: "proceso", file: "proceso-admision-2027.docx" },
  { id: "inscripcion", file: "formulario-inscripcion-2027.pdf" },
  { id: "matricula", file: "formulario-matricula-2027.docx" },
  { id: "curriculum", file: "diseno-curricular-2026.xlsx" },
];

/**
 * Solo para uso en Server Components / API (usa node:fs).
 * Devuelve los documentos cuyo archivo existe realmente en public/documentos/,
 * junto con su extensión (PDF, DOCX, XLSX…) para mostrarla en la tarjeta.
 */
export function getAvailableDocuments(): { id: string; url: string; ext: string }[] {
  const dir = path.join(process.cwd(), "public", "documentos");
  return admissionDocuments
    .filter((doc) => existsSync(path.join(dir, doc.file)))
    .map((doc) => ({
      id: doc.id,
      url: `/documentos/${doc.file}`,
      ext: path.extname(doc.file).slice(1).toUpperCase(),
    }));
}
