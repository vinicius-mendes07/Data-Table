import {
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type PaginationState,
} from '@tanstack/react-table';
import { DataTableContext } from './DataTableContext';
import { useEffect, useMemo, useRef, type ReactNode } from 'react';

interface IDataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  children: ReactNode;
  pagination?: PaginationState;
  onSelectRow?: (selectedRows: TData[]) => void;
}

export function DataTable<TData>({
  data,
  columns,
  children,
  pagination,
  onSelectRow,
}: IDataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    defaultColumn: {
      size: 100,
    },
    initialState: { pagination },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const selectedRows = useMemo(
    () => table.getSelectedRowModel().flatRows.map((row) => row.original),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [table.getSelectedRowModel().flatRows],
  );

  const memoOnSelectRow = useRef(onSelectRow);
  memoOnSelectRow.current = onSelectRow;

  useEffect(() => {
    memoOnSelectRow.current?.(selectedRows);
  }, [selectedRows]);

  return (
    <DataTableContext.Provider value={{ table }}>
      {children}
    </DataTableContext.Provider>
  );
}
