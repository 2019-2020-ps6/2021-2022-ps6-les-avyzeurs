import {Quiz} from "../models/quiz.model";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Injectable} from "@angular/core";
import {httpOptionsBase, quizzesApi, quizzesHistoryApi} from "../config";
import {QuizHistory} from "../models/quizresult.model";

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

  saveResult(quiz: QuizHistory): void {
    this.http.post<Quiz>(quizzesHistoryApi, quiz, httpOptionsBase).subscribe(() => this.getQuizzesFromAPI());
  }

  createQuiz(json: string): void {
    this.http.post<Quiz>(quizzesApi + "/new", JSON.parse(json), httpOptionsBase).subscribe(() => this.getQuizzesFromAPI());
  }

  deleteQuiz(id: number): void {
    this.http.delete<Quiz>(quizzesApi + "/" + id).subscribe(() => this.getQuizzesFromAPI())
  }
}
