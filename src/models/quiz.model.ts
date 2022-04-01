export interface Quiz {
  id: number;
  name: string;
  image?: string;
  questions: Question[];
}

export interface Question {
  id: number;
  question: string;
  image?: string;
  video?: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  type?: number;
  label: string;
  correctAnswer: boolean;
}
