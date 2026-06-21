import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { invoices } from './data';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { CreditCard } from 'lucide-react';

export function InvoicesTable() {
  const table = useReactTable({
    data: invoices,
    columns: [
      {
        accessorKey: 'invoice',
        header: '#',
      },
      {
        accessorKey: 'paymentStatus',
        header: () => (
          <div className="flex items-center gap-1">
            <CreditCard className="size-4" />
            Payment Status
          </div>
        ),
      },
      {
        accessorKey: 'paymentMethod',
        header: 'Payment Method',
      },
      {
        accessorKey: 'totalAmount',
        header: 'Total',
      },
    ],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} colSpan={header.colSpan}>
                {!header.isPlaceholder &&
                  flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getAllCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
