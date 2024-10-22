import React from "react";

const Employees = ({ employees, dispatch }) => {
  const handleDispatch = (emp) => {
    dispatch({ type: "ADD", payload: emp });
    dispatch({ type: "CALCULATE_AVG", payload: emp });
  };

  return (
    <div className='container'>
      <h2>Employees</h2>
      <div className='scrollable-table'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={`emp-${emp.id}`}>
                <td>{emp.first_name}</td>
                <td>{emp.age}</td>
                <td>
                  <button onClick={() => handleDispatch(emp)}>ADD</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
