import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-detail-page',
    standalone: true,
  imports: [RouterLink],
  templateUrl: './student-detail-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDetailPage {

  //ActivatedRoute permite leer los parametros
  // de la ruta qeu definimos en app.outes.this
  private route = inject(ActivatedRoute);
  readonly id = this.route.snapshot.paramMap.get('id');

}