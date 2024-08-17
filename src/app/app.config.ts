import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideHttpClient} from "@angular/common/http";
import {PokemonEffects} from "../ngrx/pokemon/pokemon.effects";
import {pokemonReducer} from "../ngrx/pokemon/pokemon.reducer";
import {profileReducer} from "../ngrx/profile/profile.reducer";
import {ProfileEffects} from "../ngrx/profile/profile.effects";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideAnimationsAsync(), provideStore({
    'pokemon':pokemonReducer,
    'profile': profileReducer
  }), provideEffects(PokemonEffects), provideHttpClient(), provideEffects(ProfileEffects)]
};
