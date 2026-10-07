import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

/** PROVISIONAL: solo sirve para comprobar que el login funciona. Se reemplaza por el dashboard real. */
@Component({
  selector: 'app-dashboard',
  template: `
    <main style="min-height:100vh;display:grid;place-content:center;gap:16px;text-align:center;font-family:sans-serif">
      <h1>Sesión iniciada</h1>
      <p>El login funciona. Aquí irá el dashboard.</p>
      <button type="button" (click)="logout()">Cerrar sesión</button>
    </main>
  `,
})
export class DashboardComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/auth');
  }
}
