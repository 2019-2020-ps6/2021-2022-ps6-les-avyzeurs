import { HttpHeaders } from "@angular/common/http";

const api = "http://localhost:9428/api"

export const quizzesApi = api + "/quizzes"
export const profileApi = api + "/profiles"
export const quizzesHistoryApi = api + "/quizzesHistory"


export const httpOptionsBase = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

export const adminCredentials = [
  {
    "username": "admin",
    "password": "admin"
  }
]
