import { cn } from "@/utils/helper";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton: React.FunctionComponent<ButtonProps> = ({
  className,
  ...attr
}) => {
  return (
    <button
      className={cn(
        "border text-center transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center select-none rounded-full justify-center text-xs font-medium h-6 w-6 bg-white border-gray-gray3 hover:bg-gray-gray1"
      )}
      {...attr}
    >
      {attr?.children}
    </button>
  );
};

export default IconButton;
