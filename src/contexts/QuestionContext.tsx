import { createContext, useState } from "react";
import { questions } from "./../../public/questions";
import { Question } from "./../types/Question";

export const QuestionContext = createContext<QuestionContextType | null>(null);

interface QuestionProviderProps {
  children: React.ReactNode;
}

type QuestionContextType = {
  handlePassQuestion: () => void;
  questionIndex: number;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  currentQuestion: Question;
  isLastQuestion: boolean;
};

export const QuestionProvider = ({ children }: QuestionProviderProps) => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[0],
  );
  const [isLastQuestion, setIsLastQuestion] = useState<boolean>(false);

  function handlePassQuestion() {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setCurrentQuestion(questions[questionIndex]);
      if (questionIndex === questions.length - 2) {
        setIsLastQuestion(true);
      }
    }
  }

  return (
    <QuestionContext.Provider
      value={{
        handlePassQuestion,
        questionIndex,
        setQuestionIndex,
        currentQuestion,
        isLastQuestion,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
