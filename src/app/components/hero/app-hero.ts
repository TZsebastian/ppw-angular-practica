import { Component, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    UpperCasePipe
  ],
  templateUrl: './app-hero.html',
  styleUrl: './app-hero.css'
})
export class AppHeaderComponent {

  readonly brand = signal('PPW Angular');

  readonly title = signal('Angular');

  readonly subtitle = signal('Curso de Angular');

  readonly viewMode = signal('list');

  readonly topics = signal([
    'Components',
    'Signals',
    'Routing',
    'Forms'
  ]);

  toggleMode() {

    this.viewMode.set(
      this.viewMode() === 'list'
        ? 'grid'
        : 'list'
    );

  }

}