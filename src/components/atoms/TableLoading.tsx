import React from "react";

interface ITableLoading {
  colCount: number;
  rowCount: number;
}

const TableLoading: React.FunctionComponent<ITableLoading> = ({
  colCount,
  rowCount,
}: ITableLoading) => {
  return (
    <>
      {Array.from(Array(colCount), (_colItem, idx) => (
        <tr key={idx}>
          {Array.from(Array(rowCount), (_rowItem, idx2) => (
            <td className="pl-0" key={idx2}>
              <div className="bg-secondary/10 rounded-md w-full h-5 animate-pulse"></div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableLoading;
