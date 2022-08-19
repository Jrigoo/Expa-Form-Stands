/* LCs ID 
Dependiendo de la segmentacion checar pa que comite hay que enviar a la gente
UTP -> 193
Chriqui -> 2334
Balboa -> 2424
USMA -> 1473
COCLE -> 2453
UP -> 1949
SANTIAGO -> 1707
VE -> 2008
*/

import { IAtributos } from "./interfaces";

export const SEGMENTACION = {
  Santiago: [
    "Universidad de Panamá - Los Santos",
    "Universidad Latina - Chitré",
    "Universidad Abierta y a Distancia - Sede Penonomé",
    "No estudiando actualmente - Coclé",
    "Universidad Latina de Panamá - Sede Chitré",
    "UDI Universidad del Istmo - Chitré",
    "ISAE - Chitré, Herrera",
    "USMA - Chitré",
    "UDI Universidad del Istmo - Las Tablas",
    "UDELAS - Coclé",
    "Universidad de Panamá - Coclé",
    "Universidad Tecnológica de Panamá - Coclé",
    "ISAE - Penonomé, Coclé",
    "Universidad Latina - Penonomé",
    "Universidad Tecnológica de Panamá - Chiriquí",
    "No estudiando actualmente - Chiriqui",
    "Universidad de Panamá - Bocas del Toro",
    "Universidad Tecnológica de Panamá - Bocas del Toro",
    "UDELAS - Chiriquí",
    "UDI Universidad del Istmo - Changuinola",
    "USMA - Chiriquí",
    "Universidad Autonoma de Chiriquí (UNACHI)",
    "Universidad de Cartago",
    "UDI Universidad del Istmo - Chiriquí",
    "ISAE - Changuinola, Bocas del Toro",
    "ISAE - David, Chiriquí",
    "Universidad Latina - Chiriquí",
    "Universidad Tecnológica Oteima - Chiriquí",
    "UDI Universidad del Istmo - Sede Veraguas",
    "Universidad de Panamá - Azuero",
    "Universidad Tecnológica de Panamá - Sede Veraguas",
    "Universidad Abierta y a Distancia - Sede Santiago",
    "USMA - Sede Veraguas",
    "UDELAS - Sede Veraguas",
    "Universidad Latina de Panamá - Sede Veraguas",
    "Universidad de Panamá | Centro Regional de Azuero",
    "UDELAS - Azuero",
    "Universidad Tecnológica de Panamá - Azuero",
    "No estudiando actualmente - Veraguas",
    "Universidad Tecnológica Oteima - Santiago",
    "UDELAS - Veraguas",
    "ISAE - Santiago, Veraguas",
    "Universidad de Panamá - Veraguas",
  ],
  UP: [
    "QLU Panama - University of Louisville",
    "Universidad de Panamá - Panamá Oeste",
    "Universidad de Panamá - Colón",
    "Universidad de San Francisco de Panamá",
    "Universidad de Panamá - Panamá Este",
    "UDI Universidad del Istmo - Campus Ciudad de Panamá",
    "ISTHMUS",
    "No estudiando actualmente - UDI",
    "Universidad de Panamá - Sede Ciudad de Panamá",
    "UDI Universidad del Istmo - Panamá",
    "EAFIT",
    "Universidad Americana - Pmá. Oeste",
    "Universidad de Panamá - Darién",
    "UDELAS - Campus Ciudad de Panamá",
    "Florida State University",
    "UDI Universidad del Istmo - Los Pueblos",
    "Universidad Americana - Los Pueblos",
    "Columbus University",
    "No estudiando actualmente - Universidad de Panamá",
  ],
  UTP: [
    "Escuela de Arquitectura y Diseño de America Latina y el Caribe",
    "ISAE - Metetí, Darién",
    "UDI Universidad del Istmo - Chorrera",
    "ISAE - La Chorrera, Pmá Oeste",
    "Universidad de Panamá - San Miguelito",
    "USMA - Colón",
    "Universidad Santander",
    "Universidad Tecnológica de Panamá - Colón",
    "Universidad Americana - El Carmen",
    "Universidad Abierta y a Distancia - Sede Ciudad de Panamá",
    "UDELAS - Colón",
    "Universidad Americana - Campus Ciudad de Panamá",
    "Universidad Latina - Fac. Ciencias de la Salud",
    "International University (INTERUNI)",
    "Universidad Interamericana de Panamá (UIP)",
    "Universidad del Arte Ganexa",
    "UMECIT",
    "Universidad Latina de Panamá - Ciudad Capital",
    "ISAE - Campus Central - Ciudad de Panamá",
    "Universidad Tecnológica de Panamá - Panamá Oeste",
    "UDI Universidad del Istmo - Colón",
    "INCAE - Business School",
    "Universidad Hispoamericana de Panamá",
    "Universidad de Alta Dirección",
    "ADEN International Business School - Ciudad de Panamá",
    "Universidad Panamericana (UPAM)",
    "Universidad Marítima Internacional de Panamá",
    "Universidad Cristiana de Panamá",
    "Universidad Internacional de Ciencia y Tecnología UNICYT",
    "ULACEX",
    "No estudiando actualmente - USMA",
    "USMA - Campus Ciudad de Panamá",
    "No estudiando actualmente - UTP",
    "Universidad Tecnológica de Panamá - Sede Ciudad de Panamá",
    "Otro",
  ],
  VE: ["Otro"],
};

