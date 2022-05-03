import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizResult} from "../../../../models/quizresult.model";
import {QuizHistoryService} from "../../../../services/quizhistory.service";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";
import {Parameter, Profile} from "../../../../models/profile.model";
import parametersHelper from "../../../../helpers/parametersHelper";
import {ProfileService} from "../../../../services/profile.service";
import {Question, Quiz} from "../../../../models/quiz.model";
import {QuizService} from "../../../../services/quiz.service";

@Component({
  templateUrl: './result.component.html', styleUrls: ['./result.component.sass']
})
export class ResultComponent implements OnInit {

  public quiz: QuizResult;
  public profile: Profile;

  constructor(private route: ActivatedRoute, private quizService: QuizHistoryService, private profileService: ProfileService, private quizService2: QuizService) {
    this.quizService.quizHistorySelected$.subscribe((quiz) => {
      this.quiz = quiz;
      console.log(quiz)
    });
    this.profileService.profileSelected$.subscribe((profile) => {
      this.profile = profile;
    });
  }

  getParameter(type: string): Parameter {
    return parametersHelper.getParameter(this.profile, type)
  }

  getClass(type: string): string {
    return parametersHelper.getClass(this.getParameter(type))
  }

  ngOnInit(): void {
    const id = Number.parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.quizService.setSelectedQuiz(id);
    if (localStorage.getItem('currentSessionID')) {
      const id = Number.parseInt(localStorage.getItem('currentSessionID'));
      this.profileService.setSelectedProfile(id);
    }
  }

  hasImage(o) {
    return isNotNullOrUndefined(o.image)
  }

  isTrue(question: Question, i: number) {
    //console.log(question.answers);
    //console.log(this.quiz.answers[i]);
    return (question.answers.find(answer => answer.id == this.quiz.answers[i][0].answerId).correctAnswer);
  }

  getAnswer(question: Question, i: number) {
    return question.answers.find(answer => answer.id == this.quiz.answers[i][0].answerId).label;
  }

  rightAnswer(question: Question) {
    return question.answers.find(answer => answer.correctAnswer).label;
  }
}
