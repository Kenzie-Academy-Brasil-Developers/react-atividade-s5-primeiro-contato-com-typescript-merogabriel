import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  hobby: string;
  age: number;
}

export const Card = ({ name, hobby, age, ...rest }: InputProps) => {
  return (
    <div>
      <p>
        {name}, {age}
      </p>
      <p>{hobby}</p>
    </div>
  );
};
