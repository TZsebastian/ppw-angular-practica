import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students-pages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './students-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsPage {

  readonly students = signal([
    { id: 1, name: "Juan Perez" },
    { id: 2, name: "Diego Perez" },
    { id: 3, name: "Maria Benavidez" },
    { id: 4, name: "Sara Mendez" },
    { id: 5, name: "Jose Vinueza" },
  ]);

}