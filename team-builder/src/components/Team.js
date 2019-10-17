import React from "react";

const Team = props => {
  console.log(props);

  return (
    <div>
      Team
      {props.teamList.map((member, index) => (
        <div key={index}>
          <h1>{member.name}</h1>
          <h4>{member.role}</h4>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
