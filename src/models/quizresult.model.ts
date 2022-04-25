import {Question} from "./quiz.model";

export interface AnswerHistory {
  id: number;
  quizHistoryId: number;
  answerId: number;
}

export interface QuizResult {
  id: number;
  quizId: number;
  profileId: number;
  name: string;
  image: string;
  questions: Question[];
  answers: AnswerHistory[];
}

export interface QuizHistory {
  id: number;
  quizId: number;
  profileId: number;
  answers: number[];
  nbOfErrorDueToMovement: number;
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
