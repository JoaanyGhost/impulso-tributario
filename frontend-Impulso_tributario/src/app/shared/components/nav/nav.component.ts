import { DOCUMENT} from '@angular/common';
import { Component, HostListener, OnInit, effect, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit{
  private readonly document = inject(DOCUMENT);

  /** Enlaces de la navegación. Para agregar una página, solo añade una fila. */
  readonly links: NavLink[] = [
    { label: 'Servicios', path: '/servicios' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Artículos', path: '/articulos' },
    { label: 'Contacto', path: '/contacto' },
  ];

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  constructor() {
    // Bloquea el scroll de la página mientras el menú móvil está abierto
    effect(() => {
      this.document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });
  }

  ngOnInit(): void {
    // Si la página se recarga con scroll, arranca ya en el estado correcto
    this.onScroll();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
