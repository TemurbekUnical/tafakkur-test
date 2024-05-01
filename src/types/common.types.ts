import { AxiosHeaders, AxiosRequestConfig } from "axios";
import { FieldPath, RegisterOptions } from "react-hook-form";

export interface Option<TValue = any, TLabel = string> {
  value: TValue;
  label?: TLabel;
}
export type TSetState<StateType> = React.Dispatch<
  React.SetStateAction<StateType>
>;
export type TRules<FormNames extends Record<string, any>> = Omit<
  RegisterOptions<FormNames, FieldPath<FormNames>>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;
export type ComponentType<T> = T extends React.FC<infer P> ? P : never;
export type ArgumentType<T extends (props: any) => any> = Parameters<T>[0];
export type Required<T> = {
  [P in keyof T]-?: T[P];
};
export interface TError {
  response: {
    data: {
      detail: string;
    };
    status: number;
    statusText: string;
    headers: AxiosHeaders;
    config: AxiosRequestConfig;
    request: unknown;
  };
}
export type TableData = {
  _id: string;
  createdAt: string;
};
export interface Column<T extends TableData> {
  render: (row: T, order: number) => React.ReactNode;
  title: string;
  className?: string;
  isActionsColumn?: boolean;
}
export interface ListResponse<T extends TableData> {
  count: number;
  next: `https://club.logo.uz/api/v1/${string}`;
  previous: null;
  results: T[];
}
