import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <>
            <>
            <div className="jumbotron jumbotron-fluid">
                       <div className="container">
                          <h1 className="display-4">Blog</h1>
                        </div>
            </div>
             
 
  <main className="my-5">
    <div className="container">
      {/*Section: Content*/}
      <section className="text-center">
        <h4 className="mb-5"><strong>Latest posts</strong></h4>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/022.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/035.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section: Content*/}
      {/* Pagination */}
      <nav className="my-4" aria-label="...">
        <ul className="pagination pagination-circle justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</>

        </>
    )
}

export default Blog

