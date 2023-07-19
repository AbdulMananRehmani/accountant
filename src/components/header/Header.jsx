import React from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button';
import Cards from '../cardsection/Cards';

const Header = () => {
  return (
    <>
 
 <div className='container-fluid header' style={{ backgroundImage: "url(https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=600)", backgroundSize: "cover", backgroundPosition: "center", height: "33rem", position: "relative" }}>
  <div className="row imgdiv" style={{ position: "absolute", top: "27%", left: "13%", zIndex: 2, color: "white" }}>
    <div className="col">
      <h2 style={{ fontWeight: 600 }}> Accountancy ,</h2>
      <h1 style={{ fontWeight: "bold" }}>Bookkeeping & Tax</h1>
      <h1 style={{ fontWeight: "bold" }}>Solution.</h1>
      <p style={{ width: "100%", maxWidth: "500px", fontSize: "18px", fontFamily: "sans-serif" }}>Accounting is the backbone of financial decision-making and equips you with the essential knowledge and skills to navigate today's dynamic business landscape.</p>
      <button className='me-3 button'>Primary</button>
      <button className='button'>Secondary</button>
    </div>
  </div>
</div>

    </>
  )
}

export default Header
