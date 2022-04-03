import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../models/quiz.model";
import {QuizzesService} from "../../services/quizzes.service";
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../models/profile.model";

@Component({
  selector: 'app-index', templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  public profileList: Profile[] = [];

  constructor(public profileService: ProfileService) {
    this.profileService.profiles$.subscribe((profiles: Profile[]) => {
      this.profileList = profiles;
    });
  }

  ngOnInit(): void {
  }

}
