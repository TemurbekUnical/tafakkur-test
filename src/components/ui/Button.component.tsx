import className from "@/utils/className";
import React from "react";

const Button = ({
  isPending,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { isPending?: boolean }) => {
  return (
    <button
      {...props}
      disabled={props.disabled || isPending}
      className={className({
        "bg-main-blue py-3 w-full rounded-md text-white": true,
        [props.className || ""]: props.className,
      })}
    >
      {props.children}
      {isPending && " (Loading...)"}
    </button>
  );
};

export default Button;
