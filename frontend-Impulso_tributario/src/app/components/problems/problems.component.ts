import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Problem {
  text: string;
  /** id del servicio que se preselecciona en el formulario de consulta */
  service: string;
}

@Component({
  selector: 'app-problems',
  imports: [RouterLink],
  templateUrl: './problems.component.html',
  styleUrl: './problems.component.scss',
})
export class ProblemsComponent {
  readonly problems: Problem[] = [
    { text: 'La DIAN le notificó un requerimiento.', service: 'defensa' },
    { text: 'Le impusieron una sanción.', service: 'defensa' },
    { text: 'Tiene una deuda tributaria y enfrenta un proceso de cobro.', service: 'cobro' },
    { text: 'Le rechazaron una devolución.', service: 'devoluciones' },
    { text: 'Tiene un saldo a favor que no ha podido recuperar.', service: 'devoluciones' },
    { text: 'Necesita responder un acto administrativo.', service: 'defensa' },
    { text: 'Considera que la DIAN determinó incorrectamente su obligación tributaria.', service: 'defensa' },
  ];
}
