import { Table } from "reactstrap";

//hooks

import { useTable } from "react-table";
import { useMemo } from "react";
export default function LeaderboardTable({ items }) {
  const columns = useMemo(
    () => [
      {
        Header: "Rank",
        accessor: "rank",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Point Earned",
        accessor: "totalPoints",
      },

      {
        Header: "Win Rate",
        accessor: "winRate",
      },
    ],
    []
  );
  const { getTableBodyProps, getTableProps, rows, prepareRow, headerGroups } =
    useTable({
      columns,
      data: items,
    });

  return (
    <div
      style={{
        height: "12rem",
        overflow: "auto",
      }}
    >
      <Table hover={true} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, key) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()} key={`group_${key}`}>
                {headerGroup.headers.map((column, indx) => {
                  return (
                    <th {...column.getHeaderProps()} key={`column__${indx}`}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>

        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row, key) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()} key={`tr_body_${key}`}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell, key) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()} key={`td_data_${key}`}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
}
