export const questionLessons = [
  { id: "greetings", label: "Lesson 1: Greetings (A1)" },
  { id: "numbers", label: "Lesson 2: Numbers & Colors (A1)" },
  { id: "verbs", label: "Lesson 3: Basic Verbs (A1)" },
];

export const initialQuestions = [
  {
    id: "question-greetings-1",
    lessonId: "greetings",
    prompt: 'Translate "Good Morning" to Spanish.',
    options: ["Buenos días", "Buenas noches", "Hola", "Adiós"],
    correctOption: 0,
    explanation:
      '"Good morning" se utiliza por la mañana y se traduce como "Buenos días".',
  },
  {
    id: "question-greetings-2",
    lessonId: "greetings",
    prompt: 'Which pronoun is used for formal "You"?',
    options: ["Tú", "Usted", "Él", "Nosotros"],
    correctOption: 1,
    explanation:
      'En español se utiliza "usted" para dirigirse formalmente a una persona.',
  },
];
