import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
  type?: string;
}

export const Input = ({ placeholder, label, type, ...rest }: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      {type ? (
        <input placeholder={placeholder} type={type} {...rest} />
      ) : (
        <input placeholder={placeholder} {...rest} />
      )}
    </div>
  );
};
