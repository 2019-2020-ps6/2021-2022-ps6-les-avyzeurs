import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../../../../models/quiz.model";
import {QuizService} from "../../../../services/quiz.service";

@Component({
  selector: 'app-component-admin-quiz', templateUrl: './quiz.component.html'
})
export class AdminQuizComponent implements OnInit {
  @Input() quiz: Quiz;

  constructor(public quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  delete() {
    this.quizService.deleteQuiz(this.quiz.id)
  }

  edit() {

  }
}
