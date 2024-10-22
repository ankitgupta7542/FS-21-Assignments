import { useReducer } from "react";
import Employees from "./components/Employees";
import Team from "./components/Team";
import { employees } from "./data/employees";

function App() {
  const initialData = {
    employeesList: employees,
    teamList: [],
    averageAge: 0,
  };

  // Descriptive name for the reducer function
  const [state, dispatch] = useReducer(teamReducer, initialData);

  // Reducer function to handle different actions
  function teamReducer(state, action) {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          employeesList: state.employeesList.filter(
            (item) => item.id !== action.payload.id
          ),
          teamList: [...state.teamList, action.payload],
        };

      case "REMOVE":
        return {
          ...state,
          employeesList: [action.payload, ...state.employeesList],
          teamList: state.teamList.filter(
            (item) => item.id !== action.payload.id
          ),
        };

      case "CALCULATE_AVG":
        const totalAge = state.teamList.reduce(
          (acc, item) => acc + item.age,
          0
        );
        const avgAge =
          state.teamList.length > 0
            ? (totalAge / state.teamList.length).toFixed(2)
            : 0;
        return {
          ...state,
          averageAge: avgAge,
        };

      case "SORT":
        return {
          ...state,
          teamList: [...state.teamList].sort((a, b) => a.age - b.age),
        };

      default:
        return state;
    }
  }

  return (
    // <div className="app-container">
    //   <h1>Team Manager</h1>
    //   <div className="content">
    //     <Employees employees={state.employeesList} dispatch={dispatch} />
    //     <Team
    //       team={state.teamList}
    //       averageAge={state.averageAge}
    //       dispatch={dispatch}
    //     />
    //   </div>
    // </div>
    <div className="app-container">
      <Employees employees={state.employeesList} dispatch={dispatch} />
      <Team
        team={state.teamList}
        averageAge={state.averageAge}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
