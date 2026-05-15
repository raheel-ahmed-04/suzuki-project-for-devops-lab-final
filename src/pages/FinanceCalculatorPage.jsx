import React from 'react';
import FinanceCalculator from '../components/FinanceCalculator';

const FinanceCalculatorPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Finance Calculator
      </h1>
      <FinanceCalculator />
    </div>
  );
};

export default FinanceCalculatorPage;
