'use client';

import React from 'react';
import { Bill } from '../types';
import { enLabels, formatCurrency } from '../lib/i18n';

interface PrintableBillProps {
  bill: Bill;
}

const PrintableBill: React.FC<PrintableBillProps> = ({ bill }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print:hidden">
      <button
        onClick={handlePrint}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 transition-colors"
      >
        {enLabels.printBill}
      </button>

      {/* Hidden content for printing */}
      <div className="hidden print:block fixed top-0 left-0 w-full h-full bg-white p-4 print:shadow-none print:rounded-none">
        <div className="print-container max-w-4xl mx-auto">
          <div className="text-center mb-8 border-b-2 pb-4">
            <h1 className="text-3xl font-bold">RASHAN GROCERY STORE</h1>
            <p className="text-lg mt-2">Quality Groceries Delivered Fresh</p>
            <p className="mt-4">Date: {new Date().toLocaleDateString()} | Time: {new Date().toLocaleTimeString()}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">BILL DETAILS</h2>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">{enLabels.product}</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">{enLabels.quantity}</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">{enLabels.price}</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">{enLabels.subtotal}</th>
                </tr>
              </thead>
              <tbody>
                {bill.items.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.quantity}</td>
                    <td className="border border-gray-300 px-4 py-2 text-right">{formatCurrency(item.price)}</td>
                    <td className="border border-gray-300 px-4 py-2 text-right">{formatCurrency(item.price * item.quantity)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t-2 pt-4">
            <div className="flex justify-end">
              <div className="w-64">
                <div className="flex justify-between py-2">
                  <span className="font-medium">{enLabels.total}:</span>
                  <span className="font-bold text-lg">{formatCurrency(bill.total)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t text-center text-sm text-gray-600">
            <p>Thank you for shopping with Rashan Grocery Store!</p>
            <p className="mt-2">For inquiries: contact@rashangrocery.com | +92-xxx-xxxxxxx</p>
            <p className="mt-4">This is a computer-generated receipt. Please retain it for your records.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintableBill;