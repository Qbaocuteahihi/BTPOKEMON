import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../app/models/profile.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {
    // this.http.get<Profile[]> (`${this.baseUrl}/profile/all`).subscribe(
    //   (data) => {
    //     console.log(data);
    //   }
    // )
  }
  getAllProfiles() {
    return this.http.get<Profile[]> (`${this.baseUrl}/profile/all`);
  }

  // Get profile by ID
  getProfileById(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.baseUrl}/profile/${id}`);
  }

  // Delete profile
  deleteProfile(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/profile/${id}`);
  }

  // Create new profile
  createProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(`${this.baseUrl}/profile`, profile);
  }

  // Update existing profile
  updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.baseUrl}/profile/${profile.id}`, profile);
  }
}
