import React, { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="App">
      <h1>React and CSS Form with Validation</h1>
      <FormContainer title="Registration Form">
        <Input
          type="text"
          placeholder="Enter Fullname"
          value={name}
          setValue={setName}
          label="Fullname"
        />
        <Input
          type="email"
          placeholder="Enter Email"
          value={email}
          setValue={setEmail}
          label="Email"
        />
        <Input
          type="password"
          placeholder="Enter Password"
          value={password}
          setValue={setPassword}
          label="Password"
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          label="Confirm Password"
        />
        <div className="form-group">
          <button type="Submit" className="btn">
            Submit
          </button>
        </div>
      </FormContainer>
    </div>
  );
}
export default App;
const Input = ({ placeholder, type, setValue, value, label }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
    validateError(e.target.value);
  };
  const validateError = (text) => {
    if (text.trim() === "") {
      setError(true);
      setErrorMessage(`${label} required`);
      return false;
    } else {
      setError(false);
    }
  };
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error ? <small className="error">{errorMessage}</small> : null}
    </div>
  );
};
const FormContainer = (props) => (
  <div className="form-container">
    <h1 className="form-title">{props.title}</h1>
    {props.children}
  </div>
);
