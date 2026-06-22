import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table';
import { MemoizedDataTableBody } from './DataTableBody';
import { useMemo } from 'react';

interface IDataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export function DataTable<TData>({ data, columns }: IDataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    defaultColumn: {
      size: 100,
    },
    getCoreRowModel: getCoreRowModel(),
  });

  const { columnSizingInfo, columnSizing } = table.getState();

  const colSizeVariables = useMemo(
    () =>
      table.getFlatHeaders().reduce<Record<string, number>>(
        (acc, header) => ({
          ...acc,
          [`--header-${header.id}-size`]: header.getSize(),
          [`--col-${header.column.id}-size`]: header.column.getSize(),
        }),
        {},
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [columnSizingInfo, columnSizing, table.getFlatHeaders],
  );

  return (
    <Table style={colSizeVariables}>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                colSpan={header.colSpan}
                style={{ width: `calc(var(--header-${header.id}-size) * 1px)` }}
                className="relative group"
              >
                {!header.isPlaceholder &&
                  flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}

                {header.column.getCanResize() && (
                  <div
                    className={cn(
                      'absolute right-0 h-full w-1.5 top-0 bg-primary/10 cursor-col-resize opacity-0 group-hover:opacity-100 transition-all duration-300',
                      header.column.getIsResizing() &&
                        'opacity-100 bg-primary/80',
                    )}
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                  />
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <MemoizedDataTableBody table={table} />
    </Table>
  );
}
