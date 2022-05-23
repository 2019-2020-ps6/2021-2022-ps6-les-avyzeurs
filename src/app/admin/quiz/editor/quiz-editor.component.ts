import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";
import {Quiz as ModelQuiz} from "../../../../models/quiz.model";

@Component({
  selector: 'app-admin-quiz-editor', templateUrl: './quiz-editor.component.html'
})
export class QuizEditorComponent implements OnInit {

  editing: boolean = false
  realQuiz: ModelQuiz
  quiz = new Quiz()
  id: number;

  /**quizForm = this.fb.group({
    name: ['', Validators.required],
    image: ['']
  })**/
  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.realQuiz = quiz;
      if (this.editing) {
        this.quiz.name = this.realQuiz.name;
        this.quiz.image = this.realQuiz.image;
        for (let question of this.realQuiz.questions) {
          let q = new Question()
          q.id = question.id
          q.question = question.question
          q.image = question.image
          q.video = question.video
          for (let answer of question.answers) {
            let a = new Answer()
            a.id = answer.id
            a.label = answer.label
            a.type = answer.type
            a.correctAnswer = answer.correctAnswer
            q.answers.push(a)
          }
          this.quiz.questions.push(q)
        }
      }
    });
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== 'new') this.editing = true;

    if (this.editing) {
      this.id = Number.parseInt(<string>this.route.snapshot.paramMap.get('id'))
      this.quizService.setSelectedQuiz(this.id);
    }


  }

  submit() {
    if(this.quiz.isValid()) {
      if (this.editing) this.quizService.deleteQuiz(this.id)
      this.quizService.createQuiz(JSON.stringify(this.quiz))
      this.router.navigate(['/admin/quiz']);
    } else {
      alert("Attention, veuillez remplir les champs obligatoires (il faut une question avec une réponse minimum pour créer un quiz)")
    }
  }

  addQuestion() {
    this.quiz.questions.push(new Question())
  }

}

export class Quiz {
  name: string = ""
  image: string = ""
  questions: Question[] = []


  constructor() {
    this.questions.length = 0
  }

  isValid(): boolean {
    if (this.name.length == 0 || this.questions.length == 0) return false
    for (let question of this.questions) if (!question.isValid()) return false
    return true
  }
}

export class Question {
  id: number
  question: string = ""
  image: string = ""
  video: string = ""
  answers: Answer[] = []

  isValid(): boolean {
    if (this.question.length == 0 || this.answers.length == 0) return false
    for (let answer of this.answers) if (!answer.isValid()) return false
    return true
  }

}

export class Answer {
  id: number
  type: number = 1
  label: string = ""
  correctAnswer: boolean = false

  isValid(): boolean {
    return this.type != undefined || this.label !== "";
  }
}
