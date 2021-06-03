import React, { useState, useEffect } from 'react'
import './Dahbord.css'
import { listOrder } from './ApiAdmin'
import { API_URL } from '../../config/config'
import { Link } from 'react-router-dom';
import { getAllCategory } from '../core/ApiCore';
import { isAuthenticated } from '../Router/helpers';
import moment from 'moment'
import Chart from './Chart';


function Dashboord() {

  const user = isAuthenticated().user.name
  const token = isAuthenticated().token
  const userId = isAuthenticated().user._id
  const [prodact, setProdact] = useState([]);
  const [Allcategory, setCategory] = useState([]);
  const [orders, setOrders] = useState([])

  const [orderslist , setOrderslist] = useState([])
  

 


  const listOrdelist =(userId , token ,limit)=>{
      listOrder(userId , token , limit)
      .then(res =>setOrderslist(res))
      .catch(err =>console.log(err))
  }

  const totalOrderd = () => {
    var s = 0
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].status === "Delivered") {
        s = s + 1
      }


    }
    return s
  }



  const totalOrderC = () => {
    var s = 0
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].status === "Cancelled") {
        s = s + 1
      }


    }
    return s
  }


  const totalOrderH = () => {
    var s = 0
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].status === "Shipped") {
        s = s + 1
      }


    }
    return s
  }


  const totalOrderP = () => {
    var s = 0
    for (var i = 0; i < orders.length; i++) {
      if (orders[i].status == "Processing") {
        s = s + 1
      }


    }
    return s
  }


  const listOrde = (userId, token , limit ) => {
    listOrder(userId, token , limit)
      .then(res => setOrders(res))
      .catch(err => console.log(err))
  }

  const getAllProdact = () => {
    fetch(`${API_URL}/prodact/`)
      .then(res => res.json())
      .then(res => setProdact(res.prodact))
      .catch(err => console.error(err))

  }
  const TotalPrice = () => {
    return orders.reduce((total, order) => total + order.amount, 0)
  }

  useEffect(() => {
    listOrdelist(userId, token ,6)
    listOrde(userId, token )
   
    getAllProdact()
    getAllCategory()
      .then(res => setCategory(res.length))
      .catch(err => console.error(err))
  }, [])




  return (
    <div>
      <div >
        <div className="main__title m-4">
          <img src="/assets/hello.svg" alt="bbb" />
          <div class="main__greeting">
            <h1>Hello {user}</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
        <div className="row m-2">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats user">
              <div className="card-header card-header-warning card-header-icon">
                <div className="card-icon">
                  <i className="fas fa-file fa-3x" > Order</i>
                </div>

                <h3 className="text-center mt-3">{orders.length}

                </h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons text-danger">warning</i>
                  <a href="javascript:;">Get More Space...</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats Category ">
              <div className="card-header  card-header-success card-header-icon">
                <div className="card-icon">
                  <i className="fa fa-suitcase fa-3x">Category</i>
                </div>
                <div className="text-center mt-3">
                  <Link to="/admin/category">
                    <h3 className="text-center mt-3">{Allcategory}</h3>
                  </Link>

                </div>

              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">date_range</i> Last 24 Hours
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats product">
              <div className="card-header card-header-danger card-header-icon">
                <div className="card-icon">
                  <i className="fas fa-store-alt fa-3x">Product</i>
                </div>
                <div className=" text-center mt-3">
                  <Link to="/prodact">
                    <h3 classNameName="text-center mt-5 ">{prodact.length}</h3>
                  </Link>

                </div>

              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">local_offer</i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats money">
              <div className="card-header card-header-info card-header-icon">
                <div className="card-icon">
                  <i className="fa fa-money fa-3x" aria-hidden="true"> Money</i>
                </div>
                <div className="text-center mt-3">
                  <h3 classNameName="text-center mt-3">${TotalPrice()}</h3>

                </div>

              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">update</i> Just Updated
                  </div>
              </div>
            </div>
          </div>
        </div>



      </div>

      <>
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Today</h1>
                <p>list Ordes</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true" />
             
            </div>
            <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">user</th>
      <th scope="col">date</th>
      <th scope="col">status</th>
    </tr>

    {
      orderslist.map(order =>
            <tr>
              <td>{order.user.name}</td>
              <td>{moment(order.createdAt).fromNow() }</td>
              <td>
              <span  className={
              order.status =='Cancelled' ? 'badge badge-pill badge-danger' 
              : (order.status=="Delivered" ? 'badge badge-success' 
              : (order.status=="Shipped" ? 'badge badge-info'
               : (order.status=="Processing" ? 'badge badge-warning' : '')))}>
             {order.status}
             </span>
              </td>
            </tr>
        )
    }

   
  </thead>
  </table>

           



          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1> Reports Orders</h1>

              </div>
              <i className="fa fa-usd" aria-hidden="true" />
            </div>
            <div className="charts__right__cards">
              <div className="card3">
                <h1>Shipped</h1>
                <p className="order">{totalOrderH()}</p>
              </div>
              <div className="card4">
                <h1>Cancelled</h1>
                <p className="order">{totalOrderC()}</p>
              </div>
              <div className="card5">
                <h1>Processing</h1>
                <p className="order">{totalOrderP()}</p>
              </div>
              <div className="card6">
                <h1>Delivered</h1>
                <p className="order">{totalOrderd()}</p>
              </div>
            </div>
          </div>
        </div>
        {/* CHARTS ENDS HERE */}
      </>
 
     
    </div>
  )
}

export default Dashboord
