import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMoneyBill, faScaleBalanced, faPuzzlePiece,  faFile, faPaste, faGavel, faLandmark} from '@fortawesome/free-solid-svg-icons';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{

  config: SwiperOptions;

  indexProjects = 0;

  services:{name: string, logo: IconProp, text: string}[] = [
    {
      name: 'Consultoría en Materia Tributaria',
      logo: faMoneyBill,
      text:'Nuestros especialistas te brindarán asesoramiento completo en materia tributaria,  para ayudarte a tomar decisiones financieras sólidas y cumplir con tus imposiciones fiscales.',
    },

    {
      name: 'Defensa en Sede Administrativa y Judicial',
      logo: faScaleBalanced,
      text:'Nos encargamos de tu representación ante la Autoridad Tributaria, Entes Territoriales, igualmente acompañamos tus procesos de fiscalización de La Unidad de Gestión Pensional y Parafiscales -UGPP., garantizando la defensa de tus derechos en los procedimientos administrativos.',
    },

    {
      name: 'Planeación Tributaria y Corporativa',
      logo: faPuzzlePiece,
      text:'Diseñamos estrategias de planificación tributaria con diferentes alternativas de procedimientos legales, los cuales permites utilizar las normas que regulan el sistema tributario para personas naturales y jurídicas, optimizando tus recursos y minimizando riesgos fiscales.',
    },

    {
      name: 'Solicitud de Devolución y Pagos de lo no Debido',
      logo: faFile,
      text:'Te asistimos en la presentación de solicitudes de devolución por concepto de saldos a favor originados en declaraciones privadas y en la gestión por pagos en exceso ante la Autoridad Tributaria.',
    },

    {
      name: 'Presentación de Declaraciones Tributarias',
      logo: faPaste,
      text:'Gestionamos la presentación de tus declaraciones tributarias ante la DIAN, asegurando el cumplimiento puntual de tus obligaciones fiscales.',
    },

    {
      name: 'Defensa Judicial en lo Contencioso Administrativo',
      logo: faGavel,
      text:'Brindamos representación legal en procedimientos contenciosos administrativos frente a los actos proferidos por la UAE DIAN, Autoridades Territoriales y La Unidad de Gestión Pensional y Parafiscales -UGPP.',
    },

    {
      name: 'Compra de Sentencias Judiciales',
      logo: faLandmark,
      text:'Te Ofrecemos servicios de compra de sentencias judiciales con el objeto de brindar soluciones de liquidez tanto a las víctimas de Entidades Estatales como a sus apoderados, brindando soluciones efectivas y oportunas. ',
    },

    {
      name: 'Delitos Tributarios',
      logo: faLandmark,
      text:'Con nuestros expertos te proporcionamos asistencia jurídica en los delitos fiscales tipificados en el Código Penal colombiano, como las sanciones tributarias de carácter administrativo que se establecen en las diferentes normas fiscales implementadas por las autoridades tributarias en Colombia.',
    }
  ];





  constructor() {
    this.config = {
      slidesPerView: 4,
      breakpoints: {
        // cuando la pantalla es >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // cuando la pantalla es >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // cuando la pantalla es >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        // cuando la pantalla es >= 1200px
        1200: {
          slidesPerView: 3,
          spaceBetween: 40
        },

        1700: {
          slidesPerView: 4,
        }

      }
    };
  }

  ngOnInit() {

    //this.swiper.slides;

  }


}
