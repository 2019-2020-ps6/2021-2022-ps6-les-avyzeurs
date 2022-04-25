import {Component, Inject, Input, OnInit} from '@angular/core';
import {Question} from "../../../../models/quiz.model";
import {QuizComponent} from "../quiz.component";
import {ProfileService} from "../../../../services/profile.service";
import {Parameter, Profile} from "../../../../models/profile.model";
import parametersHelper from "../../../../helpers/parametersHelper";

@Component({
  selector: 'app-quiz-question', templateUrl: './question.component.html', styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {

  @Input() public currentQuestion: number
  @Input() public numberOfQuestion: number

  @Input() public question: Question;

  public answers = [];
  public selectedAnswer: number;
  private profile: Profile;

  constructor(@Inject(QuizComponent) private parentComponent: QuizComponent, public profileService: ProfileService) {
    this.profileService.profileSelected$.subscribe((profile) => {
      this.profile = profile;
    });
  }

  ngOnInit(): void {
    this.shuffleArray(this.question.answers)
    if (localStorage.getItem('currentSessionID')) {
      const id = Number.parseInt(localStorage.getItem('currentSessionID'));
      this.profileService.setSelectedProfile(id);
    }
  }

  getParameter(type: string): Parameter {
    return parametersHelper.getParameter(this.profile, type)
  }

  getClass(type: string): string {
    return parametersHelper.getClass(this.getParameter(type))
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
    //On sélectionne une nouvelle réponse
    if (this.selectedAnswer != id) {
      this.selectedAnswer = id;
      this.question.answers.forEach((element) => {
        document.getElementById("answer_" + element.id).classList.remove("selected");
      })
      document.getElementById("answer_" + id).classList.add("selected");
      this.parentComponent.answers[this.parentComponent.currentQuestion] = id;
    }
    //On clique sur une réponse déjà sélectionnée
    else {
      this.selectedAnswer = undefined;
      document.getElementById("answer_" + id).classList.remove("selected");
      this.parentComponent.answers[this.parentComponent.currentQuestion] = undefined;
    }
  }

  hasProp(o, name) {
    return typeof o[name] !== 'undefined';
  }


}
