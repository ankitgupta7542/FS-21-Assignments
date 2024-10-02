import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto"; // To auto-register chart.js components

function App() {
  // Financial data and state management
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(10);

  // Formulas for calculating monthly payment and interest
  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment = (
    (loanAmount * interestPerMonth * Math.pow(1 + interestPerMonth, totalLoanMonths)) /
    (Math.pow(1 + interestPerMonth, totalLoanMonths) - 1)
  ).toFixed(2);

  const totalInterestGenerated = (
    monthlyPayment * totalLoanMonths - loanAmount
  ).toFixed(2);

  // Data for the pie chart
  const data = {
    labels: ["Loan Amount", "Total Interest"],
    datasets: [
      {
        data: [loanAmount, totalInterestGenerated],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bank Dashboard</h1>
      <div style={{ marginBottom: "30px" }}>
        <h2>Financial Data</h2>

        {/* Input for Loan Amount */}
        <div>
          <label>Loan Amount: </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
        </div>

        {/* Input for Interest Rate */}
        <div>
          <label>Interest Rate (%): </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>

        {/* Input for Loan Term */}
        <div>
          <label>Loan Term (Years): </label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <p>Monthly Payment: ${monthlyPayment}</p>
          <p>Total Interest: ${totalInterestGenerated}</p>
        </div>
      </div>

      {/* Pie Chart to display Loan Amount and Interest */}
      <div style={{ width: "400px", margin: "auto" }}>
        <h2>Loan vs Interest</h2>
        <Pie data={data} />
      </div>
    </div>
  );
}

export default App;
