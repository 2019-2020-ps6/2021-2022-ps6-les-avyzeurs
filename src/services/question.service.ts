import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Question} from "../models/quiz.model";
import {HttpClient} from "@angular/common/http";
import {quizzesApi} from "../config";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public questionSelected$: Subject<Question> = new Subject();

  constructor(private http: HttpClient) {

  }

  setSelectedQuiz(quizId: number, questionId: number): void {
    let url = quizzesApi + "/" + quizId + "/" + "questions" + "/" + questionId;
    this.http.get<Question>(url).subscribe(question => this.questionSelected$.next(question))
  }


}
