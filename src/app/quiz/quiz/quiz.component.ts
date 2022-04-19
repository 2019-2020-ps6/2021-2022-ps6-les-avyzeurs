import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-quiz', templateUrl: './quiz.component.html', styleUrls: ['./quiz.component.sass']
})
export class QuizComponent implements OnInit {
  public quiz: Quiz;
  quitQuizPopup: boolean = false;
  userParamPopup: boolean = false;
  currentQuestion: number = 0;
  public answers: number[] = [];

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      this.shuffleArray(this.quiz.questions)
    });
  }

  ngOnInit(): void {
    const id = Number.parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.quizService.setSelectedQuizHistory(id);
  }

  goToNextQuestion(): void {
    if (this.answers[this.currentQuestion] != undefined)
      this.currentQuestion = this.currentQuestion + 1;
    console.log(this.answers);
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

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

  saveQuizResult(): void {
    console.log(this.answers);
    //if (this.answers[this.currentQuestion] != undefined)
      //
  }

}
