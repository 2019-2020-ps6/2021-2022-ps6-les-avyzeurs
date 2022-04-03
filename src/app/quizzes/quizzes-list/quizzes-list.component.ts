import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {Router} from "@angular/router";
import {QuizzesService} from "../../../services/quizzes.service";

@Component({
  selector: 'app-quizzes-list', templateUrl: './quizzes-list.component.html'
})
export class QuizzesListComponent implements OnInit {

  public quizList: Quiz[] = [];

  constructor(public quizService: QuizzesService) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
  }

  ngOnInit(): void {
  }

}
