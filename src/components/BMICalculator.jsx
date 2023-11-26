import React from "react";

const BMICalculator = () => {
  return (
    <>
      <div>
        <div>
          <h1>BMI Calculator</h1>
        </div>
        <div>
          <input type="number" placeholder="Enter Weight (kg)" />
        </div>
        <div>
          <input type="number" placeholder="Enter Height (m)" />
        </div>
        <div>
          <button type="button">Calculate BMI</button>
        </div>
        <div>
          <h1>Your BMI : </h1>
          <h2>Category : </h2>
        </div>
      </div>
    </>
  );
};

export default BMICalculator;
