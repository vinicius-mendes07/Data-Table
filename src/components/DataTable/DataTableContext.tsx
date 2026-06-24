import type { Table } from '@tanstack/react-table';
import { createContext, useContext } from 'react';

interface IDataTableContext {
  table: Table<any>;
}

export const DataTableContext = createContext({} as IDataTableContext);

export function useDataTable() {
  const ctxValue = useContext(DataTableContext);

  if (!ctxValue) {
    throw new Error('useDataTable should only be used inside a DataTable.');
  }

  return ctxValue;
}
