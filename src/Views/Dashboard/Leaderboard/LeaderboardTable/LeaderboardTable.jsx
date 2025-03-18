import { Table } from "reactstrap";

//hooks

const dummyData = [
  {
    rank: 1,
    userName: "Josh",
    point: 300,
    level: 9,
    winRate: "90%",
  },

  {
    rank: 2,
    userName: "John",
    point: 240,
    level: 8,
    winRate: "80%",
  },

  {
    rank: 3,
    userName: "Daniel",
    point: 220,
    level: 7,
    winRate: "79%",
  },
];
import { useTable } from "react-table";
import { useMemo } from "react";
export default function LeaderboardTable() {
  const columns = useMemo(
    () => [
      {
        Header: "Rank",
        accessor: "rank",
      },
      {
        Header: "Name",
        accessor: "userName",
      },
      {
        Header: "Point Earned",
        accessor: "point",
      },
      {
        Header: "Level ",
        accessor: "level",
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
      data: dummyData,
    });

  return (
    <div>
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
