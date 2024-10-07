import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
        <div style={{ height: "40px", backgroundColor: "darkyellow", justifyContent: "center", padding: "10px", display:"flex", alignItems:"center" }}>
        <h2 style={{color:"whitesmoke"}}>Directory App</h2>
        </div>
        <div style={{ height: "40px", backgroundColor: "lightyellow", padding: "10px", display:"flex", alignItems:"center", justifyContent: "Space-around", color:"white" }}>
            <button><Link to="/">Add new Person </Link></button>
            <button><Link to="/retrieve">Retrieve Information </Link></button>
        </div>
    </>
  )
}