/* IDs de EXPA y Podio */
export const LCIDs = {
  Chiriquí: [2334, 5],
  Coclé: [2453, 3],
  Santiago: [1707, 4],
  UP: [1949, 2],
  UTP: [193, 1],
  VE: [2008, 6],
};

export const UNIVERSIDADES = [
  "Escuela de Arquitectura y Diseño de America Latina y el Caribe",
  "ISAE - Metetí, Darién",
  "UDI Universidad del Istmo - Chorrera",
  "ISAE - La Chorrera, Pmá Oeste",
  "Universidad de Panamá - San Miguelito",
  "USMA - Colón",
  "Universidad Santander",
  "Universidad Tecnológica de Panamá - Colón",
  "Universidad Americana - El Carmen",
  "Universidad Abierta y a Distancia - Sede Ciudad de Panamá",
  "UDELAS - Colón",
  "Universidad Americana - Campus Ciudad de Panamá",
  "Universidad Latina - Fac. Ciencias de la Salud",
  "International University (INTERUNI)",
  "Universidad Interamericana de Panamá (UIP)",
  "Universidad del Arte Ganexa",
  "UMECIT",
  "Universidad Latina de Panamá - Ciudad Capital",
  "ISAE - Campus Central - Ciudad de Panamá",
  "Universidad Tecnológica de Panamá - Panamá Oeste",
  "UDI Universidad del Istmo - Colón",
  "INCAE - Business School",
  "Universidad Hispoamericana de Panamá",
  "Universidad de Alta Dirección",
  "ADEN International Business School - Ciudad de Panamá",
  "Universidad Panamericana (UPAM)",
  "Universidad Marítima Internacional de Panamá",
  "Universidad Cristiana de Panamá",
  "Universidad Internacional de Ciencia y Tecnología UNICYT",
  "ULACEX",
  "No estudiando actualmente - USMA",
  "USMA - Campus Ciudad de Panamá",
  "No estudiando actualmente - UTP",
  "Universidad Tecnológica de Panamá - Sede Ciudad de Panamá",
  "Otro",
  "QLU Panama - University of Louisville",
  "Universidad de Panamá - Panamá Oeste",
  "Universidad de Panamá - Colón",
  "Universidad de San Francisco de Panamá",
  "Universidad de Panamá - Panamá Este",
  "UDI Universidad del Istmo - Campus Ciudad de Panamá",
  "ISTHMUS",
  "No estudiando actualmente - UDI",
  "Universidad de Panamá - Sede Ciudad de Panamá",
  "UDI Universidad del Istmo - Panamá",
  "EAFIT",
  "Universidad Americana - Pmá. Oeste",
  "Universidad de Panamá - Darién",
  "UDELAS - Campus Ciudad de Panamá",
  "Florida State University",
  "UDI Universidad del Istmo - Los Pueblos",
  "Universidad Americana - Los Pueblos",
  "Columbus University",
  "No estudiando actualmente - Universidad de Panamá",
  "UDI Universidad del Istmo - Sede Veraguas",
  "Universidad de Panamá - Azuero",
  "Universidad Tecnológica de Panamá - Sede Veraguas",
  "Universidad Abierta y a Distancia - Sede Santiago",
  "USMA - Sede Veraguas",
  "UDELAS - Sede Veraguas",
  "Universidad Latina de Panamá - Sede Veraguas",
  "Universidad de Panamá | Centro Regional de Azuero",
  "UDELAS - Azuero",
  "Universidad Tecnológica de Panamá - Azuero",
  "No estudiando actualmente - Veraguas",
  "Universidad Tecnológica Oteima - Santiago",
  "UDELAS - Veraguas",
  "ISAE - Santiago, Veraguas",
  "Universidad de Panamá - Veraguas",
  "Universidad de Panamá - Los Santos",
  "Universidad Latina - Chitré",
  "Universidad Abierta y a Distancia - Sede Penonomé",
  "No estudiando actualmente - Coclé",
  "Universidad Latina de Panamá - Sede Chitré",
  "UDI Universidad del Istmo - Chitré",
  "ISAE - Chitré, Herrera",
  "USMA - Chitré",
  "UDI Universidad del Istmo - Las Tablas",
  "UDELAS - Coclé",
  "Universidad de Panamá - Coclé",
  "Universidad Tecnológica de Panamá - Coclé",
  "ISAE - Penonomé, Coclé",
  "Universidad Latina - Penonomé",
  "Universidad Tecnológica de Panamá - Chiriquí",
  "No estudiando actualmente - Chiriqui",
  "Universidad de Panamá - Bocas del Toro",
  "Universidad Tecnológica de Panamá - Bocas del Toro",
  "UDELAS - Chiriquí",
  "UDI Universidad del Istmo - Changuinola",
  "USMA - Chiriquí",
  "Universidad Autonoma de Chiriquí (UNACHI)",
  "Universidad de Cartago",
  "UDI Universidad del Istmo - Chiriquí",
  "ISAE - Changuinola, Bocas del Toro",
  "ISAE - David, Chiriquí",
  "Universidad Latina - Chiriquí",
  "Universidad Tecnológica Oteima - Chiriquí",
];

