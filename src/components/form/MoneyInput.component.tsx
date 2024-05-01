import { Control, Controller, FieldPath } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import Error from "./Error.component";
import Label from "./Label.component";
import { TRules } from "@/types/common.types";
import Input from "../inputs/Input.component";
interface IMoneyInput<FormNames extends Record<string, any>> {
  control?: Control<FormNames>;
  name: FieldPath<FormNames>;
  rules?: TRules<FormNames>;
  label?: string;
  placeholder?: string | number;
  disabled?: boolean;
  defaultValue?: any;
  className?: string;
  onlyInteger?: boolean;
  onlyPositive?: boolean;
  required?: boolean;
  class?: string;
  onChange?: (val: number | string) => void;
}
function MoneyInput<FormNames extends Record<string, any>>({
  control,
  name,
  disabled,
  label,
  placeholder = "Введите",
  className = "",
  rules = {},
  onlyInteger = true,
  onlyPositive = true,
  required = true,
  defaultValue,
  onChange,
  class: containerClassName,
}: IMoneyInput<FormNames>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: required,
          message: "Kiriting!",
        },
        min: onlyPositive
          ? {
              value: 0,
              message: "Musbat son kiriting",
            }
          : undefined,
        validate: onlyInteger
          ? (value) => {
              if (!Number.isInteger(Number(value))) {
                return "Butun son kiriting";
              }
              return true;
            }
          : undefined,
        ...rules,
      }}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        return (
          <div className={containerClassName}>
            {label && <Label className="flex ">{label}</Label>}
            <NumericFormat
              value={field.value || ""}
              onBlur={field.onBlur}
              placeholder={String(placeholder)}
              disabled={field.disabled || disabled}
              name={field.name}
              allowLeadingZeros={true}
              className={className}
              thousandSeparator=" "
              allowNegative={true}
              customInput={Input}
              onValueChange={(val) => {
                field.onChange(val.floatValue || "");
                onChange?.(val.floatValue || "");
              }}
            />
            {fieldState.error && <Error>{fieldState.error.message}</Error>}
          </div>
        );
      }}
    />
  );
}

export default MoneyInput;
