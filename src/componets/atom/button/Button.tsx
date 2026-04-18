import './button.css'
type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

function Button({disabled, text,onClick}:ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
