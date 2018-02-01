import React from 'react'

// Images
import uPortLogo from '../../../img/uport-logo.svg'

const LoginButton = ({ onLoginUserClick }) => {
  return(
    <li className="pure-menu-item">
      <a href="#" className="pure-menu-link" onClick={(event) => onLoginUserClick(event)}><img className="uport-logo" src={uPortLogo} alt="UPort Logo" width="50" height="50" />Login with UPort</a>
    </li>
  )
}

export default LoginButton
