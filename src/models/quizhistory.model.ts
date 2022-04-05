import {Answer} from "./quiz.model";

export interface QuizHistory {
  id: number;
  quizId: number;
  profileId?: number;
  answers: AnswerHistory[];
}

export interface AnswerHistory {
  id: number;
  chosenAnswer: boolean;
  quizHistoryId: number;
  answerId: number;
}

export interface QuizResult {
  id: number;
  quizId: number;
  profileId?: number;
  answers: QuestionResult[];
}

export interface QuestionResult {
  id: number;
  question: string;
  image?: string;
  video?: string;
  answers: AnswerHistory[];
}
