import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject} from 'rxjs';
import {Injectable} from "@angular/core";
import {httpOptionsBase, quizzesHistoryApi} from "../config";
import {QuizHistory, QuizProfileResult, QuizResult} from "../models/quizresult.model";

@Injectable({
  providedIn: 'root'
})
export class QuizHistoryService {

  public quizHistorySelected$: Subject<QuizResult> = new Subject();
  private quizzesHistory: QuizResult[] = []
  public quizzesHistory$: BehaviorSubject<QuizResult[]> = new BehaviorSubject(this.quizzesHistory);

  private quizzesProfileHistory: QuizProfileResult[] = []
  public quizzesProfileHistory$: BehaviorSubject<QuizProfileResult[]> = new BehaviorSubject(this.quizzesProfileHistory);

  constructor(private http: HttpClient) {
    this.getQuizzesHistoryFromAPI();

  }

  setSelectedQuiz(quizHistoryId: number): void {
    this.http.get<QuizResult>(quizzesHistoryApi + "/" + quizHistoryId).subscribe((quiz) => this.quizHistorySelected$.next(quiz));
  }

  getQuizzesFromProfile(profileId) {
    this.http.get<QuizProfileResult[]>(quizzesHistoryApi + "/profile/" + profileId).subscribe((quiz) => {
      this.quizzesProfileHistory = quiz;
      this.quizzesProfileHistory$.next(quiz);
    });
  }

  getQuizzesHistoryFromAPI() {
    /**
     this.http.get<QuizHistory[]>(quizzesHistoryApi).subscribe((quizHistoryList) => {
      this.quizzesHistory = quizHistoryList;
      this.quizzesHistory$.next(this.quizzesHistory);
    });
     **/
  }

  addQuiz(quiz: QuizHistory): void {
    this.http.post<QuizResult>(quizzesHistoryApi, quiz, httpOptionsBase).subscribe(() => this.getQuizzesHistoryFromAPI());
  }

}
