import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // 1. Agregamos RouterLinkActive aquí

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive // 2. Lo declaramos en los imports para que el HTML lo pueda usar
  ],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css'
})
export class AppHeaderComponent {
  readonly brand = signal('PPW Angular');
}