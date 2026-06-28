import type { Invoice } from '@/entities/Invoice';
import type { ColumnDef } from '@tanstack/react-table';
import { CreditCard, Edit2Icon, EllipsisIcon, Trash2Icon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { DataTableColumnHeader } from '../DataTable/DataTableColumnHeader';
import { Checkbox } from '../ui/checkbox';

export const columns: ColumnDef<Invoice>[] = [
  {
    id: 'select',
    size: 80,
    enableColumnFilter: false,
    enableGlobalFilter: false,
    enableHiding: false,
    enableResizing: false,
    enableSorting: false,
    enableMultiSort: false,
    header: ({ table }) => (
      <Checkbox
        className="mt-px"
        checked={
          table.getIsAllRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={() => table.toggleAllPageRowsSelected()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={row.getToggleSelectedHandler()}
        className="mt-px"
        disabled={!row.getCanSelect()}
      />
    ),
  },
  {
    accessorKey: 'invoice',
    header: ({ column }) => <DataTableColumnHeader column={column} title="#" />,
    size: 80,
    enableResizing: false,
    meta: { nameInFilters: 'Order Number #' },
  },
  {
    accessorKey: 'paymentStatus',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={
          <div className="flex items-center gap-1">
            <CreditCard className="size-4" />
            Payment Status
          </div>
        }
      />
    ),
    meta: { nameInFilters: 'Payment Status' },
  },
  {
    accessorKey: 'paymentMethod',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
    meta: { nameInFilters: 'Payment Method' },
  },
  {
    accessorKey: 'totalAmount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    meta: { nameInFilters: 'Total' },
  },
  {
    id: 'actions',
    size: 80,
    enableColumnFilter: false,
    enableGlobalFilter: false,
    enableHiding: false,
    enableResizing: false,
    enableSorting: false,
    enableMultiSort: false,
    cell: ({ row }) => {
      const invoice = row.original;
      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <EllipsisIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48">
              <DropdownMenuItem
                onSelect={() => alert(`Edit ${invoice.invoice}`)}
              >
                <Edit2Icon className="size-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => alert(`Delete ${invoice.invoice}`)}
              >
                <Trash2Icon className="size-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
