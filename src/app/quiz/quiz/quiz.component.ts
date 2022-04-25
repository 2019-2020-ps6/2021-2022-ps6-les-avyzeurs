import {Component, Inject, OnInit} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {AppComponent} from "../../app.component";
import {ParameterService} from "../../../services/parameter.service";

@Component({
  selector: 'app-quiz', templateUrl: './quiz.component.html', styleUrls: ['./quiz.component.sass']
})
export class QuizComponent implements OnInit {
  public quiz: Quiz;
  quitQuizPopup: boolean = false;
  userParamPopup: boolean = false;
  suddenPopupNext: boolean = false;
  suddenPopupEnd: boolean = false;
  currentQuestion: number = 0;
  errorDueToMovement: number = 0;
  public answers: number[] = [];

  constructor(private route: ActivatedRoute, private quizService: QuizService, @Inject(AppComponent) private appComponent: AppComponent, @Inject(ParameterService) private parameterService: ParameterService) {
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
    if(this.suddenPopupNext) {this.suddenPopupNext=false;}
    if(this.currentQuestion + 1 >= this.quiz.questions.length) {this.saveQuizResult()}
    else {if (this.answers[this.currentQuestion] != undefined)
      this.currentQuestion = this.currentQuestion + 1;
    console.log(this.answers);}
    console.log(this.errorDueToMovement);
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
      case "suddenPopupNext":
        this.suddenPopupNext = false;
        this.errorDueToMovement++;
        break;
      case "suddenPopupEnd":
        this.suddenPopupEnd = false;
        this.errorDueToMovement++;
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
      case "suddenPopupNext":
        this.parameterService.getParametersFromApi();
        if (this.answers[this.currentQuestion] != undefined) {
          if(this.appComponent.suddenMovement && this.parameterService.parameters[0].value==1){
            this.suddenPopupNext = true;
          }
          else{
            this.goToNextQuestion();
          }
        }
        break;
      case "suddenPopupEnd":
        this.parameterService.getParametersFromApi();
        if (this.answers[this.currentQuestion] != undefined) {
          if(this.appComponent.suddenMovement && this.parameterService.parameters[0].value==1){
            this.suddenPopupEnd = true;
          }
          else{
            this.saveQuizResult();
          }
        }
        break;
    }
  }

  saveQuizResult(): void {
    console.log(this.answers);
    if (this.answers[this.currentQuestion] != undefined)
      this.quizService.saveResult({answers: this.answers, id: 0, profileId: Number.parseInt(localStorage.getItem("currentSessionID")), quizId: this.quiz.id});
  }

  getParam(): boolean {
    this.parameterService.getParametersFromApi();
    return this.appComponent.suddenMovement && this.parameterService.parameters[0].value==1;
  }

}
