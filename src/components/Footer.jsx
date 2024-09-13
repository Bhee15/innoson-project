import React from 'react'
import "../styles/Footer.css"
import footerImg from "../assets/footer.png"
import copyRight from "../assets/copright.png"

const Footer = () => {
  return (
    <>
    <section className='sec-5 flex-wrap d-sm-flex'>
        <h3 className='footer-text container'>
            Elevate Africa through Excellece in Manufacturing.
        </h3>
    </section>
    <div>
    <img src={copyRight} alt="footer-img" className='img-fluid'/>
    </div>
    </>
  )
}

export default Footer