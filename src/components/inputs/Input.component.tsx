import className from "@/utils/className";
import React from "react";

const Input = ({
  iserror,
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { iserror?: boolean }) => {
  return (
    <input
      {...rest}
      className={className({
        ["border transition-all outline-none text-base rounded-[10px] block w-full py-3 px-4 border-gray-200 "]:
          true,
        [rest.className || ""]: true,
        ["border !border-error"]: iserror,
      })}
    />
  );
};

export default Input;
