import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../../../../models/quiz.model";

@Component({
  selector: 'app-quizzes-quiz-element',
  templateUrl: './quizzes-quiz-element.component.html',
  styleUrls: ['./quizzes-quiz-element.component.sass']
})
export class QuizzesQuizElementComponent implements OnInit {

  @Input()
  quiz!: Quiz;

  constructor() { }

  ngOnInit(): void {
  }

}
