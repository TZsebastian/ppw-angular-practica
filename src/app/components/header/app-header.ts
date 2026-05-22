import { Component, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    UpperCasePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app-header.html', 
  styleUrls: ['./app-header.css']
})
export class AppHeaderComponent {

  readonly brand = signal('PPW Angular');

}