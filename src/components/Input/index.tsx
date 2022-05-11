import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...rest} />
    </div>
  );
};

export default Input;
