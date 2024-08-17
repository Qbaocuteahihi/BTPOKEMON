import {createAction, props} from "@ngrx/store";
import {Profile} from "../../app/models/profile.model";

export const getAllProfiles = createAction('[Profile] Get All Profiles');
export const getAllProfilesSuccess =
  createAction('[Profile] Get All Profiles Success', props<{profiles: Profile[]}>());
export const getAllProfilesFailure =
  createAction('[Profile] Get All Profiles Failure', props<{error: any}>());
