import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {QuizService} from "../../../services/quiz.service";
import {Router} from "@angular/router";
import {ProfileService} from "../../../services/profile.service";
import {Parameter, Profile} from "../../../models/profile.model";
import parametersHelper from "../../../helpers/parametersHelper";

@Component({
  selector: 'app-quizzes', templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {

  public quizList: Quiz[] = [];
  public profile: Profile;

  constructor(public quizService: QuizService, private router: Router, public profileService: ProfileService) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
    this.profileService.profileSelected$.subscribe((profile) => {
      this.profile = profile;
    });
  }

  ngOnInit(): void {
    if (!localStorage.getItem('currentSessionID')) this.router.navigate(['/']);
    if (localStorage.getItem('currentSessionID')) {
      const id = Number.parseInt(localStorage.getItem('currentSessionID'));
      this.profileService.setSelectedProfile(id);
    }
  }

  getParameter(type: string): Parameter {
    return parametersHelper.getParameter(this.profile, type)
  }

  getClass(type: string): string {
    return parametersHelper.getClass(this.getParameter(type))
  }
}
