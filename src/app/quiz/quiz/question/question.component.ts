import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../../models/quiz.model";

@Component({
  selector: 'app-quiz-question', templateUrl: './question.component.html', styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {

  @Input() public currentQuestion: number
  @Input() public numberOfQuestion: number

  @Input() public question: Question;

  public answers = [];

  constructor() {
  }

  ngOnInit(): void {
    this.shuffleArray(this.question.answers)
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  selectAnswer(id: number) {
    this.answers[id] = !this.answers[id];
    console.log(this.answers)
  }

}
