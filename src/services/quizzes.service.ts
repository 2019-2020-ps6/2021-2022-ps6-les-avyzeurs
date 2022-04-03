import {Quiz} from "../models/quiz.model";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, of, Subject} from 'rxjs';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  public quizSelected$: Subject<Quiz> = new Subject();
  private quizzes: Quiz[] = []
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  private api = 'http://localhost:9428/api/';
  private quizzesApi = this.api + "quizzes"

  constructor(private http: HttpClient) {
    this.getQuizzesFromAPI();
  }

  setSelectedQuiz(quizId: number): void {
    this.http.get<Quiz>(this.quizzesApi + "/" + quizId).subscribe((quiz) => this.quizSelected$.next(quiz));
  }

  getQuizzesFromAPI() {
    this.http.get<Quiz[]>(this.quizzesApi).subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
    });
  }


  addQuiz(quiz: Quiz) {
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
    this.http.post(this.quizzesApi, quiz).subscribe((quiz) => {
      console.log(quiz);
    });
  }

  deleteQuiz(quiz: Quiz) {
    this.quizzes.splice(this.quizzes.indexOf(quiz), 1);
    this.quizzes$.next(this.quizzes);
    this.http.delete(this.api + quiz.id);
  }

}
