import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react';
import { Button } from '../ui/button';
import { useDataTable } from './DataTableContext';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export function DataTablePagination() {
  const { table } = useDataTable();

  return (
    <div className="flex items-center gap-14">
      <div className="flex items-center gap-2">
        <small>Rows per page</small>

        <Select
          value={String(table.getState().pagination.pageSize)}
          onValueChange={(value) => table.setPageSize(Number(value))}
        >
          <SelectTrigger className="w-20">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {[2, 4, 6, 8, 10].map((option) => (
                <SelectItem key={option} value={String(option)}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <small>
        Page {table.getState().pagination.pageIndex + 1} of{' '}
        {table.getPageCount()}
      </small>

      <div className="space-x-2">
        <Button
          onClick={table.firstPage}
          variant="outline"
          size="sm"
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeftIcon className="size-4" />
        </Button>
        <Button
          onClick={table.previousPage}
          variant="outline"
          size="sm"
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon className="size-4" />
        </Button>
        <Button
          onClick={table.nextPage}
          variant="outline"
          size="sm"
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon className="size-4" />
        </Button>
        <Button
          onClick={table.lastPage}
          variant="outline"
          size="sm"
          disabled={!table.getCanNextPage()}
        >
          <ChevronsRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
}
