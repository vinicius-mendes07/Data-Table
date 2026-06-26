import { invoices } from './data';
import { DataTable } from '../DataTable';
import { columns } from './columns';
import { DataTableColumnsVisibilityDropdown } from '../DataTable/DataTableColumnsVisibilityDropdown';
import { DataTableContent } from '../DataTable/DataTableContent';
import { DataTableTextFilter } from '../DataTable/DataTableTextFilter';
import { DataTableFacetedFilter } from '../DataTable/DataTableFacetedFilter';

export function InvoicesTable() {
  return (
    <DataTable data={invoices} columns={columns}>
      <div className="mb-4 flex items-center gap-4">
        <DataTableTextFilter placeholder="Search..." column="paymentStatus" />
        <DataTableFacetedFilter column="paymentStatus" />
        <DataTableColumnsVisibilityDropdown />
      </div>
      <DataTableContent />
    </DataTable>
  );
}
