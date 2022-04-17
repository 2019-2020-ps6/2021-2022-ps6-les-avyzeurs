import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizResult} from "../../../../models/quizresult.model";
import {QuizHistoryService} from "../../../../services/quizhistory.service";

@Component({
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent implements OnInit {

  public quiz: QuizResult;

  constructor(private route: ActivatedRoute, private quizService: QuizHistoryService) {
    this.quizService.quizHistorySelected$.subscribe((quiz) => {
      this.quiz = quiz;
      console.log(quiz)
    });
  }

  ngOnInit(): void {
    const id = Number.parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.quizService.setSelectedQuiz(id);
  }

}
