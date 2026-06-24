import { invoices } from './data';
import { DataTable } from '../DataTable';
import { columns } from './columns';
import { DataTableColumnsVisibilityDropdown } from '../DataTable/DataTableColumnsVisibilityDropdown';
import { DataTableContent } from '../DataTable/DataTableContent';

export function InvoicesTable() {
  return (
    <DataTable data={invoices} columns={columns}>
      <DataTableColumnsVisibilityDropdown />
      <DataTableContent />
    </DataTable>
  );
}
