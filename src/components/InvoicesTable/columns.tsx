import type { Invoice } from '@/entities/Invoice';
import type { ColumnDef } from '@tanstack/react-table';
import { CreditCard } from 'lucide-react';

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'invoice',
    header: '#',
    size: 80,
    enableResizing: false,
    meta: { nameInFilters: 'Order Number #' },
  },
  {
    accessorKey: 'paymentStatus',
    header: () => (
      <div className="flex items-center gap-1">
        <CreditCard className="size-4" />
        Payment Status
      </div>
    ),
    meta: { nameInFilters: 'Payment Status' },
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Payment Method',
    meta: { nameInFilters: 'Payment Method' },
  },
  {
    accessorKey: 'totalAmount',
    header: 'Total',
    meta: { nameInFilters: 'Total' },
  },
];
