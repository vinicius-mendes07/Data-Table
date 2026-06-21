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
          <div className="flex items-center">
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

  console.log(table);
  console.log(table.getHeaderGroups());
  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
