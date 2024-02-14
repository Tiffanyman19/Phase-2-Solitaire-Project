import React from "react";

function NewUserForm({user, setUser, newUser, setNewUser}) {
    
    function handleChange(e) {
     const {name, value} = e.target;
     setNewUser((prevUser) => ({
        ...prevUser,
        [name]: value,
    }));
    console.log(newUser)
    }
    function handleSubmit(e) {
        e.preventDefault()
    
        //Add a fetch request method: POST
        fetch("http://localhost:6001/players", {
          method: "POST",
          headers: {
            "Content-Type": "Application/JSON"
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(userData => setUser(()=> {
            return [...user, userData]
          }))
    
    
      }
    
    return (
        <div className="new-user-form">
          <h2>New user</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={newUser.name} 
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="game" 
              placeholder="Game Type" 
              value={newUser.game}
              onChange={handleChange} 
            />
            <input 
              type="number" 
              name="date"  
              placeholder="Date Played" 
              value={newUser.date}
              onChange={handleChange}
            />
            <button type="submit">Add user</button>
          </form>
        </div>


    );

}

export default NewUserForm;
