import React, { useState, useEffect, useCallback } from 'react';

const FinanceCalculator = () => {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(30); // Default 30%
  const [markupRate, setMarkupRate] = useState(15.33); // Default Variable Markup
  const [markupType, setMarkupType] = useState('variable'); // Default to variable
  const [isFiler, setIsFiler] = useState(true); // Default filer
  const [tenure, setTenure] = useState(12); // Default 12 months
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalFinancedAmount, setTotalFinancedAmount] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0); // Tax amount (Filer/Non-Filer)
  const [insuranceAmount, setInsuranceAmount] = useState(0); // Insurance amount

  // Fetch the data from the public folder
  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        setVehiclesData(data.vehiclesData);
        if (data.vehiclesData.length > 0) {
          setSelectedVehicle(data.vehiclesData[0]);
          setSelectedVariant(data.vehiclesData[0].variants[0]); // Set default variant for the first vehicle
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleVehicleChange = (e) => {
    const vehicle = vehiclesData.find((v) => v.model === e.target.value);
    setSelectedVehicle(vehicle);
    setSelectedVariant(vehicle.variants[0]); // Reset to first variant
  };

  const handleVariantChange = (e) => {
    const variant = selectedVehicle.variants.find((v) => v.name === e.target.value);
    setSelectedVariant(variant);
  };

  const handleMarkupTypeChange = (e) => {
    setMarkupType(e.target.value);
    setMarkupRate(e.target.value === 'variable' ? 15.33 : 13); // Change markup rate based on selection
  };

  const handleFilerChange = (isFilerSelected) => {
    setIsFiler(isFilerSelected);
  };

  // Calculate the total price and monthly payment using useCallback to prevent unnecessary re-renders
  const calculateFinance = useCallback(() => {
    if (!selectedVariant) return;

    const vehiclePrice = parseFloat(selectedVariant.price.replace(/[^0-9.-]+/g, ''));

    // Update total price
    setTotalPrice(vehiclePrice);

    // Down Payment Calculation
    const downPaymentAmount = vehiclePrice * (downPaymentPercentage / 100);
    setDownPayment(downPaymentAmount);

    // Markup Calculation
    const markupAmount = vehiclePrice * (markupRate / 100);

    // Insurance Calculation (Fixed 1.99%)
    const insuranceAmountCalculated = vehiclePrice * 0.0199;
    setInsuranceAmount(insuranceAmountCalculated);

    // Tax Calculation based on Filer/Non-Filer
    const taxAmountForVariant = isFiler
      ? parseFloat(selectedVariant.whtFiler.replace(/[^0-9.-]+/g, ''))
      : parseFloat(selectedVariant.whtNonFiler.replace(/[^0-9.-]+/g, ''));
    
    setTaxAmount(taxAmountForVariant);

    // Total Financed Amount Calculation
    // Include down payment in the total finance amount
    const totalAmount = vehiclePrice + markupAmount + insuranceAmountCalculated + taxAmountForVariant;

    // Monthly Payment Calculation (Exclude downpayment from the monthly installment)
    const totalAmountMinusDownPayment = totalAmount - downPaymentAmount;
    const monthlyInstallment = totalAmountMinusDownPayment / tenure;

    // Update State
    setTotalFinancedAmount(totalAmount);
    setMonthlyPayment(monthlyInstallment);
  }, [selectedVariant, downPaymentPercentage, markupRate, isFiler, tenure]);

  useEffect(() => {
    calculateFinance();
  }, [calculateFinance]); // Include calculateFinance as a dependency

  // Number formatting function
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  if (!vehiclesData.length) {
    return <div>Loading...</div>; // Simple loading state
  }

  return (
    <div className="w-full mx-auto px-5 py-10 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 rounded-md shadow-lg">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Suzuki Finance Calculator</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Calculate your monthly payments easily!</p>
      </div>

      <div className="max-w-4xl mx-auto md:flex md:space-x-6">
        {/* Form Block */}
        <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-lg px-8 py-8 space-y-6 shadow-md">
          <div className="space-y-4">
            {/* Vehicle Selection */}
            <div>
              <label htmlFor="vehicle" className="block font-medium text-gray-700 dark:text-gray-300">
                Select Vehicle
              </label>
              <select
                id="vehicle"
                value={selectedVehicle?.model || ''}
                onChange={handleVehicleChange}
                className="w-full px-4 py-3 mt-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
              >
                {vehiclesData.map((vehicle) => (
                  <option key={vehicle.model} value={vehicle.model}>
                    {vehicle.model}
                  </option>
                ))}
              </select>
            </div>

            {/* Variant Selection */}
            <div>
              <label htmlFor="variant" className="block font-medium text-gray-700 dark:text-gray-300">
                Select Variant
              </label>
              <select
                id="variant"
                value={selectedVariant?.name || ''}
                onChange={handleVariantChange}
                className="w-full px-4 py-3 mt-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
              >
                {selectedVehicle?.variants.map((variant) => (
                  <option key={variant.name} value={variant.name}>
                    {variant.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Total Price of Vehicle */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">Total Price of Vehicle</label>
              <div className="p-4 mt-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded-md">
                {formatCurrency(totalPrice)}
              </div>
            </div>

            {/* Down Payment Percentage */}
            <div>
              <label htmlFor="downPayment" className="block font-medium text-gray-700 dark:text-gray-300">
                Down Payment Percentage
              </label>
              <input
                type="range"
                id="downPayment"
                min="30"
                max="70"
                step="1"
                value={downPaymentPercentage}
                onChange={(e) => setDownPaymentPercentage(Number(e.target.value))}
                className="w-full mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span>30%</span>
                <span>{downPaymentPercentage}%</span>
                <span>70%</span>
              </div>
            </div>

            {/* Down Payment Amount */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">Down Payment (PKR)</label>
              <div className="p-4 mt-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded-md">
                {formatCurrency(downPayment)}
              </div>
            </div>

            {/* Markup Rate */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">Markup Rate</label>
              <div className="mt-2 flex space-x-6 items-center">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="variable"
                    name="markup"
                    value="variable"
                    checked={markupType === 'variable'}
                    onChange={handleMarkupTypeChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600"
                  />
                  <label htmlFor="variable" className="font-medium text-gray-700 dark:text-gray-300">Variable </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="fixed"
                    name="markup"
                    value="fixed"
                    checked={markupType === 'fixed'}
                    onChange={handleMarkupTypeChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600"
                  />
                  <label htmlFor="fixed" className="font-medium text-gray-700 dark:text-gray-300">Fixed</label>
                </div>
              </div>
            </div>

            {/* Tax (Filer / Non-Filer) */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">Tax (WHT)</label>
              <div className="flex space-x-4 items-center">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={isFiler}
                    onChange={() => handleFilerChange(true)}
                    className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600"
                  />
                  <label className="font-medium text-gray-700 dark:text-gray-300">Filer</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={!isFiler}
                    onChange={() => handleFilerChange(false)}
                    className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600"
                  />
                  <label className="font-medium text-gray-700 dark:text-gray-300">Non-Filer</label>
                </div>
              </div>
            </div>

            

           

            
          </div>
        </div>

        {/* Results Block */}
        
        <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-lg px-8 py-8 space-y-6 shadow-md mt-6 md:mt-0">
          {/* Loan Tenure */}
          <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">Loan Tenure (Months)</label>
              <select
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full px-4 py-3 mt-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
              >
                <option value={12}>12 months</option>
                <option value={24}>24 months</option>
                <option value={36}>36 months</option>
                <option value={48}>48 months</option>
                <option value={60}>60 months</option>
              </select>
            </div>
             {/* Insurance Amount */}
             <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">Insurance (1.99%)</label>
              <div className="p-4 mt-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded-md">
                {formatCurrency(insuranceAmount)}
              </div>
            </div>
          <div className="space-y-4">
            {/* Tax (WHT) */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Tax (WHT)</h2>
              <div className="p-4 mt-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded-md">
                {formatCurrency(taxAmount)}
              </div>
            </div>

            {/* Total Financed Amount */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Total Financed Amount</h2>
              <div className="p-4 mt-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded-md">
                {formatCurrency(totalFinancedAmount)}
              </div>
            </div>

            {/* Monthly Payment */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Estimated Monthly Payment</h2>
              <div className="p-4 mt-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded-md">
                {formatCurrency(monthlyPayment)}
              </div>
            </div>
            {/* Calculate Button */}
            <button
              onClick={calculateFinance}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md mt-6 transition-colors"
            >
              Calculate Payments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCalculator;
