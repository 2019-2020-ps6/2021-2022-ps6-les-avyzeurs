import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../quiz-editor.component";

@Component({
  selector: 'app-admin-quiz-editor-answer', templateUrl: './answer.component.html'
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer
  @Input() id: number
  correctAnswer: boolean;
  type: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
