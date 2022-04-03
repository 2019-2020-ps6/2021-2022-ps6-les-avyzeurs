import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../../models/quiz.model";
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../../services/question.service";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {

  @Input() public currentQuestion: number
  @Input() public numberOfQuestion: number

  @Input() public question: Question;


  constructor(private route: ActivatedRoute, private questionService: QuestionService) {
    /*
    this.questionService.questionSelected$.subscribe((quiz) => {
      this.question = quiz;
    });
    */

  }

  ngOnInit(): void {
    const id = Number.parseInt(<string>this.route.snapshot.paramMap.get('id'));
  }

}
