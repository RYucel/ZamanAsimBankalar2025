
export type Currency = 'TRY' | 'USD' | 'EUR' | 'GBP';

export interface AccountRecord {
  id: string;
  bankName: string;
  accountHolder: string;
  balance: number;
  currency: Currency;
  lastTransactionDate: string;
}

export type SortKey = keyof AccountRecord;

export interface SortConfig {
  key: SortKey;
  direction: 'ascending' | 'descending';
}
