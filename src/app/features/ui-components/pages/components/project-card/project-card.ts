import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.html'
})
export class ProjectCardComponent {
  title = input.required<string>();
  description = input.required<string>();
  imageUrl = input<string>('https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp');
  tags = input<string[]>([]);
  badgeText = input<string>('Nuevo');
}