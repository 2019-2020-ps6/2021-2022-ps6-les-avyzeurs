import {Question, Quiz} from '../models/quiz.model';

export const QUESTION_ACTOR: Question = {
  id: 1, question: 'Jean Gabin a joué dans...', answers: [{
    id: 1, label: 'Les tuches II', correctAnswer: false,
  }, {
    id: 2, label: 'La grande illusion', correctAnswer: true,
  }]
};

export const QUIZ_LIST: Quiz[] = [{
  id: 1, name: 'Les Acteurs', image: 'Actor', questions: [],
}, {
  id: 2, name: 'Les voitures historiques', questions: [],
}];
