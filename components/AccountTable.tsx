import React from 'react';
import { AccountRecord, SortConfig, SortKey } from '../types';
import { ArrowUpIcon, ArrowDownIcon } from './icons';
import { en } from '../locales/en';

interface AccountTableProps {
  records: AccountRecord[];
  onSort: (key: SortKey) => void;
  sortConfig: SortConfig;
  t: typeof en;
}

const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

const TableHeader: React.FC<{
  title: string;
  sortKey: SortKey;
  onSort: (key: SortKey) => void;
  sortConfig: SortConfig;
  className?: string;
}> = ({ title, sortKey, onSort, sortConfig, className = '' }) => {
  const isSorted = sortConfig.key === sortKey;
  const direction = isSorted ? sortConfig.direction : undefined;

  return (
    <th
      scope="col"
      className={`px-6 py-4 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors duration-150 ${className}`}
      onClick={() => onSort(sortKey)}
      aria-label={`Sort by ${title}`}
    >
      <div className="flex items-center">
        <span>{title}</span>
        {isSorted && (
          <span className="ml-2">
            {direction === 'ascending' ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </span>
        )}
      </div>
    </th>
  );
};

const AccountTable: React.FC<AccountTableProps> = ({ records, onSort, sortConfig, t }) => {
  return (
    <div className="overflow-x-auto">
      <div className="align-middle inline-block min-w-full">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <TableHeader title={t.accountHolder} sortKey="accountHolder" onSort={onSort} sortConfig={sortConfig} />
                <TableHeader title={t.bank} sortKey="bankName" onSort={onSort} sortConfig={sortConfig} />
                <TableHeader title={t.balance} sortKey="balance" onSort={onSort} sortConfig={sortConfig} className="text-right" />
                <TableHeader title={t.lastTransaction} sortKey="lastTransactionDate" onSort={onSort} sortConfig={sortConfig} />
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {records.length > 0 ? (
                records.map((record, index) => (
                  <tr key={record.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{record.accountHolder}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.bankName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right font-mono">{formatCurrency(record.balance, record.currency)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.lastTransactionDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-10 px-6 text-gray-500">
                    {t.noRecordsFound}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountTable;
