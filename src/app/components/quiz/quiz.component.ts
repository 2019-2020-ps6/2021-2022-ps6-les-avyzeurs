import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";

@Component({
  selector: 'app-component-quiz', templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {
  @Input() quiz: Quiz;

  constructor() {
  }

  ngOnInit(): void {
  }

}
