import {Component, Input, OnInit} from '@angular/core';
import {Answer, Question} from "../quiz-editor.component";

@Component({
  selector: 'app-admin-quiz-editor-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() id: number;


  constructor() {
  }

  ngOnInit(): void {
  }

  addAnswer() {
    this.question.answers.push(new Answer())
  }
}
