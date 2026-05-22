import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-accordion',
  standalone: true,
  imports: [],
  templateUrl: './ui-accordion.html'
})
export class UiAccordionComponent {
  title = input.required<string>();
  content = input.required<string>();
  nameGroup = input<string>('my-accordion'); // Para manejar cuáles se cierran juntos
}