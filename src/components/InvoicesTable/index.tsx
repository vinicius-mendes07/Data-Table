import { invoices } from './data';
import { DataTable } from '../DataTable';
import { columns } from './columns';

export function InvoicesTable() {
  return <DataTable data={invoices} columns={columns} />;
}
