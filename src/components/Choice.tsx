interface ChoiceProps {
  children: string;
}

function Choice({ children }: ChoiceProps) {
  return (
    <button className="w-5/6 rounded-full bg-blue-950 p-2 text-blue-300 transition-all duration-200 hover:bg-blue-300 hover:text-blue-950">
      {children}
    </button>
  );
}

export default Choice;