export const PODIO_REFERENTES = {
  "Amig@": 1,
  "Información en el campus": 2,
  "Presentación en aula de clases": 3,
  Facebook: 4,
  Twitter: 6,
  Instagram: 8,
  LinkedIn: 9,
  "Otra red social": 7,
  "Motor de busqueda": 11,
  Evento: 12,
  Emails: 13,
  Telegram: 14,
  "Medios (Revista, TV, Periódico o radio)": 16,
  Otro: 17,
};

export const EXPA_REFERENTES = {
  "Amig@": "Friend",
  "Información en el campus": "Information booth on campus",
  "Presentación en aula de clases": "Classroom presentation",
  Facebook: "Facebook",
  Twitter: "Twitter",
  Instagram: "Instagram",
  LinkedIn: "LinkedIn",
  "Otra red social": "Other social media channel",
  "Motor de busqueda": "Search engine",
  Evento: "Event",
  Emails: "Emails",
  Telegram: "Telegram",
  "Medios (Revista, TV, Periódico o radio)":
    "Media (magazine, TV, newspaper or radio)",
  Otro: "Other",
};

export const EXPA_PROGRAMAS = {
  Pasantia: 8,
  Voluntariado: 7,
  Profesor: 9,
};

export const PODIO_PROGRAMAS = {
  Pasantia: 4,
  Voluntariado: 1,
  Profesor: 5,
};

