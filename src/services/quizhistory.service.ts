import {Quiz} from "../models/quiz.model";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject} from 'rxjs';
import {Injectable} from "@angular/core";
import {httpOptionsBase, quizzesApi, quizzesHistoryApi} from "../config";
import {QuizHistory, QuizResult} from "../models/quizhistory.model";

@Injectable({
  providedIn: 'root'
})
export class QuizHistoryService {

  public quizHistorySelected$: Subject<QuizResult> = new Subject();
  private quizzesHistory: QuizHistory[] = []
  public quizzesHistory$: BehaviorSubject<QuizHistory[]> = new BehaviorSubject(this.quizzesHistory);

  private quizzesProfileHistory: QuizHistory[] = []
  public quizzesProfileHistory$: BehaviorSubject<QuizHistory[]> = new BehaviorSubject(this.quizzesProfileHistory);

  constructor(private http: HttpClient) {
    this.getQuizzesHistoryFromAPI();

  }

  setSelectedQuiz(quizHistoryId: number): void {
    this.http.get<QuizResult>(quizzesHistoryApi + "/" + quizHistoryId).subscribe((quiz) => this.quizHistorySelected$.next(quiz));
  }

  getQuizzesFromProfile(profileId) {
    this.http.get<QuizHistory[]>(quizzesHistoryApi + "/fromProfile/" + profileId).subscribe((quiz) => {
      this.quizzesProfileHistory = quiz;
      this.quizzesProfileHistory$.next(quiz);
    });
  }

  getQuizzesHistoryFromAPI() {
    this.http.get<QuizHistory[]>(quizzesHistoryApi).subscribe((quizHistoryList) => {
      this.quizzesHistory = quizHistoryList;
      this.quizzesHistory$.next(this.quizzesHistory);
    });
  }

  addQuiz(quiz: QuizHistory): void {
    this.http.post<QuizHistory>(quizzesHistoryApi, quiz, httpOptionsBase).subscribe(() => this.getQuizzesHistoryFromAPI());
  }
}
