import React from "react";

const Team = ({ team, averageAge, dispatch }) => {
  // Optimized function to handle removal and calculating average age in one go
  const handleRemove = (emp) => {
    dispatch({ type: "REMOVE", payload: emp });
    dispatch({ type: "CALCULATE_AVG" }); // No need to pass payload
  };

  return (
    <div className='team-container'>
      <h2>Team</h2>
      
      {/* Sort Button */}
      <div className='sort-container'>
        <button onClick={() => dispatch({ type: "SORT" })}>
          SORT BY AGE
        </button>
      </div>
      
      {/* Team List */}
      {team.map((emp) => (
        <div className='item' key={`team-${emp.id}`}>
          <p>{emp.first_name}</p>
          <p>{emp.age}</p>
          <button onClick={() => handleRemove(emp)}>REMOVE</button>
        </div>
      ))}
      
      {/* Display Average Age */}
      <div className='item avg-item'>
        <p>Average Age</p>
        <p>{averageAge}</p>
      </div>
    </div>
  );
};

export default Team;