export const BACKGROUNDS = [
  "Contabilidad",
  "Ingeniería Aeroespacial",
  "Agricultura",
  "Antropología",
  "Arqueología",
  "Arquitectura",
  "Arte",
  "Seguros",
  "Auditorías",
  "Ingeniería automotriz",
  "Banca",
  "Bioingeniería",
  "Biología",
  "Ciencia Biomédica",
  "Administración de Empresas",
  "Ingeniería Química",
  "Química",
  "Ingeniería civil",
  "Comunicación y periodismo",
  "Ingeniería Informática",
  "Ciencias de la Computación",
  "Diseño",
  "Ciencias de la Tierra",
  "Ecología",
  "Ciencias económicas",
  "Educación",
  "Ingeniería eléctrica",
  "Ingeniería electrónica",
  "Emprendimiento",
  "Ingeniería Ambiental",
  "Finanzas",
  "Geografía",
  "Diseño gráfico",
  "Ciencia de la salud",
  "Historia",
  "Recursos humanos",
  "Diseño industrial",
  "Ingeniería Industrial",
  "Relaciones Internacionales",
  "Comercio internacional",
  "Idiomas",
  "Ley",
  "Lingüística",
  "Literatura",
  "Logística",
  "Marketing",
  "Ingeniería de materiales",
  "Matemáticas",
  "Ingeniería Mecánica",
  "Artes de los medios",
  "Medicina",
  "Ciencias militares",
  "Música",
  "Nanotecnología",
  "Enfermería",
  "Nutrición",
  "Ingeniería del Petróleo",
  "Filosofía",
  "Física",
  "Ciencias Políticas",
  "Psicología",
  "Administración Pública",
  "Relaciones públicas",
  "Religión",
  "Trabajo Social",
  "Sociología",
  "Ingeniería o Desarrollo de software",
  "Deportes",
  "Estadísticas",
  "Ingeniería en Sistemas y Computación",
  "Ingeniería en Telecomunicaciones",
  "Teatro",
  "Turismo y gestión hotelera",
  "Veterinaria",
  "Otro",
];

export const EXPA_BACKGROUNDS = {
  Contabilidad: 10224,
  "Ingeniería Aeroespacial": 10225,
  Agricultura: 10226,
  Antropología: 11275,
  Arqueología: 10227,
  Arquitectura: 10228,
  Arte: 10229,
  Seguros: 11276,
  Auditorías: 11277,
  "Ingeniería automotriz": 10230,
  Banca: 10231,
  Bioingeniería: 11278,
  Biología: 10232,
  "Ciencia Biomédica": 11279,
  "Administración de Empresas": 10233,
  "Ingeniería Química": 10234,
  Química: 10235,
  "Ingeniería civil": 10236,
  "Comunicación y periodismo": 10237,
  "Ingeniería Informática": 10238,
  "Ciencias de la Computación": 10239,
  Diseño: 11280,
  "Ciencias de la Tierra": 11281,
  Ecología: 11282,
  "Ciencias económicas": 10240,
  Educación: 10241,
  "Ingeniería eléctrica": 10242,
  "Ingeniería electrónica": 10243,
  Emprendimiento: 11283,
  "Ingeniería Ambiental": 10244,
  Finanzas: 10245,
  Geografía: 10246,
  "Diseño gráfico": 10247,
  "Ciencia de la salud": 11284,
  Historia: 11285,
  "Recursos humanos": 11286,
  "Diseño industrial": 11287,
  "Ingeniería Industrial": 10248,
  "Relaciones Internacionales": 10249,
  "Comercio internacional": 11288,
  Idiomas: 11289,
  Ley: 10250,
  Lingüística: 10251,
  Literatura: 10252,
  Logística: 11290,
  Marketing: 10253,
  "Ingeniería de materiales": 10254,
  Matemáticas: 10255,
  "Ingeniería Mecánica": 10256,
  "Artes de los medios": 11291,
  Medicina: 10257,
  "Ciencias militares": 10258,
  Música: 11292,
  Nanotecnología: 10259,
  Enfermería: 11293,
  Nutrición: 21248,
  Otro: 10271,
  "Ingeniería del Petróleo": 11294,
  Filosofía: 10260,
  Física: 10261,
  "Ciencias Políticas": 10262,
  Psicología: 10263,
  "Administración Pública": 10264,
  "Relaciones públicas": 10265,
  Religión: 10266,
  "Trabajo Social": 11295,
  Sociología: 10267,
  "Ingeniería o Desarrollo de software": 10268,
  Deportes: 11296,
  Estadísticas: 11297,
  "Ingeniería en Sistemas y Computación": 11298,
  "Ingeniería en Telecomunicaciones": 10269,
  Teatro: 11299,
  "Turismo y gestión hotelera": 10270,
  Veterinaria: 21247,
};

