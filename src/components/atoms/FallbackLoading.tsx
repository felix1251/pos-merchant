import React from "react";
import { ImSpinner8 } from "react-icons/im";

const FallbackLoading: React.FunctionComponent = () => {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <ImSpinner8 className="animate-spin text-4xl text-secondary" />
    </div>
  );
};

export default FallbackLoading;
