import { Control, Controller, Path } from "react-hook-form";
import { GroupBase, OptionsOrGroups } from "react-select";
import Error from "./Error.component";
import Label from "./Label.component";
import { Option } from "@/types/common.types";
import Selector from "@/components/inputs/Select.component";

interface ISelect<
  FormNames extends Record<string, any>,
  TOption extends Option
> {
  control: Control<FormNames>;
  name: Path<FormNames>;
  placeholder?: string;
  options: OptionsOrGroups<TOption, GroupBase<TOption>>;
  label?: string;
  required?: boolean;
  isLoading?: boolean;
  className?: string;
  class?: string;
  isSearchable?: boolean;
  onChange?: (option: TOption) => void;
}
const getLabel = (option: Option) =>
  option.label || option?.value || "no label";
function SelectForm<
  FormNames extends Record<string, any>,
  TOption extends Option = Option
>({
  name,
  placeholder = "Введите информацию",
  control,
  options = [],
  isLoading = false,
  label,
  required = true,
  className = "",
  isSearchable = false,
  onChange,
  class: containerClassName,
}: ISelect<FormNames, TOption>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: required,
          message: "Tanlang!",
        },
      }}
      render={({ field, fieldState, formState }) => {
        if (!field?.value?.label && field?.value?.value && options?.length) {
          const findingOption = options.find(
            (option) => (option as TOption)?.value === field.value?.value
          )?.label;
          field.value = {
            ...field.value,
            label: findingOption,
          };
        }
        return (
          <div className={containerClassName}>
            {label && <Label>{label}</Label>}
            <Selector
              options={options as any}
              placeholder={placeholder}
              isSearchable={isSearchable}
              getOptionLabel={getLabel}
              getOptionValue={(option) => option?.value}
              isLoading={!options?.length && isLoading}
              className={className}
              isDisabled={formState.disabled}
              {...field}
              onChange={(newValue, actionMeta) => {
                field.onChange(newValue, actionMeta);
                onChange?.(newValue as TOption);
              }}
            />
            {fieldState.error && <Error>{fieldState.error.message}</Error>}
          </div>
        );
      }}
    />
  );
}

export default SelectForm;
