import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {QuizService} from "../../../services/quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quizzes', templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {

  public quizList: Quiz[] = [];

  constructor(public quizService: QuizService, private router: Router) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
  }

  ngOnInit(): void {
    if(!localStorage.getItem('currentSessionID'))
      this.router.navigate(['/']);
  }

}
