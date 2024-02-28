import React from "react";

interface ISelectProps {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string | false | undefined;
  options?: string[];
}

const Select: React.FunctionComponent<ISelectProps> = ({
  label = "",
  error = "",
  options = [],
  value = "",
  name = "",
  onChange,
}: ISelectProps) => {
  return (
    <label className="form-control w-full">
      {label && (
        <div className="label -mb-1">
          <span className="label-text text-base font-medium">{label}</span>
        </div>
      )}
      <select
        name={name}
        className={`select text-base select-bordered ${error ? "select-error" : ""} ${value ? "" : "text-gray-400"}`}
        onChange={onChange}
        value={value}
      >
        <option className="text-gray-400" value="" disabled>
          Choose
        </option>
        {options.map((option, idx) => (
          <option className="text-black" key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <div className="label -mt-1.5">
          <span className="label-text text-red-600 text-base">{error}</span>
        </div>
      )}
    </label>
  );
};

export default Select;
