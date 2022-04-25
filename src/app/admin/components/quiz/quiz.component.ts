import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../../../../models/quiz.model";

@Component({
  selector: 'app-component-admin-quiz', templateUrl: './quiz.component.html'
})
export class AdminQuizComponent implements OnInit {
  @Input() quiz: Quiz;

  constructor() {
  }

  ngOnInit(): void {
  }

  delete() {

  }

  edit() {

  }
}