export const NIVEL_INGLES = {
  "A1 - Principiante": 1,
  "A2 - Elemental": 2,
  "B1 - Intermedio": 3,
  "B2 - Intermedio Alto": 4,
  "C1 - Avanzado": 5,
  "C2 - Nativo": 6,
};

export const ESTUDIOS = {
  Bachiller: 3,
  Técnico: 4,
  "Pregrado (cursando)": 5,
  "Pregrado (graduado)": 6,
  Postgrado: 7,
  "Doctorado/Maestria": 11,
};

export const FORMINPUTS: Array<IAtributos> = [
  {
    titulo: "Nombre",
    name: "First Name",
    tipo: "text",
    placeholder: "Juan",
  },
  {
    titulo: "Apellido",
    name: "Last Name",
    tipo: "text",
    placeholder: "González",
  },
  {
    titulo: "Edad",
    name: "Edad",
    tipo: "text",
    placeholder: "21",
  },
  {
    titulo: "Email",
    name: "Email",
    tipo: "email",
    placeholder: "juan@gmail.com",
  },
  {
    titulo: "Número de celular",
    name: "Phone",
    tipo: "text",
    placeholder: "+507 6xxx-xxxx",
  },
  {
    titulo: "Contraseña",
    name: "Password",
    tipo: "password",
    placeholder: "Juan12345",
    info: "Contraseña para tu cuenta de AIESEC.org",
  },
];

export const DROPDOWNITEMS = [
  {
    titulo: "¿Como te enteraste de nosotros?",
    name: "Referral",
    data: Object.keys(PODIO_REFERENTES),
    placeholder: "Redes Sociales, periodico, etc ...",
  },
  {
    titulo: "Universidad",
    name: "Universidad",
    data: UNIVERSIDADES,
    placeholder: "Universidad ...",
  },
  {
    titulo: "Carrera o Background profesional",
    name: "Background",
    data: BACKGROUNDS,
    placeholder: "Licenciatura en ...",
  },
  {
    titulo: "Nivel de Ingles",
    name: "Ingles",
    data: Object.keys(NIVEL_INGLES),
    placeholder: "...",
  },
  {
    titulo: "Estudios",
    name: "Estudios",
    data: Object.keys(ESTUDIOS),
    placeholder: "...",
  },
];

export const MULTISELECTITEMS = [
  {
    titulo: "¿Programa de interes?",
    name: "Referral",
    data: ["Pasantia", "Voluntariado", "Profesor"],
    placeholder: "Voluntariado, Pasantia ...",
    info: "Puedes seleccionar varios programas",
  },
];
