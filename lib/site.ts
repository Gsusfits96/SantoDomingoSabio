// ============================================================
//  Contenido institucional central — Escuela Bilingüe Santo Domingo Savio
//  Una sola fuente de verdad para todas las páginas.
// ============================================================

export const site = {
  name: "Escuela Bilingüe Santo Domingo Savio",
  shortName: "Santo Domingo Savio",
  initials: "SDS",
  tagline: "Formación integral para el futuro.",
  description:
    "Centro educativo bilingüe en Don Bosco, Panamá. Formación integral cristiana inspirada en el Sistema Preventivo, desde Pre-Kínder hasta Bachillerato.",
  director: "Mgtr. Nelvin Babacaris",
  students: 766,
  founded: 1987,
  location: "Calle 5ta, Don Bosco, Panamá",
  phones: ["293 7879", "293 9520"],
  instagram: "@ebsds1987",
  instagramUrl: "https://instagram.com/ebsds1987",
  facebookUrl: "https://facebook.com",
  academicaUrl: "https://www.academicanet.com", // Portal Académica (enlace directo)
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Calle+5ta+Don+Bosco+Panama",
  mapEmbed:
    "https://www.google.com/maps?q=Calle%205ta%20Don%20Bosco%2C%20Panama&output=embed",
};

export type NavItem = { key: string; href: string };

export const navItems: NavItem[] = [
  { key: "inicio", href: "/" },
  { key: "nosotros", href: "/nosotros" },
  { key: "oferta", href: "/oferta-academica" },
  { key: "vida", href: "/vida-escolar" },
  { key: "admisiones", href: "/admisiones" },
  { key: "contacto", href: "/contacto" },
];

// ---------- Línea de tiempo (Nosotros) ----------
export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "1984",
    title: "Capilla María Auxiliadora",
    description:
      "Los inicios de la obra educativa están ligados a la Capilla María Auxiliadora, semilla de la comunidad de Don Bosco.",
  },
  {
    year: "1987",
    title: "El Padre Marino Morlin abre las clases",
    description:
      "En salones parroquiales, con 10 niños en Pre-Kínder y 5 en Kínder, nace formalmente la escuela.",
  },
  {
    year: "1989",
    title: "Permiso provisional",
    description:
      "El 1 de julio de 1989 se otorga el permiso provisional para funcionar como centro educativo.",
  },
  {
    year: "1995",
    title: "Permiso Permanente MEDUCA",
    description:
      "El 3 de julio de 1995, bajo la tutela de la Arquidiócesis de Panamá y el P. Jorge Rivera Rodríguez, se obtiene el permiso permanente.",
  },
  {
    year: "Hoy",
    title: "Centro bilingüe de referencia",
    description:
      "Con 766 estudiantes y bachilleratos consolidados, bajo la dirección del Mgtr. Nelvin Babacaris, somos referente en Don Bosco.",
  },
];

// ---------- Oferta académica ----------
export type Level = {
  id: string;
  name: string;
  grades: string;
  hours: string;
  totalHours?: string;
  subjectCount?: string;
  accent: "verde" | "celeste" | "mixed";
  description: string;
  areas: { name: string; subjects: string[] }[];
  tags: string[];
};

