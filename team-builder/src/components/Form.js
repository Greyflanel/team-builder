import React, { useState } from 'react';


const Form = props => {
const [newTeamMember, setNewTeamMember] = useState(
    {
        name: "",
        email: "",
        role: ""
      }
);

const onChangeHandler = event => {
setNewTeamMember({ ...newTeamMember, [event.target.name]: event.target.value });
};

const onSubmitHandler = event => {
    event.preventDefault();
    props.addNewMember(newTeamMember);
    setNewTeamMember({
        name: "",
        email: "",
        role: ""
    })
};

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="name"> Name </label>
                <input 
                name="name"
                id="name"
                type="text"
                placeholder="name"
                value={newTeamMember.name}
                onChange={onChangeHandler}
                />
                <label htmlFor="email"> Email </label>
                <input 
                name="email"
                id="email"
                type="email"
                placeholder="email"
                value={newTeamMember.email}
                onChange={onChangeHandler}
                />
                <label htmlFor="role"> Role </label>
                <input 
                name="role"
                id="role"
                type="text"
                placeholder="role"
                value={newTeamMember.role}
                onChange={onChangeHandler}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Form;