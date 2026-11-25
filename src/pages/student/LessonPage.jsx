import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnswerOption from "../../components/student/AnswerOption.jsx";
import { numberLesson, practiceQuestions } from "../../data/lessons.js";

export default function LessonPage() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");

  function selectAnswer(questionId, answerId) {
    setError("");
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: answerId,
    }));
  }

  function submitQuiz(event) {
    event.preventDefault();
    if (Object.keys(answers).length !== practiceQuestions.length) {
      setError("Please answer every question before submitting.");
      return;
    }

    const correctCount = practiceQuestions.filter(
      (question) => answers[question.id] === question.correctAnswer,
    ).length;

    navigate("/student/results", {
      state: {
        percentage: Math.round((correctCount / practiceQuestions.length) * 100),
        correctCount,
        total: practiceQuestions.length,
      },
    });
  }

  return (
    <div className="mx-auto w-full max-w-container-max space-y-xl">
      <header>
        <p className="mb-xs font-label-md text-secondary">{numberLesson.unit}</p>
        <h1 className="font-headline-xl text-primary">{numberLesson.title}</h1>
        <p className="mt-sm text-on-surface-variant">{numberLesson.explanation}</p>
      </header>

      <section className="rounded-xl bg-surface-container-lowest p-lg">
        <h2 className="mb-md font-headline-md text-primary">Vocabulary</h2>
        <div className="grid grid-cols-2 gap-sm sm:grid-cols-5">
          {numberLesson.vocabulary.map((item) => (
            <div className="rounded-lg bg-surface-container-low p-sm text-center" key={item.number}>
              <p className="text-sm text-on-surface-variant">{item.number}</p>
              <p className="font-bold text-primary">{item.word}</p>
            </div>
          ))}
        </div>
        <p className="mt-md text-on-surface-variant">
          <span className="font-bold">Pronunciation tip:</span>{" "}
          {numberLesson.pronunciationTip}
        </p>
      </section>

      <form className="space-y-lg" onSubmit={submitQuiz}>
        <div>
          <h2 className="font-headline-md text-primary">Practice</h2>
          <p className="mt-xs text-on-surface-variant">Choose the best answer for each question.</p>
        </div>
        {practiceQuestions.map((question, index) => (
          <fieldset className="rounded-xl bg-surface-container-lowest p-lg" key={question.id}>
            <legend className="mb-md font-bold text-primary">
              {index + 1}. {question.prompt}
            </legend>
            <div className="space-y-sm">
              {question.options.map((option) => (
                <AnswerOption
                  checked={answers[question.id] === option.id}
                  key={option.id}
                  onChange={() => selectAnswer(question.id, option.id)}
                  option={option}
                  questionId={question.id}
                />
              ))}
            </div>
          </fieldset>
        ))}
        {error && (
          <p className="font-bold text-error" role="alert">{error}</p>
        )}
        <button
          className="rounded-lg bg-secondary px-md py-sm font-bold text-on-secondary disabled:cursor-not-allowed disabled:opacity-50"
          type="submit"
        >
          Submit answers
        </button>
      </form>
    </div>
  );
}
