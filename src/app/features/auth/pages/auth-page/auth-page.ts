import { Component, inject, signal } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-auth-page',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './auth-page.html',

  styleUrls: ['./auth-page.css']
})
export class AuthPageComponent {

  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  private router = inject(Router);

  // true = login
  // false = register
  isLogin = signal(true);

  errorMessage = signal<string | null>(null);

  isLoading = signal(false);

  authForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ],
  });

  toggleMode() {

    this.isLogin.update((v) => !v);

    this.errorMessage.set(null);

    this.authForm.reset();
  }

  loginWithGoogle() {

    this.isLoading.set(true);

    this.errorMessage.set(null);

    this.authService
      .loginWithGoogle()
      .subscribe({

        next: () => {

          this.isLoading.set(false);

          this.router.navigate(['/']);

        },

        error: () => {

          this.errorMessage.set(
            'No se pudo iniciar sesión con Google.'
          );

          this.isLoading.set(false);
        }

      });

  }

  onSubmit() {

    if (this.authForm.invalid) return;

    const email = this.authForm.value.email ?? '';

    const password = this.authForm.value.password ?? '';

    this.isLoading.set(true);

    this.errorMessage.set(null);

    const action$ = this.isLogin()
      ? this.authService.login(email, password)
      : this.authService.register(email, password);

    action$.subscribe({

      next: () => {

        this.isLoading.set(false);

        this.router.navigate(['/']);
      },

      error: () => {

        this.errorMessage.set(
          this.isLogin()
            ? 'Correo o contraseña incorrectos.'
            : 'No se pudo crear la cuenta.'
        );

        this.isLoading.set(false);
      },
    });
  }
}