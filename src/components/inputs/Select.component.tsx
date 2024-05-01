import { ComponentType, Option } from "@/types/common.types";
import { useCallback } from "react";
import ReactSelect from "react-select";

const Selector = <T extends Option, TIsMulti extends boolean = false>(
  props: ComponentType<typeof ReactSelect<T, TIsMulti>> & { class?: string }
) => {
  const returnString = useCallback((str: string) => str, []);
  return (
    <span className={`_tw-select ` + props.class}>
      <ReactSelect
        isSearchable={props.isSearchable || false}
        noOptionsMessage={returnString.bind(null, "Информация не найдена")}
        loadingMessage={returnString.bind(null, "Загрузка...")}
        placeholder="Выберите..."
        isDisabled={!props?.options?.length || props.isDisabled}
        {...props}
        classNames={{
          control: () =>
            "transition-all !border-gray-200 _tw-control text-gray-900 !rounded-[10px] block w-full py-[6px] px-2 " +
            props.className,
        }}
        components={{
          IndicatorSeparator: null,
          ...props.components,
        }}
      />
    </span>
  );
};

export default Selector;
