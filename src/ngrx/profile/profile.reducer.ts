import {ProfileState} from "./profile.state";
import {createReducer, on} from "@ngrx/store";
import * as ProfileActions from "./profile.action";
const initialState: ProfileState = {
  profiles: [],
  profile: null,
  isLoading: false,
  error: null
}
export const profileReducer = createReducer(
  initialState,
  on(ProfileActions.getAllProfiles, (state) => {
    return {
      ...state,
      isLoading: true
    }
  }
),
on(ProfileActions.getAllProfilesSuccess, (state, {profiles}) => {
    return {
      ...state,
      profiles,
      isLoading: false
    }
  }
),
on(ProfileActions.getAllProfilesFailure, (state, {error}) => {
    return {
      ...state,
      error,
      isLoading: false
    }
  }
),

on(ProfileActions.deleteProfile, (state) => ({
  ...state,
  isLoading: true
})),
  on(ProfileActions.deleteProfileSuccess, (state, { id }) => ({
    ...state,
    profiles: state.profiles.filter(profile => profile.id !== id),
    isLoading: false
  })),
  on(ProfileActions.deleteProfileFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  })),
  on(ProfileActions.createProfile, (state) => ({
    ...state,
    isLoading: true
  })),
  on(ProfileActions.createProfileSuccess, (state, { profile }) => ({
    ...state,
    profiles: [...state.profiles, profile],
    isLoading: false
  })),
  on(ProfileActions.createProfileFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  })),

  on(ProfileActions.updateProfile, (state) => ({
    ...state,
    isLoading: true
  })),
  on(ProfileActions.updateProfileSuccess, (state, { profile }) => ({
    ...state,
    profiles: state.profiles.map(p => p.id === profile.id ? profile : p),
    isLoading: false
  })),
  on(ProfileActions.updateProfileFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  }))

)
