import React ,{useState} from 'react'
import { Link} from 'react-router-dom'
import {withRouter } from 'react-router-dom'
import Prodact from './Prodact';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Category from './Category';
import AllProdact from './AllProdact';
import AllCategory from './AllCategory';
import EditeCategory from './EditeCategory';
import EditProduit from './EditProduit';
import AdminDashborD from './AdminDashborD';
import Dashboord from './Dashboord';
import Location from './Location';
import ordre from './ordre';
import PrivateAdminRoute from '../Router/GardAdmin';
import DetailsOrder from './DetailsOrder';
import {API_URL} from '../../config/config'
import toastr from 'toastr';
import 'toastr/build/toastr.css'
import User from './User';
import Contact from './Contact';
import Rapport from './Rapport';



function Navbar(props) {
  


 

  const signout  = ()=>{
    fetch(`${API_URL}/signout`)
    .then(() => {
      toastr.info("User SignOut " , 'I see next time')
     
       localStorage.removeItem("JWT_INFO")
      props.history.push("/signin")
      
    })
  

    .catch(err =>toastr.error(err))

}     

const [show, setShow] = useState(false);
const handleClick = () => {
  setShow(s => !s);
};





    return (
        <BrowserRouter>
  <div className={!show ? "container1"  : "container2"}>
  <nav className="navbar1">
    <div className="n" >
   
      <div>
     
      <i className="fas fa-bars" onClick={handleClick} ></i> 
    </div>
    </div>
    <div className="navbar__left">
      <Link to="#">Subscribers</Link>
      <Link to="#">Video Management</Link>
      <Link className="active_link" to="#">Admin</Link>
    </div>
    <div className="navbar__right">
      <Link to="#">
        <i className="fa fa-search" aria-hidden="true" />
      </Link>
      <Link to="#">
        <i className="fa fa-clock-o" aria-hidden="true" />
      </Link>
      
      <div className="dropdown" style={{marginRight : '20px ' }}>
        <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img width="30" src="/assets/avatar.svg" alt="" />
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" to="/Dashbord">View Dashbord</Link>
          <Link className="dropdown-item" to="/profileuser">Profile</Link>
      
          <div className="dropdown-divider" />
          <Link className="dropdown-item" href="#"><span  onClick={signout} >SignOut <span className="sr-only">(current)</span></span></Link>
        </div>
      </div>
    </div>
  </nav>
  
    <main>
    <Switch>  
              
              <PrivateAdminRoute path='/admin/Dashbord' exact  component={Dashboord} />
              <PrivateAdminRoute path ='/admin/Allprodact' exact  component = {Prodact} />  
              <PrivateAdminRoute path ='/admin/contact' exact  component = {Contact} />
              <PrivateAdminRoute path ='/user' exact  component = {User} /> 
               <PrivateAdminRoute path ='/prodact' exact  component = {AllProdact} />  
               <PrivateAdminRoute path ='/Rapport' exact  component = {Rapport} /> 
              <PrivateAdminRoute path ='/location' exact  component = {Location} /> 
              <PrivateAdminRoute path ='/oderdetals/:id' exact  component = {DetailsOrder} /> 
              <PrivateAdminRoute path ='/order' exact  component = {ordre} /> 
              <PrivateAdminRoute path ='/admin/category' exact  component = {AllCategory} />  
              <PrivateAdminRoute path ='/addProdact' exact  component = {Category} />  
              <PrivateAdminRoute path ='/editecategory/:idCat' exact  component = {EditeCategory} /> 
              <PrivateAdminRoute path ='/editeProduit/:idPro' exact  component = {EditProduit} /> 
              <PrivateAdminRoute path ='/dh' exact  component = {AdminDashborD} /> 
             
     </Switch>
    </main>
 
  <div  id={!show ? "sidebar"  : "sidebar1"} >
  
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
        <Link to="/admin/Dashbord">Dashboard</Link>
      </div>
      <h2>MNG</h2>
      <div className="sidebar__link">
              <Link className="nav-link" to="/order">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg>
               
               <span>Orders</span>
            </Link>
      </div>
      <div className="sidebar__link">
              <Link className="nav-link" to="/prodact">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                
                <span>Products</span>
            </Link>
      </div>
      <div className="sidebar__link">
             <Link className="nav-link" to="/admin/category">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
             
             <span>Category</span>
            </Link>
      </div>

  

      <div className="sidebar__link">
             <Link className="nav-link" to="/admin/contact">
             <i class="fas fa-id-badge fa-2x">  </i>
             <span> Contact</span>
            
                     
            </Link>
      </div>

      <div className="sidebar__link">
             <Link className="nav-link" to="/Rapport">
             <i class="far fa-file-pdf fa-2x">   </i>
              <span>Rapport</span>
                     
            </Link>
      </div>

      
      <div className="sidebar__link">
             <Link className="nav-link" to="/location">
              <i class="fas fa-street-view fa-2x"></i>
                       
                       <span>Location</span>
            </Link>
      </div>
      <div className="sidebar__link">
             <Link className="nav-link" to="/user">
            <i className="far fa-user-circle fa-2x"></i>
            <span>Profile</span>
            </Link>
      </div>

     
      
    </div>
  </div>
</div>



            
        </BrowserRouter>
    )
}

export default withRouter(Navbar) 
