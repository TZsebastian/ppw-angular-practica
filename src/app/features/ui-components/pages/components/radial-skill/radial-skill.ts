import { Component, input } from '@angular/core';
@Component({
  selector: 'app-radial-skill',
  standalone: true,
  templateUrl: './radial-skill.html'
})
export class RadialSkillComponent {
  name = input.required<string>();
  value = input.required<number>();
  colorClass = input<string>('text-primary');
}