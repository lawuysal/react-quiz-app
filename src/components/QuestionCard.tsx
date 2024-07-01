import Choice from "./Choice";
import QuestionTitle from "./QuestionTitle";
import QuestionIndex from "./QuestionIndex";
import { Question } from "./../types/Question";

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  function handleChoiceRenders() {
    // This shuffles the choices array
    const shuffledChoices = question.choices.sort(() => Math.random() - 0.5);
    return shuffledChoices.map((choice, index) => (
      <Choice key={index}>{choice}</Choice>
    ));
  }

  return (
    <div className="mt-6 rounded-lg p-4 transition-all duration-300 sm:w-5/6 md:mt-8">
      <span className="flex flex-col transition-all duration-300">
        <QuestionIndex index={0} />
        <QuestionTitle questionTitle={question.question} />
      </span>
      <div className="mt-8 flex flex-col items-center gap-2">
        {handleChoiceRenders()}
      </div>
    </div>
  );
}
