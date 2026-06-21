import { CreditCard } from 'lucide-react';

export const columns = [
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
];
