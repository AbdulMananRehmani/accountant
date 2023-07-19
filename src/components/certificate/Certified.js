import React from 'react'
import  './Certified.css'
import man from '../../assests/man.png'
const Certified = () => {
  return (
    <div className="container text-center">
  <div className="row mb-4">
    <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgba(108, 180, 180, 0.804)" }}>
      <img src={man} alt="" style={{ height: "20rem", marginBottom: "1rem", maxWidth: "100%" }} />
    </div>
    <div className="col-md-6 col-lg-8 d-flex flex-column justify-content-center" style={{ backgroundColor: "rgba(108, 180, 180, 0.804)" }}>
      <h6 className="mb-4">Take the next step with the black & white charted certified accountants</h6>
      <p className="mb-0">Become one of the many sole traders, start-ups, and companies that have chosen to make the Black and White difference by putting themselves and their passion first. Join the rest of our happy clients and take the first step up the stairway to success.</p>
    </div>
  </div>
</div>


  

  )
}

export default Certified
