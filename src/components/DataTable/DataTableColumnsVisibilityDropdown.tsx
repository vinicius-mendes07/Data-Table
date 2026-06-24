import { Settings2 } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useDataTable } from './DataTableContext';

export function DataTableColumnsVisibilityDropdown() {
  const { table } = useDataTable();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings2 /> Visualizar
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48" align="end">
        {table.getAllColumns().map((column) =>
          column.getCanHide() ? (
            <DropdownMenuCheckboxItem
              key={column.id}
              checked={column.getIsVisible()}
              onCheckedChange={column.toggleVisibility}
            >
              {column.columnDef.meta?.nameInFilters}
            </DropdownMenuCheckboxItem>
          ) : null,
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
