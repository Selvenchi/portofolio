type ButtonProps = {
  children: React.ReactNode;
  className?: React.ReactNode;
};

export default function Button({ children, className = "" }: ButtonProps) {
  return (
    <button
      className={`bg-none border-[0.5px] border-neutral-200 leading-tight text-3xl px-16 py-10 rounded-full cursor-pointer hover:bg-blue-custom hover:border-blue-custom hover:text-white transition-colors duration-300 ease-in-out
      ${className}`}
    >
      {children}
    </button>
  );
}
