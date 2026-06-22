import { invoices } from './data';
import { DataTable } from '../DataTable';
import { columns } from './columns';
import type { Invoice } from '@/entities/Invoice';

export function InvoicesTable() {
  const data = Array.from<Invoice[]>({ length: 100 }).fill(invoices).flat();

  return <DataTable data={data} columns={columns} />;
}
