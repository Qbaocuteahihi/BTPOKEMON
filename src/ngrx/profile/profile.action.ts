import { createAction, props } from "@ngrx/store";
import { Profile } from "../../app/models/profile.model";

// Get all profiles
export const getAllProfiles = createAction('[Profile] Get All Profiles');
export const getAllProfilesSuccess = createAction(
  '[Profile] Get All Profiles Success',
  props<{ profiles: Profile[] }>()
);
export const getAllProfilesFailure = createAction(
  '[Profile] Get All Profiles Failure',
  props<{ error: any }>()
);

// Get profile by ID
export const getProfileById = createAction(
  '[Profile] Get Profile By ID',
  props<{ id: string }>()
);
export const getProfileByIdSuccess = createAction(
  '[Profile] Get Profile By ID Success',
  props<{ profile: Profile }>()
);
export const getProfileByIdFailure = createAction(
  '[Profile] Get Profile By ID Failure',
  props<{ error: any }>()
);

// Delete profile
export const deleteProfile = createAction(
  '[Profile] Delete Profile',
  props<{ id: string }>()
);
export const deleteProfileSuccess = createAction(
  '[Profile] Delete Profile Success',
  props<{ id: string }>()
);
export const deleteProfileFailure = createAction(
  '[Profile] Delete Profile Failure',
  props<{ error: any }>()
);

// Create profile
export const createProfile = createAction(
  '[Profile] Create Profile',
  props<{ profile: Profile }>()
);
export const createProfileSuccess = createAction(
  '[Profile] Create Profile Success',
  props<{ profile: Profile }>()
);
export const createProfileFailure = createAction(
  '[Profile] Create Profile Failure',
  props<{ error: any }>()
);

// Update profile
export const updateProfile = createAction(
  '[Profile] Update Profile',
  props<{ profile: Profile }>()
);
export const updateProfileSuccess = createAction(
  '[Profile] Update Profile Success',
  props<{ profile: Profile }>()
);
export const updateProfileFailure = createAction(
  '[Profile] Update Profile Failure',
  props<{ error: any }>()
);
