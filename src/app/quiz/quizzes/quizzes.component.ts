import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-quizzes', templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {

  public quizList: Quiz[] = [];

  constructor(public quizService: QuizService) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
  }

  ngOnInit(): void {
  }

}
