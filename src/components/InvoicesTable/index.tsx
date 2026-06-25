import { invoices } from './data';
import { DataTable } from '../DataTable';
import { columns } from './columns';
import { DataTableColumnsVisibilityDropdown } from '../DataTable/DataTableColumnsVisibilityDropdown';
import { DataTableContent } from '../DataTable/DataTableContent';
import { DataTableTextFilter } from '../DataTable/DataTableTextFilter';

export function InvoicesTable() {
  return (
    <DataTable data={invoices} columns={columns}>
      <div className="mb-4 flex items-center gap-4">
        <DataTableTextFilter
          placeholder="Search for Order Number #"
          column="invoice"
        />
        <DataTableColumnsVisibilityDropdown />
      </div>
      <DataTableContent />
    </DataTable>
  );
}
