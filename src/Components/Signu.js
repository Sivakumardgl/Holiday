import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (name && email && password) {
      const userData = { name, email, password };
      axios.post("http://localhost:3001/students", userData)
        .then((res) => {
          console.log(res.data);
          alert("Form submitted successfully");
          setUsers([...users, userData]);
          setName("");
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          console.error("Error:", err);
          alert("There was an error submitting the form");
        });
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(users[index].name);
    setEditEmail(users[index].email);
    setEditPassword(users[index].password);
  };

  const handleUpdate = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = { name: editName, email: editEmail, password: editPassword };
    setUsers(updatedUsers);
    setEditIndex(null);
    setEditName("");
    setEditEmail("");
    setEditPassword("");
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignup}>
        <h1>Enter your Details</h1>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>E-mail:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Signup</button>
      </form>
      <br />
      <h2>User List:</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{editIndex === index ? <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} /> : user.name}</td>
              <td>{editIndex === index ? <input type="text" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} /> : user.email}</td>
              <td>{editIndex === index ? <input type="text" value={editPassword} onChange={(e) => setEditPassword(e.target.value)} /> : user.password}</td>
              <td>
                {editIndex === index ? (
                  <button onClick={handleUpdate}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Update</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
