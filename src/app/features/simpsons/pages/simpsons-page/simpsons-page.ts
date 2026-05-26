import { ChangeDetectionStrategy, Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SimpsonsService } from '../../services/simpsons.service';
import { RouterLink, RouterModule } from '@angular/router';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-simpsons-page',
  imports: [RouterModule, RouterLink],
  templateUrl: './simpsons-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SimpsonsPage {
  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);  // público: el template lo usa

  readonly charactersPerPage = signal(10);

  simpsonsResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage(),
      limit: this.charactersPerPage(),
    }),
    stream: ({ params }) =>
      this.simpsonsService.getCharactersOptions({
        page: params.page,
        limit: params.limit,
      }),
  });
}