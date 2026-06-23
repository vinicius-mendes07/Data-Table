import { flexRender, type Table } from '@tanstack/react-table';
import { TableBody, TableCell, TableRow } from '../ui/table';
import { memo } from 'react';

export function DataTableBody<TData>({ table }: { table: Table<TData> }) {
  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TableCell
              key={cell.id}
              style={{ width: `calc(var(--col-${cell.column.id}-size) * 1px)` }}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}

export const MemoizedDataTableBody = memo(
  DataTableBody,
) as typeof DataTableBody;
