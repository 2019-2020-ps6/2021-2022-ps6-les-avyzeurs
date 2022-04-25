import {Injectable} from '@angular/core';
import {httpOptionsBase, parametersApi} from "../config"
import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Parameter} from "../models/profile.model";
import {Quiz} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  public parameterSelected$: Subject<Parameter> = new Subject();
  public parameters: Parameter[] = []
  public parameters$: BehaviorSubject<Parameter[]> = new BehaviorSubject(this.parameters);

  constructor(private http: HttpClient) {
    this.getParametersFromApi();
  }

  getParametersFromApi() {
    this.http.get<Parameter[]>(parametersApi).subscribe((parameterList) => {
      this.parameters = parameterList;
      this.parameters$.next(this.parameters);
    });
  }

  setSelectedParameter(parameterId: number): void {
    this.http.get<Parameter>(parametersApi + "/" + parameterId).subscribe((parameter) => {
      this.parameterSelected$.next(parameter);
    });
  }

  saveParameter(parameter: Parameter): void {
    this.http.put<Quiz>(parametersApi + "/" + parameter.id, parameter, httpOptionsBase).subscribe(() => this.getParametersFromApi());
  }


}
