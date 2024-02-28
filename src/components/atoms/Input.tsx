import React from "react";

interface ITextInputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  value: string | number;
  type?: "text" | "number";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | false | undefined;
}

const TextInput: React.FunctionComponent<ITextInputProps> = ({
  label = "",
  name = "",
  placeholder = "Type here",
  value = "",
  type = "text",
  onChange,
  error = "",
}: ITextInputProps) => {
  return (
    <label className="form-control w-full">
      {label && (
        <div className="label -mb-1">
          <span className="label-text text-base font-medium">{label}</span>
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`input input-md input-bordered w-full ${error ? "input-error" : ""}`}
        onChange={onChange}
      />
      {error && (
        <div className="label -mt-1.5">
          <span className="label-text text-red-600 text-base">{error}</span>
        </div>
      )}
    </label>
  );
};

export default TextInput;
