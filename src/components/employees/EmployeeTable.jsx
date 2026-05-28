import React from 'react';
import { flexRender } from '@tanstack/react-table';

function EmployeeTable({ table, loading, columns }) {
  return (
    <div className="flex-1 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="h-full overflow-auto max-h-[600px]">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-brand-dark text-white sticky top-0 z-20">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left font-medium whitespace-nowrap cursor-pointer select-none"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted()] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-slate-200">
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="py-10">
                  <div className="flex items-center justify-center">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-brand-dark"></div>
                  </div>
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map(row => (
                <tr key={row.id} className="hover:bg-gray-400 hover:text-white">
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="px-4 py-3 whitespace-nowrap">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;
