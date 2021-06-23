import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header style={headStyle}>
            <h1>WELCOME!</h1>
            <Link style= {textStyle} to='/'>Home</Link> | <Link style= {textStyle} to='/about'>About</Link>
        </header>
    )
}

const headStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px", 
}

const textStyle = {
    color: "white",
}

export default Header
