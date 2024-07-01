interface QuestionIndexProps {
  index: number;
}

function QuestionIndex({ index }: QuestionIndexProps) {
  return (
    <h2 className="flex justify-center text-blue-300 transition-all duration-300">
      Question {index + 1} of 10:
    </h2>
  );
}

export default QuestionIndex;
