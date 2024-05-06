import React, { useEffect, useState } from 'react'
import axios from'axios' 


export default function Signup() {
  const[list,setList]=useState([])
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[location,setLocation]=useState('')
  const[members,setMembers]=useState()
  const[price,setPrice]=useState(0)
  //update work
  const[popup,setPopup]=useState(false)
  const[name1,setName1]=useState('')
  const[id1,setId1]=useState()
  const[email1,setEmail1]=useState('')
  const[password1,setPassword1]=useState('')
  const[location1,setLocation1]=useState('')
  const[price1,setPrice1]=useState()
  const[members1,setMembers1]=useState()
  const openPopup=(data)=>{
    setPopup(true)
    setId1(data.id)
    setName1(data.name)
    setEmail1(data.email)
    setPassword1(data.password)
    setLocation1(data.location)
    setPrice1(data.price)
    setMembers1(data.members)
  }
  const updateData=()=>{
    axios.put(`http://localhost:4001/students/${id1}`,{name:name1,email:email1,password:password1,price:price1,location:location1,members:members1})
    .then(x=>{alert("Updated");console.log(x)})
    .catch(y=>alert('not updated'))
  }


  useEffect(()=>{
    axios.get('http://localhost:4001/students')
    .then(res=>{setList(res.data)})
    .catch(err=>{console.log(err)})
  },[])
  const addData=()=>{
    axios.post('http://localhost:4001/students',{name,email,location,members,password,price})
  .then(res=>{console.log(res)})
  .catch(err=>{console.log(err)})
  }

  const handleDelete=(x)=>{
    axios.delete(`http://localhost:4001/students/${x}`)
    .then(res=>{console.log(res)
      alert('delete sucessfully')})
      .catch(err=>{console.log(err)})

  }
  return (
    <div className='form1'>
      {popup&&
          <form onSubmit={updateData}>
            <h1 id='update'>UPDATE PAGE</h1>
            <button onClick={()=>setPopup(false)}>X</button>
          <label>Name</label>
          <input type='text' value={name1} onChange={(e)=>{setName1(e.target.value)}}/>
          <label>Email</label>
          <input type='email' value={email1} onChange={(e)=>{setEmail1(e.target.value)}}/>
          <label>password</label>
          <input type='password' value={password1} onChange={(e)=>{setPassword1(e.target.value)}}></input>
          <label>Location</label>
          <input type='text' value={location1} onChange={(e)=>{setLocation1(e.target.value)}}></input>
          <label>members</label>
          <input type='number' value={members1} onChange={(e)=>{setMembers1(e.target.value)}}></input>
          <label>price</label>
          <input type='number' value={price1} onChange={(e)=>{setPrice1(e.target.value)}}></input>
          <button type='submit'>Update</button>
  
        </form>
        }
      <form onSubmit={addData}>
      <h1 id='register'>REGISTER PAGE</h1>
        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <label>Email</label>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <label>password</label>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        <label>Location</label>
        <input type='text' value={location} onChange={(e)=>{setLocation(e.target.value)}}></input>
        <label>members</label>
        <input type='number' value={members} onChange={(e)=>{setMembers(e.target.value)}}></input>
        <label>price</label>
        <input type='number' value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>
        <button type='submit'>Signup</button>

      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Location</th>
            <th>members</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
      <tbody>
      {list.map (x=>(
           <tr key={x.name}>
            <td>{x.name}</td>
            <td>{x.email}</td>
            <td>{x.password}</td>
            <td>{x.location}</td>
            <td>{x.members}</td>
            <td>{x.price}</td>
            <td><button onClick={()=>openPopup(x)}>Edit</button><button onClick={()=>handleDelete(x.id)}>delete</button></td>
         </tr>))} 
         </tbody>
         </table>

        

    </div>
  )

}





