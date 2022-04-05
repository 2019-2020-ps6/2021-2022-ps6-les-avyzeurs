import {Answer} from "./quiz.model";

export interface QuizHistory {
  id: number;
  quizId: number;
  profileId: number;
  answers: AnswerHistory[];
}

export interface AnswerHistory {
  id: number;
  quizHistoryId: number;
  answerId: number;
}

export interface QuizResult {
  id: number;
  quizId: number;
  profileId: number;
  answers: QuestionResult[];
}

export interface QuestionResult {
  id: number;
  question: string;
  image?: string;
  video?: string;
  answers: AnswerHistory[];
}


export interface QuizProfileResult {
  id: number;
  quizId: number;
  profileId: number;
  answers: AnswerHistory[];
  name: string;
  score: number;
  nbQuestions: number;
}
