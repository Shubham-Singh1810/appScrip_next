import React from 'react'

function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.pinimg.com/originals/20/e2/d3/20e2d3e994192791aa30b506aa36eb41.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://as2.ftcdn.net/v2/jpg/02/65/26/83/1000_F_265268314_LmykO3vrtzmh3TQbBdnxj9vUczqqJXCU.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.squarespace-cdn.com/content/v1/5b29d2d64eddecee4e7110e6/1616305349673-PSAG4W2BDZMOKMZ28V9M/Beach+banner.jpg?format=2500w" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider