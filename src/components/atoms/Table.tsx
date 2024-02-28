import { TableLoading } from "@/atoms";
import React from "react";

interface ITHeads {
  key: string;
  name: string;
  headCustomClass?: string;
  icon?: React.ReactNode;
}

interface ITableProps {
  tHeads?: ITHeads[];
  data?: any[];
  loading?: boolean;
}

const Table: React.FunctionComponent<ITableProps> = ({
  tHeads = [],
  data = [],
  loading = false,
}: ITableProps) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-lg">
        <thead>
          <tr>
            {tHeads.map((head) => (
              <th
                className={`pl-0 text-sm ${head.headCustomClass ? head.headCustomClass : ""}`}
                key={head.key}
              >
                <div className="flex gap-2 items-center">
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
                <tr className="pl-0" key={idx}>
                  {tHeads.map((head) => (
                    <td key={head.key}>{item[head.key]}</td>
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
    </div>
  );
};

export default Table;
