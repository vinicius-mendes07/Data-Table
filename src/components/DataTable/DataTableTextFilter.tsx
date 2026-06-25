import { Input } from '../ui/input';
import { useDataTable } from './DataTableContext';

interface IDataTableTextFilter {
  column?: string;
  placeholder?: string;
}

export function DataTableTextFilter({
  placeholder,
  column,
}: IDataTableTextFilter) {
  const { table } = useDataTable();

  if (column) {
    const tableColumn = table.getColumn(column);

    const value = tableColumn?.getFilterValue() as string | undefined;

    return (
      <Input
        placeholder={placeholder}
        value={value ?? ''}
        onChange={(event) => tableColumn?.setFilterValue(event?.target.value)}
      />
    );
  }

  return (
    <Input
      placeholder={placeholder}
      onChange={(event) => table.setGlobalFilter(event.target.value)}
    />
  );
}
