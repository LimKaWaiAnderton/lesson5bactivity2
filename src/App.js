import './App.css';
import { useState } from 'react'

function Input() {
  const [userName, setUserName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [userAge, setUserAge] = useState("");
  const [lunchOption, setLunchOption] = useState("");


  const handleNameInput = (e) => {
    setUserName(e.target.value);
  };

  const hanldStudentIDInput = (e) => {
    setStudentID(e.target.value);
  }

  const handleAgeInput = (e) => {
    setUserAge(e.target.value);
  }

  return (
    <>
      <div>
        <form>
          <label for="name">Name: </label>
          <input value={userName} id="name" type='text' onChange={handleNameInput} />
          <br />
          <label for="studentID">Student ID: </label>
          <input value={studentID} id="studentid" type='text' onChange={hanldStudentIDInput} />
          <br />
          <label for="age">Age: </label>
          <input value={userAge} id="age" type='number' onChange={handleAgeInput} />
        </form>
        <br/>
        <div>
          <label>Lunch Option:</label>
          <br />
          <input
            type="radio"
            id="vegetarian"
            name="lunch"
            value="Vegetarian"
            onChange={(e) => setLunchOption(e.target.value)}
          />
          <label htmlFor="vegetarian">Vegetarian</label>
          <br />
          <input
            type="radio"
            id="nonVegetarian"
            name="lunch"
            value="Non-Vegetarian"
            onChange={(e) => setLunchOption(e.target.value)}
          />
          <label htmlFor="nonVegetarian">Non-Vegetarian</label>
          <br />
          <input
            type="radio"
            id="vegan"
            name="lunch"
            value="Vegan"
            onChange={(e) => setLunchOption(e.target.value)}
          />
          <label htmlFor="vegan">Vegan</label>
        </div>

        <p>Name: {userName} <br/>
        StudentID: {studentID} <br/>
        Age: {userAge} <br/>
        Lunch Option: {lunchOption}</p>
      </div>
    </>
  )
}

function App() {
  return (
    <Input />
  );
}

export default App;
