import React, { useState } from 'react';
import Form from './components/Form.js';
import './App.css';
import data from './data';

function App() {
const [teamMembers, setTeamMembers] = useState(data);
console.log(teamMembers);

const addNewMember = member => {
  setTeamMembers([...teamMembers, member])
}

  return (
    <div className="App">
     <Form addNewMember={addNewMember}/>
    </div>
  );
};

export default App;
