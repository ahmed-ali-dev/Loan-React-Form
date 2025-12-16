import React from "react";
import Model from "./Model";
import { useState } from "react";

function Form() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phone: "",
    age: "",
    employee: true,
    salary: "",
  });

  const [showModel, setShowModel] = useState(false);

  const btnIsDisabled =
    loanInputs.name === "" || loanInputs.phone === "" || loanInputs.age === "";

  function checkName(event) {
    event.preventDefault();
    setShowModel(true);
    console.log(isNaN(loanInputs.age));
    if (isNaN(loanInputs.phone) || loanInputs.phone.length !== 11) {
      setErrorMessage("The Phone number is Wrong.");
    } else if (
      isNaN(loanInputs.age) ||
      loanInputs.age < 20 ||
      loanInputs.age > 100
    ) {
      setErrorMessage("The age is not allowed.");
    } else {
      setErrorMessage(null);
    }
  }
  return (
    <div
      onClick={() => {
        if (showModel) {
          setShowModel(false);
        }
      }}
      className=" w-full h-screen flex items-center justify-center"
    >
      <form
        action=""
        className="w-1/2 p-5 rounded-2xl bg-indigo-900 f-w text-white mx-auto flex flex-col justify-center items-center shadow-lg"
      >
        <h1 className=" p-5 font-bold text-2xl">Requesting a Loan</h1>
        <hr className="mx-3 w-full" />
        <label htmlFor="name" className="mt-2 ">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={loanInputs.name}
          id=""
          className="p-2 rounded-md text-black w-full h-7 border-none cursor-pointer"
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
        />
        <label htmlFor="phone" className="mt-2">
          Phone Number:
        </label>
        <input
          type="text"
          name="phone"
          value={loanInputs.phone}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phone: event.target.value });
          }}
          id=""
          className="p-2 rounded-md text-black w-full h-7 border-none cursor-pointer"
        />
        <label htmlFor="age" className="mt-2">
          Age:
        </label>
        <input
          type="text"
          name="age"
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
          id=""
          className="p-2 rounded-md text-black w-full h-7 border-none cursor-pointer"
        />
        <label htmlFor="bool" className="mt-3">
          Are you an employee?
        </label>
        <input
          type="checkbox"
          name="bool"
          checked={loanInputs.employee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, employee: event.target.checked });
          }}
          id=""
          className="p-2 rounded-md text-black w-full border-none  h-7 cursor-pointer"
        />
        <label htmlFor="salary" className="mt-2">
          Salary:
        </label>
        <select
          name="salary"
          id=""
          value={loanInputs.salary}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salary: event.target.value });
          }}
          className="rounded-md bg-white text-black w-full h-7 border-none cursor-pointer"
        >
          <option>Less than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above than 2000$</option>
        </select>
        <input
          type="submit"
          disabled={btnIsDisabled}
          onClick={checkName}
          value="Submit"
          className="p-2 rounded-md mx-2 my-5 w-32 bg-red-900 h-12 border-none cursor-pointer"
        />
      </form>
      <Model error={errorMessage} isVisible={showModel} />
    </div>
  );
}

export default Form;
