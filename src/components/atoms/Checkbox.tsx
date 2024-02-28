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
    <label className="p-0 flex justify-start gap-2.5 label cursor-pointer w-fit">
      <input
        name={name}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        className="rounded-sm checkbox checkbox-sm disabled:bg-gray-400"
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
