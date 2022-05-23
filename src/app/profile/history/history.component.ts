import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../../../services/profile.service";
import {Parameter, Profile} from "../../../models/profile.model";
import {QuizProfileResult} from "../../../models/quizresult.model";
import {QuizHistoryService} from "../../../services/quizhistory.service";
import parametersHelper from "../../../helpers/parametersHelper";

@Component({
  selector: 'app-profile-history', templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  profile: Profile;

  quizzesHistory: QuizProfileResult[] = [];

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private quizHistoryService: QuizHistoryService) {
    this.profileService.profileSelected$.subscribe((profile) => {
      this.profile = profile;
      this.quizHistoryService.quizzesProfileHistory$.subscribe((quizzesHistory: QuizProfileResult[]) => this.quizzesHistory = quizzesHistory);
    });
  }

  ngOnInit(): void {
    const id = Number.parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.profileService.setSelectedProfile(id)
    this.quizHistoryService.getQuizzesFromProfile(id)
  }

  getParameter(type: string): Parameter {
    return parametersHelper.getParameter(this.profile, type)
  }

  getClass(type: string): string {
    return parametersHelper.getClass(this.getParameter(type))
  }

}
