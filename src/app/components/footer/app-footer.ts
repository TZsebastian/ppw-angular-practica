import { Component, signal } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DecimalPipe],
templateUrl: './app-footer.html',
styleUrl: './app-footer.css'
})
export class Footer {
  anio = signal(2026);

  mensaje = signal('programacion web');
}