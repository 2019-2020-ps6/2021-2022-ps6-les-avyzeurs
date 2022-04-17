import {Component, Input, OnInit} from '@angular/core';
import {QuizProfileResult} from "../../../../models/quizresult.model";

@Component({
  selector: 'app-profile-history-quiz', templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {

  @Input() quizProfileResult: QuizProfileResult;

  constructor() {
  }

  ngOnInit(): void {
  }

  getDate(timestamp: number) {
    return new Date(timestamp).toLocaleDateString("fr-fr") + " à " + new Date(timestamp).toLocaleTimeString("fr-fr");
  }

}
