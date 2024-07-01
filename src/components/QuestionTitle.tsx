interface QuestionTitleProps {
  questionTitle: string;
}

function QuestionTitle({ questionTitle }: QuestionTitleProps) {
  return (
    <p className="flex justify-center text-lg font-bold text-blue-100 transition-all duration-300">
      {questionTitle}
    </p>
  );
}

export default QuestionTitle;
