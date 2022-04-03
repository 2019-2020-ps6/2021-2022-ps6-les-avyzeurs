import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {Router} from "@angular/router";
import {QuizzesService} from "../../../services/quizzes.service";

@Component({
  selector: 'app-quizzes-list',
  templateUrl: './quizzes-list.component.html'
})
export class QuizzesListComponent implements OnInit {

  public quizList: Quiz[] = [];

  constructor(private router: Router, public quizService: QuizzesService) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
    console.log(this.quizList)
  }

  ngOnInit(): void {
  }

}
