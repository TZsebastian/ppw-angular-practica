import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppHeaderComponent } from './components/header/app-header';
import { AppHeroComponent } from './components/hero/app-hero';
import { AppFooterComponent } from './components/footer/app-footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent, AppHeroComponent, AppFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'ppw-angular-21';
}