import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProfileService} from "../../services/profile.service";
import {of, switchMap} from "rxjs";
import * as ProfileActions from "./profile.action";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions,
              private profileService: ProfileService
  ) {
  }

  getAllProfiles$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.getAllProfiles),
    switchMap(() => {
      return this.profileService.getAllProfiles().pipe(
        map((profiles) =>
          ProfileActions.getAllProfilesSuccess(
            {profiles: profiles})),
        catchError((error) => {
          return of(ProfileActions.getAllProfilesFailure({error: error}));
        })
      )
    })
  ))

  getProfileById$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.getProfileById),
    switchMap(action => this.profileService.getProfileById(action.id).pipe(
      map(profile => ProfileActions.getProfileByIdSuccess({ profile })),
      catchError(error => of(ProfileActions.getProfileByIdFailure({ error: error })))
    ))
  ));

  deleteProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.deleteProfile),
    switchMap(action => this.profileService.deleteProfile(action.id).pipe(
      map(() => ProfileActions.deleteProfileSuccess({ id: action.id })),
      catchError(error => of(ProfileActions.deleteProfileFailure({ error: error })))
    ))
  ));

  // Create profile
  createProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.createProfile),
    switchMap(action => this.profileService.createProfile(action.profile).pipe(
      map(profile => ProfileActions.createProfileSuccess({ profile })),
      catchError(error => of(ProfileActions.createProfileFailure({ error: error })))
    ))
  ));

  // Update profile
  updateProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.updateProfile),
    switchMap(action => this.profileService.updateProfile(action.profile).pipe(
      map(profile => ProfileActions.updateProfileSuccess({ profile })),
      catchError(error => of(ProfileActions.updateProfileFailure({ error: error })))
    ))
  ));

}
