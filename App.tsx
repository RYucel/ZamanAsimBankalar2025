import React, { useState, useMemo } from 'react';
import { allRecords } from './data/records';
import { AccountRecord, SortConfig, SortKey } from './types';
import AccountTable from './components/AccountTable';
import { SearchIcon } from './components/icons';
import { useLocalization } from './context/LocalizationContext';
import LanguageSwitcher from './components/LanguageSwitcher';

const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const App: React.FC = () => {
  const { t } = useLocalization();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'accountHolder', direction: 'ascending' });

  const filteredAndSortedRecords = useMemo(() => {
    let records: AccountRecord[] = [...allRecords];

    if (searchTerm) {
      const normalizedSearchTerm = normalizeText(searchTerm);
      records = records.filter(record =>
        normalizeText(record.accountHolder).includes(normalizedSearchTerm)
      );
    }

    if (sortConfig.key) {
      records.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return aValue.localeCompare(bValue, t.locale) * (sortConfig.direction === 'ascending' ? 1 : -1);
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return records;
  }, [searchTerm, sortConfig, t.locale]);

  const handleSort = (key: SortKey) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      <LanguageSwitcher />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-10 pt-8 md:pt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            {t.title}
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <label htmlFor="search" className="sr-only">{t.searchPlaceholder}</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm transition duration-150 ease-in-out"
              />
            </div>
          </div>
          
          <AccountTable 
            records={filteredAndSortedRecords}
            onSort={handleSort}
            sortConfig={sortConfig}
            t={t}
          />
        </div>

        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>{t.footerInfo}</p>
          <p>&copy; {new Date().getFullYear()} {t.footerCopyright}</p>
        </footer>
      </main>
    </div>
  );
};

export default App;