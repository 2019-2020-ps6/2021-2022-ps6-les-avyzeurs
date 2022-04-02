import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {ActivatedRoute} from "@angular/router";
import {QuizzesService} from "../../../services/quizzes.service";

@Component({
  selector: 'app-quizzes-play',
  templateUrl: './quizzes-play.component.html',
  styleUrls: ['./quizzes-play.component.sass']
})
export class QuizzesPlayComponent implements OnInit {

  public quiz: Quiz;
  quitQuizPopup: boolean = false;
  userParamPopup: boolean = false;

  constructor(private route: ActivatedRoute, private quizService: QuizzesService) {
    // @ts-ignore
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
    });

  }

  ngOnInit(): void {
    const id = Number.parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.quizService.setSelectedQuiz(id);
  }


  closeModal(id: string): void {
    switch (id) {
      case "quitQuizPopup":
        this.quitQuizPopup = false;
        break;
      case "userParamPopup":
        this.userParamPopup = false;
        break;
    }
  }

  openModal(id: string): void {
    switch (id) {
      case "quitQuizPopup":
        this.quitQuizPopup = true;
        break;
      case "userParamPopup":
        this.userParamPopup = true;
        break;
    }
  }

}
