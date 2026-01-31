import React from 'react';
import { Bill } from '../types';
import { enLabels, formatCurrency } from '../lib/i18n';
import Link from 'next/link';
import PrintButton from './PrintButton';

interface BillSummaryProps {
  bill: Bill;
}

const BillSummary: React.FC<BillSummaryProps> = ({ bill }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold">
          {enLabels.total}: <span className="text-green-600 text-2xl">{formatCurrency(bill.total)}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors text-center"
          >
            {enLabels.backToShop}
          </Link>

          <Link
            href="/checkout"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            {enLabels.checkout}
          </Link>

          <PrintButton onClick={() => window.print()} />
        </div>
      </div>
    </div>
  );
};

export default BillSummary;