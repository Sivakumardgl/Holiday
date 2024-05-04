import React,{useContext,useState} from 'react'
const Autthcontext=React.createContext()

export default function Authprovider(props) {
    const[user,setuser]=useState(null)
    const login=(xpara)=>{
        setuser(xpara)
    }
    const logout=()=>{
        setuser(null)
    }
  return (
    <div>
        <Autthcontext.Provider value={{user,login,logout}}> 
        {props.children}
        </Autthcontext.Provider>


    </div>
  )
}
export const useAuth=()=>{
    return useContext(Autthcontext)
}