import React,{useState}  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  
  return (
    <div className='navbar'>
      <div className={`container ${props.nav}_theme` }  >
        <li >
          <ul><Link to='/'>{props.title}</Link></ul>
          <ul><Link to='/about'>{props.aboutText}</Link></ul>
          <ul><Link to='/contact'>{props.contactText}</Link></ul>
        </li>
      </div>
     </div>
  )
}

Navbar.propTypes={
  title:PropTypes.string,
  aboutText:PropTypes.string,
  contactText:PropTypes.string

}
Navbar.defaultProps={
  title:"Home",
  aboutText:"About",
  contacttext:"Contact"

}
