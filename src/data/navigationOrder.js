import { BACH_FLOWERS_DATA } from './bachFlowers';

export const BIOMAGNETISMO_ORDER = [
  { path: "/biomagnetismo", label: "Guía de Biomagnetismo" },
  { path: "/par-biomagnetico", label: "El Par Biomagnético" },
  { path: "/origen-biomagnetismo", label: "Origen del Enfoque" },
  { path: "/biomagnetismo-infantil", label: "Biomagnetismo Infantil" },
  { path: "/campos-magneticos", label: "Campos Magnéticos" },
  { path: "/pares-temporales", label: "Pares Temporales" },
  { path: "/alergias", label: "Gestión de Alergias" }
];

export const FLORES_ORDER = [
  { path: "/flores-bach", label: "Terapia Floral" },
  { path: "/catalogo-flores", label: "Catálogo de Flores" },
  // Inyección dinámica de las 38 flores para navegación asistida
  ...BACH_FLOWERS_DATA.map(flor => ({
    path: `/flores-de-bach/${flor.id}`,
    label: flor.name
  })),
  { path: "/consultas-online", label: "Consultas Online" }
];

// Secuencia Maestra para el FloatingNextNav
export const GLOBAL_NAVIGATION_SEQUENCE = [
  { path: "/", label: "Inicio" },
  ...BIOMAGNETISMO_ORDER,
  ...FLORES_ORDER,
  { path: "/contacto", label: "Contacto" }
];