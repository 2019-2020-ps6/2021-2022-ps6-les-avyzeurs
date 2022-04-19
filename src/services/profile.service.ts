import {Injectable} from '@angular/core';
import {httpOptionsBase, profileApi, quizzesHistoryApi} from "../config"
import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Profile} from "../models/profile.model";
import {QuizHistory} from "../models/quizresult.model";
import {Quiz} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public profileSelected$: Subject<Profile> = new Subject();
  private profiles: Profile[] = []
  public profiles$: BehaviorSubject<Profile[]> = new BehaviorSubject(this.profiles);

  constructor(private http: HttpClient) {
    this.getProfilesFromApi();
  }

  getProfilesFromApi() {
    this.http.get<Profile[]>(profileApi).subscribe((profileList) => {
      this.profiles = profileList;
      this.profiles$.next(this.profiles);
    });
  }

  setSelectedProfile(profileId: number): void {
    this.http.get<Profile>(profileApi + "/" + profileId).subscribe((profile) => {
      this.profileSelected$.next(profile);
    });
  }

  addProfile(profile: Profile): void {
    this.http.post<Profile>(profileApi, {name: profile.name, firstname: profile.firstname}, httpOptionsBase).subscribe(() => this.getProfilesFromApi());
  }

}
