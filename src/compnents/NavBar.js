import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const navStyle = {
  display: "flex",
  flexDirection: "row",
  padding: "0.5rem",
  fontFamily: "Libre Baskerville, serif",
  backgroundColor: "grey",
  justifyContent: "center"
}
const headerStyle={
  fontSize: "2rem",
  backgroundColor: "maroon",
  color: "white",
  padding: "0.75rem",
  fontFamily: "Libre Baskerville, serif"
}
export class NavBar extends Component {
  render() {
    return (
      <div>
      <div className='header text-center' style={headerStyle}>
      Nusta News 
      </div>
        <nav style={navStyle}>
    <Link to="/" className='nav-link' style={{color: "white"}}>GENERAL</Link>
    <Link to="/business" className='nav-link' style={{color: "white"}}>BUSINESS</Link>
    {/* <Link to="/environment" className='nav-link' style={{color: "white"}}>ENVIRONMENT</Link> */}
    {/* <Link to="/food" className='nav-link' style={{color: "white"}}>FOOD</Link> */}
    <Link to="/health" className='nav-link' style={{color: "white"}}>HEALTH</Link>
    {/* <Link to="/politics" className='nav-link' style={{color: "white"}}>POLITICS</Link> */}
    <Link to="/science" className='nav-link' style={{color: "white"}}>SCIENCE</Link>
    <Link to="/sports" className='nav-link' style={{color: "white"}}>SPORTS</Link>
    <Link to="/technology" className='nav-link' style={{color: "white"}}>TECHNOLOGY</Link>
    {/* <Link to="/top" className='nav-link' style={{color: "white"}}>TOP</Link> */}
    {/* <Link to="/world" className='nav-link' style={{color: "white"}}>WORLD</Link> */}
</nav>
      </div>
    )
  }
}

export default NavBar;
