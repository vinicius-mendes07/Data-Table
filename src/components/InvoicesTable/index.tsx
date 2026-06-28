import { invoices } from './data';
import { DataTable } from '../DataTable';
import { columns } from './columns';
import { DataTableColumnsVisibilityDropdown } from '../DataTable/DataTableColumnsVisibilityDropdown';
import { DataTableContent } from '../DataTable/DataTableContent';
import { DataTableTextFilter } from '../DataTable/DataTableTextFilter';
import { DataTableFacetedFilter } from '../DataTable/DataTableFacetedFilter';
import { DataTablePagination } from '../DataTable/DataTablePagination';

export function InvoicesTable() {
  return (
    <DataTable
      data={invoices}
      columns={columns}
      onSelectRow={(selectedRows) => console.log(selectedRows)}
      pagination={{ pageIndex: 0, pageSize: 6 }}
    >
      <div className="mb-4 flex items-center gap-4">
        <DataTableTextFilter placeholder="Search..." column="paymentStatus" />
        <DataTableFacetedFilter column="paymentStatus" />
        <DataTableColumnsVisibilityDropdown />
      </div>
      <DataTableContent />

      <div className="flex justify-end items-center mt-4">
        <DataTablePagination />
      </div>
    </DataTable>
  );
}
