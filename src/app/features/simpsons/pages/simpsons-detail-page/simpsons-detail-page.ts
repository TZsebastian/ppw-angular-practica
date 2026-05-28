import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { of, tap } from 'rxjs';
import { SimpsonsCacheService } from '../../services/simpons-cache.service';
import { SimpsonsService } from '../../services/simpsons.service';
import { AuthService } from '../../../../core/services/auth.service';
import { FavoritesService } from '../../../../core/services/favorites';


@Component({
  selector: 'app-simpson-detail-page',
  imports: [RouterLink],
  templateUrl: './simpsons-detail-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SimpsonDetailPage {
  // Dependencias del componente.
  private route = inject(ActivatedRoute);
  private simpsonsService = inject(SimpsonsService);
  private cacheService = inject(SimpsonsCacheService);

  // Convertimos el parametro de ruta a numero.
  private characterId = Number(this.route.snapshot.paramMap.get('id'));
  // Resource reactivo: expone isLoading, error y value para el template.
  characterResource = rxResource({
    stream: () => {
      // Paso A: buscar primero en cache local.
      const cached = this.cacheService.getById(this.characterId);
      if (cached) {
        // Si existe en localStorage, devolvemos el dato al instante.
        return of(cached);
      }

      // Paso B: si no existe en cache, consultar API.
      return this.simpsonsService.getCharacterById(this.characterId).pipe(
        // Guardamos la respuesta para visitas futuras.
        tap((character) => this.cacheService.save(character)),
      );
    },
  });

  // authService como publico para poder leerlo en el template con authService.currentUser().
  authService = inject(AuthService);
  private favoritesService = inject(FavoritesService);

  // Signal local: refleja inmediatamente si el personaje es favorito sin esperar Firestore.
  isFavorite = signal(false);

  // Alterna entre guardar y eliminar segun el estado actual del signal.
  toggleFavorite() {
    const uid = this.authService.uid;
    if (!uid) return; // No hace nada si no hay sesion activa.

    if (this.isFavorite()) {
      // Si ya es favorito, lo eliminamos de Firestore.
      this.favoritesService.removeFavorite(uid, this.characterId).then(() => {
        this.isFavorite.set(false);
      });
    } else {
      // Si no es favorito, lo guardamos en Firestore.
      this.favoritesService.addFavorite(uid, this.characterId).then(() => {
        this.isFavorite.set(true);
      });
    }
  }
}