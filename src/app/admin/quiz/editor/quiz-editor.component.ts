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

  /**quizForm = this.fb.group({
    name: ['', Validators.required],
    image: ['']
  })**/
  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.realQuiz = quiz;
      if(this.editing) {
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
      let id = Number.parseInt(<string>this.route.snapshot.paramMap.get('id'))
      this.quizService.setSelectedQuiz(id);
    }


  }

  submit() {
    let json = JSON.stringify(this.quiz);
    if(this.editing) {

    } else {
      this.quizService.createQuiz(json)
    }
    this.router.navigate(['/admin/quiz']);
  }

  addQuestion() {
    this.quiz.questions.push(new Question())
  }

}

export class Quiz {
  name: string
  image: string
  questions: Question[] = []
}

export class Question {
  id: number
  question: string
  image: string
  video: string
  answers: Answer[] = []
}

export class Answer {
  id: number
  type: number
  label: string
  correctAnswer: boolean
}
