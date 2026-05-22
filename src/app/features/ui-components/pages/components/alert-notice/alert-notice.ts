import { Component, input } from '@angular/core';
@Component({
  selector: 'app-alert-notice',
  standalone: true,
  templateUrl: './alert-notice.html'
})
export class AlertNoticeComponent {
  type = input<string>('alert-info');
  message = input.required<string>();
}