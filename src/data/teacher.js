export const teacherProfile = {
  name: "María García",
  subject: "English A1",
};

export const teacherStats = [
  { id: "students", label: "Estudiantes activos", value: "24" },
  { id: "lessons", label: "Lecciones publicadas", value: "12" },
  { id: "completion", label: "Finalización promedio", value: "78%" },
  { id: "pending", label: "Preguntas pendientes", value: "8" },
];

export const teacherLessons = [
  {
    id: "lesson-1",
    title: "Numbers 1-10",
    unit: "Unit 1: Fundamentals",
    status: "Published",
    students: 24,
    completion: 85,
  },
  {
    id: "lesson-2",
    title: "Greetings",
    unit: "Unit 1: Fundamentals",
    status: "Published",
    students: 22,
    completion: 72,
  },
  {
    id: "lesson-3",
    title: "Introducing yourself",
    unit: "Unit 2: Conversations",
    status: "Draft",
    students: 0,
    completion: 0,
  },
];

export const studentProgress = [
  {
    id: "student-1",
    name: "Alex Johnson",
    completed: 8,
    total: 12,
    average: "85%",
    lastActivity: "Today",
  },
  {
    id: "student-2",
    name: "Sofia Martinez",
    completed: 7,
    total: 12,
    average: "91%",
    lastActivity: "Yesterday",
  },
  {
    id: "student-3",
    name: "Daniel Smith",
    completed: 5,
    total: 12,
    average: "76%",
    lastActivity: "Monday",
  },
];

export const initialQuestions = [
  {
    id: "question-1",
    prompt: "How do you spell the number 5?",
    lesson: "Numbers 1-10",
    type: "Multiple choice",
  },
  {
    id: "question-2",
    prompt: "What number comes after seven?",
    lesson: "Numbers 1-10",
    type: "Multiple choice",
  },
];