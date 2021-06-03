import React  from 'react'
 
 import {withRouter } from 'react-router-dom'
import Prodact from './Prodact';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Category from './Category';
import Navbar from './Navbar';
import AllProdact from './AllProdact';
import AllCategory from './AllCategory';
import EditeCategory from './EditeCategory';
import EditProduit from './EditProduit';
import Dashboord from './Dashboord';
import Location from './Location';
import ordre from './ordre';
import PrivateAdminRoute from '../Router/GardAdmin';
import DetailsOrder from './DetailsOrder';




const Dashbord  =()  =>{

 
  
  
    return (
 
       
                  
       <BrowserRouter>

<div className="container-fluid">
  <div className="row">
      <Navbar  />
     <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"><div className="chartjs-size-monitor" style={{position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1}}><div style={{position: 'absolute', width: 1000000, height: 1000000, left: 0, top: 0}} /></div><div className="chartjs-size-monitor-shrink" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1}}><div style={{position: 'absolute', width: '200%', height: '200%', left: 0, top: 0}} /></div></div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2"></h1> 
      </div>
       <Switch>  
              
               <Route path ='/' exact  component = {Dashboord} /> 
               <PrivateAdminRoute path ='/Allprodact' exact  component = {Prodact} />  
                <PrivateAdminRoute path ='/prodact' exact  component = {AllProdact} />  
               <PrivateAdminRoute path ='/location' exact  component = {Location} /> 
               <PrivateAdminRoute path ='/oderdetals/:id' exact  component = {DetailsOrder} /> 
               <PrivateAdminRoute path ='/order' exact  component = {ordre} /> 
               <PrivateAdminRoute path ='/admin/category' exact  component = {AllCategory} />  
               <PrivateAdminRoute path ='/addProdact' exact  component = {Category} />  
               <PrivateAdminRoute path ='/editecategory/:idCat' exact  component = {EditeCategory} /> 
               <PrivateAdminRoute path ='/editeProduit/:idPro' exact  component = {EditProduit} /> 
              
      </Switch>
    </main>
  </div>
</div>

</BrowserRouter>
               
        

    )
}

export default withRouter(Dashbord) 
