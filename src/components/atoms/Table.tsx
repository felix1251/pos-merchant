/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableLoading } from "@/atoms";
import React from "react";
import { AiOutlineInbox } from "react-icons/ai";

const Table: React.FunctionComponent<ITableProps<IData>> = ({
  tHeads = [],
  data = [],
  loading = false,
}: ITableProps<IData>) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table table-pin-rows table-lg">
        <thead>
          <tr>
            {tHeads.map((head) => (
              <th
                className={`pl-0 text-base md:text-sm ${head.headCustomClass ? head.headCustomClass : ""}`}
                key={head.key}
              >
                <div className="flex items-center gap-2 text-nowrap">
                  {head.name}
                  {head.icon}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            <>
              {data.map((item, idx) => (
                <tr className="font-medium" key={idx}>
                  {tHeads.map((head) => (
                    <td
                      className="text-nowrap pl-0 text-lg md:text-[1.05rem]"
                      key={head.key}
                    >
                      {head.render ? head.render(item) : item[head.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </>
          ) : (
            <TableLoading
              colCount={data.length ? data.length : 4}
              rowCount={tHeads.length}
            />
          )}
        </tbody>
      </table>
      {!loading && data.length === 0 && (
        <div className="flex h-60 items-center justify-center rounded-b-lg bg-gray-50 px-5 text-2xl font-bold text-secondary/50">
          <div className="flex items-center gap-2.5">
            <AiOutlineInbox className="text-4xl" />
            <span>No data found</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;

export interface ITHeads {
  key: string;
  name: string;
  headCustomClass?: string;
  icon?: React.ReactNode;
  render?: (value: any) => React.ReactNode;
}

type IData = any[];

export interface ITableProps<T = IData> {
  tHeads?: ITHeads[];
  data?: T;
  loading?: boolean;
}
