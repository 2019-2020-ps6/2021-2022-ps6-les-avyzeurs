import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {QuizService} from "../../../services/quiz.service";


@Component({
  selector: 'app-admin-light-profile',
  templateUrl: './light-profile.component.html',
  styleUrls: ['./light-profile.component.sass']
})
export class LightProfileComponent implements OnInit {
  @Input() profile : Profile;
  @Input() index : any;


  constructor(public quizService: QuizService) { }

  ngOnInit(): void {
  }

  delete() {
    this.quizService.deleteQuiz(this.profile.id)
  }

  getFullName(){
    return this.profile.firstname + " " + this.profile.name;
  }
}
