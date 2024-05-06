import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Admin() {
    const[list,setList]=useState([])
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
   
    useEffect(()=>{
        axios.get('http://localhost:4001/students')
        .then(res=>{setList(res.data)})
        .catch(err=>{console.log(err) })
    },[])

    const addata=()=>{
        axios.post('http://localhost:4001/students', {name:name,email:email,password:password})
        .then(res=>{alert('success')})
        .catch(err=>{console.log(err) })
    }

  return (
    <div className='admin'>
        <h1>ADMIN PAGE</h1>
        <form onSubmit={addata}>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}placeholder='Enter name '/>
        <label>E-mail</label>
        <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter mail'/>
        <label>Password</label>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password'/> 
        <button type='submit'>Login</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>password</th>
                </tr>
            </thead>
            {list.map (x=>(
           <tr key={x.name}>
            <td>{x.name}</td>
            <td>{x.email}</td>
            <td>{x.password}</td>
         </tr>))} 
    
        </table>
    </div>
  )
}
