import {Quiz} from "../models/quiz.model";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, of} from 'rxjs';
import {QUIZ_LIST} from '../mocks/quiz-list.mock';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QUIZ_LIST);
  private quizzes: Quiz[] = QUIZ_LIST
  private api = 'http://localhost:9428/api/';

  constructor(private http: HttpClient) {
    this.getQuizzes();
  }

  addQuiz(quiz: Quiz) {
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
    this.http.post(this.api + "quizzes", quiz).subscribe((quiz) => {
      console.log(quiz);
    });
  }

  getQuiz(id: number) {
    return of(this.quizzes.find(q => q.id === id)!);
  }

  deleteQuiz(quiz: Quiz) {
    this.quizzes.splice(this.quizzes.indexOf(quiz), 1);
    this.quizzes$.next(this.quizzes);
    this.http.delete(this.api + "quizzes/" + quiz.id);
  }

  getQuizzes() {
    this.http.get<Quiz[]>(this.api + "quizzes").subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
    });
  }
}
