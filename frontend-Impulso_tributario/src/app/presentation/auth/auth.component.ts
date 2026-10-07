import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { LoginRequest } from '../../shared/interfaces/login-request.interface';

@Component({
   imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-auth',
  styleUrl: './auth.component.scss',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.pattern(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)]],
    password: ['', Validators.required],
  });

  /** Posiciones horizontales de las columnas del fondo */
  readonly columns = [130, 264, 398, 532, 666, 800, 934, 1068];

  readonly showPassword = signal(false);
  readonly loading = signal(false);
  readonly submitted = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly courtTransform = signal('translate(0px, 0px)');

  private readonly reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /** Desplazamiento suave del fondo con el cursor */
  @HostListener('window:pointermove', ['$event'])
  onPointerMove(e: PointerEvent): void {
    if (this.reduceMotion) return;
    const x = (e.clientX / window.innerWidth - 0.5) * -18;
    const y = (e.clientY / window.innerHeight - 0.5) * -8;
    this.courtTransform.set(`translate(${x}px, ${y}px)`);
  }

  showError(name: 'email' | 'password'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || this.submitted());
  }

  emailError(): string {
    return this.form.controls.email.hasError('required')
      ? 'Escribe tu correo.'
      : 'Escribe un correo válido, por ejemplo nombre@empresa.com.';
  }

  onSubmit(): void {
    this.submitted.set(true);
    this.errorMessage.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    const { email, password } = this.form.getRawValue();

    const loginRequest: LoginRequest = { email: email.trim(), password };

    this.auth.login(loginRequest).subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.errorMessage.set(this.messageFor(err));
      },
    });
  }

  private messageFor(err: HttpErrorResponse): string {
    switch (err.status) {
      case 0:
        return 'No pudimos conectar con el servidor. Intenta de nuevo en unos minutos.';
      case 400:
      case 401:
      case 403:
        return 'Correo o contraseña incorrectos.';
      case 429:
        return 'Demasiados intentos. Espera un momento e intenta de nuevo.';
      default:
        return 'Ocurrió un error inesperado. Intenta de nuevo.';
    }
  }
}
