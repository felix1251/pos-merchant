import React from "react";

interface ICheckboxProps {
  name: string;
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Checkbox: React.FunctionComponent<ICheckboxProps> = ({
  name = "",
  label = "'",
  checked = false,
  onChange,
  disabled = false,
}: ICheckboxProps) => {
  return (
    <label className="label flex w-fit cursor-pointer justify-start gap-2.5 p-0">
      <input
        name={name}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        className="checkbox checkbox-sm rounded-sm disabled:bg-gray-400"
        onChange={onChange}
      />
      {label && (
        <span className="label-text text-base font-medium text-secondary">
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
