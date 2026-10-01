import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faIdCard,
  faLock,
  faMoneyBillTransfer,
  faPuzzlePiece,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';

export interface Service {
  /** Identificador corto; también se envía al formulario de consulta */
  id: string;
  name: string;
  icon: IconProp;
  topics: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'defensa',
    name: 'Defensa ante la DIAN',
    icon: faScaleBalanced,
    topics: [
      'Recursos de reconsideración',
      'Respuesta a requerimientos especiales',
      'Liquidaciones oficiales',
      'Emplazamientos y sanciones',
      'Procesos de fiscalización',
    ],
  },
  {
    id: 'devoluciones',
    name: 'Devoluciones y compensaciones',
    icon: faMoneyBillTransfer,
    topics: [
      'Saldos a favor',
      'Devolución de renta',
      'Devolución de IVA',
      'Recursos contra inadmisiones',
    ],
  },
  {
    id: 'cobro',
    name: 'Cobro tributario',
    icon: faLock,
    topics: [
      'Facilidades de pago',
      'Acuerdos de pago',
      'Levantamiento de embargos',
      'Prescripción de obligaciones',
      'Excepciones dentro del proceso de cobro',
    ],
  },
  {
    id: 'consultoria',
    name: 'Consultoría tributaria',
    icon: faPuzzlePiece,
    topics: [
      'Impuesto sobre la renta',
      'IVA',
      'Retención en la fuente',
      'Régimen SIMPLE',
      'Planeación tributaria',
      'Análisis de obligaciones fiscales',
    ],
  },
  {
    id: 'rut',
    name: 'RUT y obligaciones formales',
    icon: faIdCard,
    topics: [
      'Actualización del RUT',
      'Responsabilidades tributarias',
      'Facturación electrónica',
      'Información exógena',
      'RUB',
    ],
  },
];
