import type { Invoice } from '@/entities/Invoice';
import type { ColumnDef } from '@tanstack/react-table';
import { CreditCard } from 'lucide-react';

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'invoice',
    header: '#',
    size: 50,
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
];
