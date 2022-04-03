import {Quiz} from "../models/quiz.model";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject} from 'rxjs';
import {Injectable} from "@angular/core";
import {quizzesApi} from "../config";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public quizSelected$: Subject<Quiz> = new Subject();
  private quizzes: Quiz[] = []
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  constructor(private http: HttpClient) {
    this.getQuizzesFromAPI();
  }

  setSelectedQuiz(quizId: number): void {
    this.http.get<Quiz>(quizzesApi + "/" + quizId).subscribe((quiz) => this.quizSelected$.next(quiz));
  }

  getQuizzesFromAPI() {
    this.http.get<Quiz[]>(quizzesApi).subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
    });
  }
}
