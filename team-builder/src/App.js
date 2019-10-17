import React, { useState } from 'react';
import Form from './components/Form.js';
import './App.css';
import data from './data';
import Team from './components/Team';

function App() {
const [teamMembers, setTeamMembers] = useState(data);
console.log(teamMembers);

const addNewMember = member => {
  setTeamMembers([...teamMembers, member])
}

  return (
    <div className="App">
     <Form addNewMember={addNewMember}/>
     <Team teamList={teamMembers} />
    </div>
  );
};

export default App;
