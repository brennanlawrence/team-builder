import React, { useState } from "react";

export default function Form(props) {

    const [teamMembers, setTeamMembers] = useState([{name: "Kork Largog", email: "korg@kkorg.korg", role: "Developer"}]);
    
    const [teamMember, setTeamMember] = useState({ name: "", email: "", role: "" });

    const newName = event => {
        setTeamMember({...teamMember, name: event.target.value});
    };

    const newEmail = event => {
        setTeamMember({...teamMember, email: event.target.value});
    };

    const newRole = event => {
        setTeamMember({...teamMember, role: event.target.value});
    };

    
    
    const handleSubmit = event => {
        event.preventDefault();
        let newValue = teamMembers.map(x => x);
        newValue.push(teamMember);
        setTeamMembers(newValue);
        console.log(teamMembers);
    }

    

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <h2>New Team Member</h2>
                <label>
                    Name:
                    <input type="text" placeholder="Name" onChange={event => newName(event)}/>
                </label>
                <label>
                    Email:
                    <input type="text" placeholder="Email" onChange={event => newEmail(event)}/>
                </label>
                <label>
                    <select onChange={event => newRole(event)}>
                        <option value=''>Role...</option>
                        <option value="developer">Developer</option>
                        <option value="scrum-master">Scrum Master</option>
                        <option value="product-owner">Product Owner</option>
                    </select>
                </label>
                <button>Submit!</button>
            </form>
            <h3>Team Members:</h3>
            <ul>
            {teamMembers.map(evt =>  
                <li key={teamMembers.indexOf(evt)}>Name: {evt.name} | Email: {evt.email} | Role: {evt.role}</li>
                )}
            </ul>
        </div>
    )
}