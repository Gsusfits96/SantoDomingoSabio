import { stockPhoto } from "@/components/Figure";

/**
 * FOTOS — centralizado.
 *
 * Ahora mismo usa fotografías temporales (Lorem Picsum) para que el sitio se vea
 * completo. Cuando el colegio suba sus fotos a /public/photos/, basta con
 * reemplazar cada entrada por la ruta local, por ejemplo:
 *   homeIntro: "/photos/inicio.jpg",
 */
export const photos = {
  homeIntro: stockPhoto("sds-estudiantes-sonriendo"),
  journey: [
    stockPhoto("sds-prekinder-aula"),
    stockPhoto("sds-primaria-lectura"),
    stockPhoto("sds-premedia-ciencias"),
    stockPhoto("sds-bachillerato-graduacion"),
  ],
  aboutMission: stockPhoto("sds-comunidad-fe"),
  aboutVision: stockPhoto("sds-estudiantes-futuro"),
  gallery: [
    stockPhoto("sds-instalaciones"),
    stockPhoto("sds-aula-brillante"),
    stockPhoto("sds-deportes-patio"),
    stockPhoto("sds-misa-espiritualidad"),
    stockPhoto("sds-arte-folklore"),
    stockPhoto("sds-graduacion-birrete"),
  ],
  video: stockPhoto("sds-recorrido-colegio", 1280, 720),
};
