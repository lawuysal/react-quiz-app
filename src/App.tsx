import { QuestionCard } from "./components/QuestionCard";
import { Header } from "./components/Header";
import { questions } from "../public/questions";
import { Question } from "./types/Question";

import { useEffect, useState } from "react";

interface Settings {
  point: number;
  penalty: number;
}

function App() {
  const [score, setScore] = useState<number>(0);
  const [settings, setSettings] = useState<Settings>({ point: 3, penalty: 1 });

  function renderPassQuestionButton() {
    if (!isLastQuestion) {
      return (
        <button
          className="mt-4 rounded-full bg-blue-200 px-8 py-2"
          onClick={handlePassQuestion}
        >
          Pass Question
        </button>
      );
    }
  }

  useEffect(() => {
    const question: Question = {
      question: questions[0].question,
      choices: questions[0].choices,
      correctChoice: questions[0].correctChoice,
    };
    setCurrentQuestion(question);
  }, []);

  return (
    <div className="flex h-screen justify-center bg-blue-950">
      <div className="mt-8 flex h-3/4 w-3/4 flex-col items-center rounded-lg bg-blue-800 p-4 shadow-md transition-all duration-300 hover:shadow-xl md:mt-12 md:w-8/12 lg:mt-16 lg:h-4/5 lg:w-1/2">
        <Header />
        <QuestionCard question={currentQuestion} />
        {renderPassQuestionButton()}
      </div>
    </div>
  );
}

export default App;