export const levels: Level[] = [
  {
    id: "pre-escolar",
    name: "Pre-Escolar",
    grades: "Pre-Kínder y Kínder",
    hours: "36 h / semana",
    accent: "celeste",
    description:
      "Acompañamos los primeros años con un enfoque en el desarrollo socio-afectivo, cognitivo y psicomotor.",
    areas: [
      {
        name: "Área Socio-afectiva",
        subjects: ["Folklore", "Religión", "Misa", "Inteligencia Emocional"],
      },
      {
        name: "Área Cognitiva Lingüística",
        subjects: [
          "Inglés (6h)",
          "Lenguaje (5h)",
          "Matemáticas (5h)",
          "Informática / Robótica (2h)",
        ],
      },
      { name: "Área Psicomotora", subjects: ["Desarrollo motriz", "Juego dirigido"] },
    ],
    tags: ["Bilingüe", "Robótica", "Inteligencia Emocional"],
  },
  {
    id: "primaria",
    name: "Primaria",
    grades: "1° a 6°",
    hours: "40 h / semana",
    accent: "verde",
    description:
      "Bases sólidas con reforzamiento intensivo de inglés y formación en valores a lo largo de los seis grados.",
    areas: [
      {
        name: "Núcleo académico",
        subjects: [
          "Inglés (10h)",
          "Matemáticas (5–6h)",
          "Informática",
          "Robótica",
        ],
      },
      {
        name: "Formación integral",
        subjects: ["Folklore", "Formación Espiritual", "Expresiones Artísticas"],
      },
    ],
    tags: ["Inglés intensivo 10h", "STEM", "Arte y Folklore"],
  },
  {
    id: "pre-media",
    name: "Pre-Media",
    grades: "7° a 9°",
    hours: "45 h / semana",
    accent: "mixed",
    description:
      "Preparación intermedia que introduce al mundo del comercio y consolida el pensamiento científico y ciudadano.",
    areas: [
      {
        name: "Especialización",
        subjects: [
          "Introducción al Comercio (8°)",
          "Introducción a la Contabilidad (9°)",
        ],
      },
      {
        name: "Formación general",
        subjects: ["Ciencias", "Geografía", "Historia", "Cívica", "Inglés (10h)"],
      },
    ],
    tags: ["Introducción al Comercio", "Ciencias", "Inglés 10h"],
  },
  {
    id: "bachillerato-comercio",
    name: "Bachillerato en Comercio Bilingüe",
    grades: "10° a 12°",
    hours: "",
    totalHours: "270 h totales",
    subjectCount: "34 asignaturas",
    accent: "celeste",
    description:
      "Formación especializada bilingüe orientada al mundo empresarial y la gestión, con práctica profesional.",
    areas: [
      {
        name: "Asignaturas destacadas",
        subjects: [
          "Computer Business Application",
          "Business Accounting II & III",
          "Business Management & Human Resources",
          "Office Management",
          "Mercadotecnia",
          "Professional Practice",
        ],
      },
    ],
    tags: ["Bilingüe", "Contabilidad", "Management", "Marketing"],
  },
  {
    id: "bachillerato-ciencias",
    name: "Bachillerato en Ciencias",
    grades: "10° a 12°",
    hours: "",
    totalHours: "131 h totales",
    subjectCount: "33 asignaturas",
    accent: "verde",
    description:
      "Enfoque científico riguroso que prepara a los estudiantes para la universidad y los retos del futuro.",
    areas: [
      {
        name: "Núcleo científico",
        subjects: [
          "Biología (5h/sem)",
          "Química (5h/sem)",
          "Física (5h/sem)",
          "Matemáticas (5h/sem)",
          "Tecnología de la Información",
          "Gestión Empresarial",
        ],
      },
    ],
    tags: ["Ciencias", "Tecnología", "Gestión Empresarial"],
  },
];

// ---------- Tarifario 2027 ----------
export type PriceRow = {
  nivel: string;
  inscripcion: string;
  mantenimiento: string;
  total: string;
  mensualidad: string;
  nota?: string;
};

export const pricing: PriceRow[] = [
  { nivel: "Pre-Kínder", inscripcion: "$125.00", mantenimiento: "$110.00", total: "$235.00", mensualidad: "$145.00" },
  { nivel: "Kínder", inscripcion: "$125.00", mantenimiento: "$130.00", total: "$255.00", mensualidad: "$145.00", nota: "Incluye Lab. Informática" },
  { nivel: "1° y 2° Grado", inscripcion: "$130.00", mantenimiento: "$150.00", total: "$280.00", mensualidad: "$150.00", nota: "Incluye Lab. Lenguas" },
  { nivel: "3° a 6° Grado", inscripcion: "$135.00", mantenimiento: "$150.00", total: "$285.00", mensualidad: "$155.00" },
  { nivel: "7° a 9° (Pre-Media)", inscripcion: "$145.00", mantenimiento: "$160.00", total: "$305.00", mensualidad: "$165.00", nota: "Incluye Lab. Ciencias" },
  { nivel: "10° a 12° (Ciencias)", inscripcion: "$154.00", mantenimiento: "$170.00", total: "$324.00", mensualidad: "$195.00", nota: "Lab. Ciencias $20 + Lenguas $20" },
  { nivel: "10° a 12° (Comercio)", inscripcion: "$154.00", mantenimiento: "$170.00", total: "$324.00", mensualidad: "$195.00", nota: "Lab. Inf. Comercial $20 + Lenguas $20" },
];

