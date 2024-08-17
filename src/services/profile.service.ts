import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../app/models/profile.model";

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
}
