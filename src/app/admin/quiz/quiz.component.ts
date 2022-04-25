import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {QuizService} from "../../../services/quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-quiz', templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {

  public quizList: Quiz[] = [];

  constructor(public quizService: QuizService, private router: Router) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
  }

  ngOnInit(): void {
  }

}
