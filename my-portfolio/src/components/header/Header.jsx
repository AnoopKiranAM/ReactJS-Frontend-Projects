import React from 'react'
import "./Header.css"
// import CTA from './CTA'
// import ME from '../../assets/me.png';

function Header () {
  return (
    <Header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Anoop Kiran A M</h1>
        <h5 className="text-light">FullStack Developer</h5>
        {/* <CTA></CTA> */}


        <div className="me">
          {/* <img src= {ME} alt="me" /> */}
        </div>
      </div>

    </Header>
  )
}

export default Header 