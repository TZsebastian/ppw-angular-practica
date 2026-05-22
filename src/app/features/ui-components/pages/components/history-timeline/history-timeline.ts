import { Component, input } from '@angular/core';
@Component({
  selector: 'app-history-timeline',
  standalone: true,
  templateUrl: './history-timeline.html'
})
export class HistoryTimelineComponent {
  year = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}