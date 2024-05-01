import { Column, TableData } from "@/types/common.types";
import className from "@/utils/className";
import { Fragment } from "react";

interface Props<T extends TableData> {
  columns: Column<T>[];
  data?: T[];
  total: number;
  onRowClick?: (row: T) => void;
}

function Table<T extends TableData>({ ...all }: Props<T>) {
  return (
    <div>
      <div>
        <Main {...all} />
      </div>
    </div>
  );
}

const Main = <T extends TableData>({ columns, data, onRowClick }: Props<T>) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead className="text-xs text-gray-400 uppercase">
        <tr>
          {columns.map((column, index) => (
            <th key={index} scope="col" className="font-semibold px-6 py-3">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, rowIndex) => (
          <Fragment key={item._id}>
            <tr
              className={className({
                "bg-white rounded-3xl hover:bg-slate-200 hover:cursor-pointer":
                  true,
              })}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => !column.isActionsColumn && onRowClick?.(item)}
                  className={className({
                    "px-4 py-6 font-medium text-gray-900 whitespace-nowrap":
                      true,
                    [column.className || ""]: column.className,
                  })}
                >
                  {column.render(item, rowIndex + 1)}
                </td>
              ))}
            </tr>
            <br />
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
