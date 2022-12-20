import React from 'react'
import './style.scss'

function FooterComponents() {
  return (
    <footer className='footer'>
      <div className='footer__nav'>
        <ul className='footer__nav__left'>
          <li>
            <a href='#'>About Rog</a>
          </li>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>NewsRoom</a>
          </li>
          <li>
            <a href='#'>Accelbility</a>
          </li>
        </ul>
        <ul className='footer__nav__social'>
          <li>
            <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
          </li>
          <li>
            <a href='#'><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li>
            <a href='#'><i class="fa-brands fa-discord"></i></a>
          </li>
          <li>
            <a href='#'><i class="fa-brands fa-youtube"></i></a>
          </li>
          <li>
            <a href='#'><i class="fa-brands fa-twitch"></i></a>
          </li>
          <li>
            <a href='#'><i class="fa-brands fa-instagram"></i></a>
          </li>
        </ul>
      </div>
      <div className='footer__policy'>
        <a href='#'><i class="fa-solid fa-globe"></i>-Global/English</a>
        <ul>
          <li>
            <a href='#'>TERMS OF USE NOTICE</a>
          </li>
          <li>
            <a href='#'>PRIVACY POLICY</a>
          </li>
          <li>
            <a href='#'>©ASUSTEK COMPUTER INC. ALL RIGHTS RESERVED.</a>
          </li>
          
        </ul>
      </div>
    </footer>
  )
}

export default FooterComponents