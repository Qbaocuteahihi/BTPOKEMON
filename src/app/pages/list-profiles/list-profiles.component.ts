import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ProfileState} from "../../../ngrx/profile/profile.state";
import {Store} from "@ngrx/store";
import * as ProfileActions from "../../../ngrx/profile/profile.action";
import {getAllProfiles} from "../../../ngrx/profile/profile.action";
import {AsyncPipe} from "@angular/common";
import {ProfileCardComponent} from "../../components/profile-card/profile-card.component";
@Component({
  selector: 'app-list-profiles',
  standalone: true,
  imports: [
    AsyncPipe,
    ProfileCardComponent
  ],
  templateUrl: './list-profiles.component.html',
  styleUrl: './list-profiles.component.scss'
})
export class ListProfilesComponent {
  profile$!: Observable<ProfileState>;
  constructor(private store: Store<{profile: ProfileState}>) {
   this.profile$ = this.store.select('profile')
    this.store.dispatch(ProfileActions.getAllProfiles());
   this.profile$.subscribe((data) => {
      console.log(data.profiles);
   }
   )
  }
}