export const gastosFijos: { item: string; monto: string }[] = [
  { item: "Mantenimiento", monto: "$20" },
  { item: "Gabinete Psicopedagógico", monto: "$5" },
  { item: "Seguro de Accidentes", monto: "$30" },
  { item: "Enfermería", monto: "$5" },
  { item: "Carnet Estudiantil", monto: "$5" },
  { item: "Material Didáctico", monto: "$20" },
  { item: "Plataforma Académica", monto: "$25" },
];

// ---------- Proceso de admisión (Wizard) ----------
export type AdmisionStep = {
  step: string;
  title: string;
  description: string;
  details: string[];
};

export const admisionSteps: AdmisionStep[] = [
  {
    step: "01",
    title: "Requisitos Académicos y Disciplinarios",
    description:
      "Verificamos el expediente académico y disciplinario del aspirante.",
    details: [
      "Promedio mínimo de 4.0 en Primaria",
      "Promedio mínimo de 3.5 por materia en Secundaria",
      "Expeditivo disciplinario impecable (sin marcas de R o X en el boletín)",
    ],
  },
  {
    step: "02",
    title: "Prueba Psicológica y de Conocimientos",
    description:
      "Solicita el pago de la prueba de admisión vía Banca en Línea de Banco General.",
    details: [
      "$50.00 para Preescolar / Primaria",
      "$60.00 para Secundaria",
      "Nota mínima requerida: 3.0 en el examen académico",
      "Nota mínima requerida: 85 en el test psicológico",
    ],
  },
  {
    step: "03",
    title: "Entrega de Resultados",
    description:
      "Comunicamos los resultados de manera directa y oportuna.",
    details: [
      "Resultados en 3 días hábiles",
      "Notificación vía telefónica",
    ],
  },
  {
    step: "04",
    title: "Formalización de la Matrícula",
    description:
      "Una vez aprobado, formaliza la matrícula en nuestras instalaciones.",
    details: [
      "5 días hábiles para formalizar la matrícula",
      "Atención presencial: lunes a viernes, 8:00 a.m. a 2:00 p.m.",
    ],
  },
];

// ---------- FAQ ----------
export const faqs: { q: string; a: string }[] = [
  {
    q: "¿Cuál es el promedio mínimo para postular?",
    a: "Se requiere un promedio mínimo de 4.0 en Primaria y de 3.5 por materia en Secundaria, además de un expeditivo disciplinario impecable.",
  },
  {
    q: "¿Cuánto cuesta la prueba de admisión y cómo se paga?",
    a: "La prueba de admisión cuesta $50.00 para Preescolar y Primaria, y $60.00 para Secundaria. El pago se solicita a través de la Banca en Línea de Banco General.",
  },
  {
    q: "¿Qué notas debo obtener en las pruebas?",
    a: "La nota mínima requerida es de 3.0 en el examen académico y de 85 en el test psicológico.",
  },
  {
    q: "¿En cuánto tiempo recibo los resultados?",
    a: "Los resultados se comunican en un plazo de 3 días hábiles, vía telefónica.",
  },
  {
    q: "¿Cuánto tiempo tengo para formalizar la matrícula?",
    a: "Una vez entregados los resultados, los acudientes cuentan con 5 días hábiles para formalizar la matrícula.",
  },
  {
    q: "¿Qué horario de atención tienen para admisiones?",
    a: "Atendemos de lunes a viernes, de 8:00 a.m. a 2:00 p.m. en nuestras instalaciones de Calle 5ta, Don Bosco.",
  },
  {
    q: "¿Desde qué edad aceptan estudiantes?",
    a: "Atendemos desde Pre-Kínder y Kínder hasta Bachillerato, ofreciendo formación bilingüe en todos los niveles.",
  },
  {
    q: "¿Cómo consulto las calificaciones de mi hijo(a)?",
    a: "A través de nuestra Plataforma Académica (Academica), accesible desde el botón 'Plataforma Académica' en el menú y al final de cada página.",
  },
];
