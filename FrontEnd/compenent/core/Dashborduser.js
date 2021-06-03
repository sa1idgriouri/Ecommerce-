import React from 'react'
import { BrowserRouter, Link , Route, Switch } from 'react-router-dom'
import Orderuser from './Orderuser'
import PreventRouter  from '../Router/PreventRouter'
import ProfileUser from './ProfileUser'

function Dashborduser() {
    return (
        <BrowserRouter>
        <div className="container1">
       
          <main>
          <Switch>  
             
              <PreventRouter path='/orderuser' exact component= {Orderuser} />
              <PreventRouter path='/profileuser' exact component= {ProfileUser} />
                     
                   
           </Switch>
          </main>
       
        <div id="sidebar">
          <div className="sidebar__title">
            <div className="sidebar__img">
              <img src="/assets/logo.png" alt="logo" />
              <h1>Shopping</h1>
            </div>
            <i className="fa fa-times" id="sidebarIcon" aria-hidden="true" />
          </div>
          <div className="sidebar__menu">
            <div className="sidebar__link active_menu_link">
              <i className="fa fa-home" />
              <Link to="#">Dashboard</Link>
            </div>
            <h2>MNG</h2>
            <div className="sidebar__link">
                    <Link className="nav-link" to="/orderuser">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg>
                     Orders
                  </Link>
            </div>
            <div className="sidebar__link">
                   <Link className="nav-link" to="/profileuser">
                  <i className="far fa-user-circle fa-2x"></i>Profile
                  </Link>
            </div>
      
           
            
          </div>
        </div>
      </div>
      
      
      
                  
              </BrowserRouter>
    )
}

export default Dashborduser
