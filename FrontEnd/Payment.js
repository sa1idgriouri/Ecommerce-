import React from 'react'

function Payment() {
    return (
        <div>
            <>
{/*Section: Block Content*/}
<section>
  {/*Grid row*/}
  <div className="row">
    {/*Grid column*/}
    <div className="col-lg-8 mb-4">
      {/* Card */}
      <div className="card wish-list pb-1">
        <div className="card-body">
          <h5 className="mb-2">Billing details</h5>
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-lg-6">
              {/* First name */}
              <div className="md-form md-outline mb-0 mb-lg-4">
                <input type="text" id="firstName" className="form-control mb-0 mb-lg-2" />
                <label htmlFor="firstName">First name</label>
              </div>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-lg-6">
              {/* Last name */}
              <div className="md-form md-outline">
                <input type="text" id="lastName" className="form-control" />
                <label htmlFor="lastName">Last name</label>
              </div>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
          {/* Company name */}
          <div className="md-form md-outline my-0">
            <input type="text" id="companyName" className="form-control mb-0" />
            <label htmlFor="companyName">Company name (optional)</label>
          </div>
          {/* Country */}
          <div className="d-flex flex-wrap">
            <div className="select-outline position-relative w-100">
              <select className="mdb-select md-form md-outline">
                <option value disabled selected>Choose your option</option>
                <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
                <option value={3}>Option 3</option>
              </select>
              <label>Country</label>
            </div>
          </div>
          {/* Address Part 1 */}
          <div className="md-form md-outline mt-0">
            <input type="text" id="form14" placeholder="House number and street name" className="form-control" />
            <label htmlFor="form14">Address</label>
          </div>
        
          <div className="md-form md-outline">
            <input type="text" id="form15" placeholder="Apartment, suite, unit etc. (optional)" className="form-control" />
            <label htmlFor="form15">Address</label>
          </div>
         
          <div className="md-form md-outline">
            <input type="text" id="form16" className="form-control" />
            <label htmlFor="form16">Postcode / ZIP</label>
          </div>
        
          <div className="md-form md-outline">
            <input type="text" id="form17" className="form-control" />
            <label htmlFor="form17">Town / City</label>
          </div>
          
          <div className="md-form md-outline">
            <input type="number" id="form18" className="form-control" />
            <label htmlFor="form18">Phone</label>
          </div>
    
          <div className="md-form md-outline">
            <input type="email" id="form19" className="form-control" />
            <label htmlFor="form19">Email address</label>
          </div>
        
          <div className="md-form md-outline">
            <textarea id="form76" className="md-textarea form-control" rows={4} defaultValue={""} />
            <label htmlFor="form76">Additional information</label>
          </div>
          <div className="form-check pl-0 mb-4 mb-lg-0">
            <input type="checkbox" className="form-check-input filled-in" id="new3" />
            <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="new3">Create an
              account?</label>
          </div>
        </div>
      </div>
      
    </div>
  
    <div className="col-lg-4">
  
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="mb-3">The total amount of</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Temporary amount
              <span>$53.98</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
                <strong>
                  <p className="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span><strong>$53.98</strong></span>
            </li>
          </ul>
          <button type="button" className="btn btn-primary btn-block waves-effect waves-light">Make purchase</button>
        </div>
      </div>
      
    
      <div className="card mb-4">
        <div className="card-body">
          <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Add a discount code (optional)
            <span><i className="fas fa-chevron-down pt-1" /></span>
          </a>
          <div className="collapse" id="collapseExample">
            <div className="mt-3">
              <div className="md-form md-outline mb-0">
                <input type="text" id="discount-code" className="form-control font-weight-light" placeholder="Enter discount code" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
   
  </div>

</section>

</>
            
        </div>
    )
}

export default Payment
