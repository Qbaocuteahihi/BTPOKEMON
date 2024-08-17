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
)
)
