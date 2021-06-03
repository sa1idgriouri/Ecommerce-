import React from 'react'

function Slide() {
    return (
        <div>
            

            <>
{/* Carousel wrapper */}
<div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
  {/* Indicators */}
  <div className="carousel-indicators">
    <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to={1} aria-label="Slide 1" />
    <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to={2} aria-label="Slide 1" />
  </div>
  {/* Inner */}
  <div className="carousel-inner">
    {/* Single item */}
    <div className="carousel-item active">
      <img src="/assets/1.jpg" className="d-block " alt="..." />
      
    </div>
    {/* Single item */}
    <div className="carousel-item">
      <img src="/assets/2.jpg"  className="d-block " alt="..." />

    </div>
    {/* Single item */}
    <div className="carousel-item">
      <img src="/assets/3.jpg" className="d-block" alt="..." />
     
    </div>
  </div>
  {/* Inner */}
  {/* Controls */}
  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* Carousel wrapper */}
</>
        </div>
    )
}

export default Slide
