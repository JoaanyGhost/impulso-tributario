import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SERVICES } from './services.data';

@Component({
  selector: 'app-services',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly services = SERVICES;

  readonly activeIndex = signal(0);
  readonly active = computed(() => this.services[this.activeIndex()]);

  select(index: number): void {
    this.activeIndex.set(index);
  }
}
