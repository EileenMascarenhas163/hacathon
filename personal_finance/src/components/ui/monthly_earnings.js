import React, { useState } from 'react';

const EarningsChart = () => {
    // Example data for each time period
    const data = {
        monthly: [75, 50, 66, 33, 90, 66, 50],
        daily: [20, 40, 60, 80, 100, 120, 140],
        yearly: [500, 600, 700, 800, 900, 1000, 1100]
    };

    const labels = {
        monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        daily: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        yearly: ['2018', '2019', '2020', '2021', '2022', '2023', '2024']
    };

    // State to manage the selected time period
    const [selectedPeriod, setSelectedPeriod] = useState('monthly');

    // Function to update the chart based on the selected period
    const updateChart = (event) => {
        setSelectedPeriod(event.target.value);
    };

    // Get the data and labels for the current selected period
    const periodData = data[selectedPeriod];
    const periodLabels = labels[selectedPeriod];
    const maxDataValue = Math.max(...periodData);

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Earnings</h2>
            
            {/* Dropdown for selecting daily, monthly, or yearly */}
            <select
                value={selectedPeriod}
                onChange={updateChart}
                className="mb-4"
            >
                <option value="monthly">Monthly</option>
                <option value="daily">Daily</option>
                <option value="yearly">Yearly</option>
            </select>

            {/* Container for the bar chart */}
            <div className="h-48 flex items-end">
                {periodData.map((value, index) => (
                    <div
                        key={index}
                        className="flex-1 bg-blue-500 rounded-t-lg mx-1"
                        style={{ height: `${(value / maxDataValue) * 100}%` }}
                    ></div>
                ))}
            </div>

            {/* X-axis labels */}
            <div className="mt-2">
                {periodLabels.map((label, index) => (
                    <span key={index} className="mx-1">{label}</span>
                ))}
            </div>
        </div>
    );
};

export default EarningsChart;
