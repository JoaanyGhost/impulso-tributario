import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faDollarSign,
  faFile,
  faGavel,
  faLandmark,
  faMoneyBill,
  faPaste,
  faPuzzlePiece,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';

export interface Service {
  /** Identificador corto; también se envía al formulario de consulta */
  id: string;
  name: string;
  icon: IconProp;
  text: string;
}

export const SERVICES: Service[] = [
  {
    id: 'consultoria',
    name: 'Consultoría en Materia Tributaria',
    icon: faMoneyBill,
    text: 'Nuestros especialistas te brindarán asesoramiento completo en materia tributaria, para ayudarte a tomar decisiones financieras sólidas y cumplir con tus imposiciones fiscales.',
  },
  {
    id: 'defensa-administrativa',
    name: 'Defensa en Sede Administrativa y Judicial',
    icon: faScaleBalanced,
    text: 'Nos encargamos de tu representación ante la Autoridad Tributaria, Entes Territoriales, igualmente acompañamos tus procesos de fiscalización de La Unidad de Gestión Pensional y Parafiscales -UGPP., garantizando la defensa de tus derechos en los procedimientos administrativos.',
  },
  {
    id: 'planeacion',
    name: 'Planeación Tributaria y Corporativa',
    icon: faPuzzlePiece,
    text: 'Diseñamos estrategias de planificación tributaria con diferentes alternativas de procedimientos legales, los cuales permites utilizar las normas que regulan el sistema tributario para personas naturales y jurídicas, optimizando tus recursos y minimizando riesgos fiscales.',
  },
  {
    id: 'devoluciones',
    name: 'Solicitud de Devolución y Pagos de lo no Debido',
    icon: faFile,
    text: 'Te asistimos en la presentación de solicitudes de devolución por concepto de saldos a favor originados en declaraciones privadas y en la gestión por pagos en exceso ante la Autoridad Tributaria.',
  },
  {
    id: 'declaraciones',
    name: 'Presentación de Declaraciones Tributarias',
    icon: faPaste,
    text: 'Gestionamos la presentación de tus declaraciones tributarias ante la DIAN, asegurando el cumplimiento puntual de tus obligaciones fiscales.',
  },
  {
    id: 'contencioso',
    name: 'Defensa Judicial en lo Contencioso Administrativo',
    icon: faGavel,
    text: 'Brindamos representación legal en procedimientos contenciosos administrativos frente a los actos proferidos por la UAE DIAN, Autoridades Territoriales y La Unidad de Gestión Pensional y Parafiscales -UGPP.',
  },
  {
    id: 'sentencias',
    name: 'Compra de Sentencias Judiciales',
    icon: faDollarSign,
    text: 'Te Ofrecemos servicios de compra de sentencias judiciales con el objeto de brindar soluciones de liquidez tanto a las víctimas de Entidades Estatales como a sus apoderados, brindando soluciones efectivas y oportunas.',
  },
  {
    id: 'delitos',
    name: 'Delitos Tributarios',
    icon: faLandmark,
    text: 'Con nuestros expertos te proporcionamos asistencia jurídica en los delitos fiscales tipificados en el Código Penal colombiano, como las sanciones tributarias de carácter administrativo que se establecen en las diferentes normas fiscales implementadas por las autoridades tributarias en Colombia.',
  },
];
