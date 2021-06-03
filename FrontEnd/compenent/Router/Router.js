import React from 'react'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Signin from '../user/Signin'
import Signup from '../user/Signup'
import Home from '../core/Home'
import Header from '../Header/Header'


import PrivateAdminRoute from './GardAdmin'
import PreventRouter  from './PreventRouter'

import Shop from '../core/Shop'
import Show from '../core/Show'
import Footer from '../core/Footer'
import Checkout from '../../checkout'
import Navbar from '../Admin/Navbar'
import Contact from '../core/Contact'
import Dashborduser from '../core/Dashborduser'

import Paymen from '../../Paymen'
import Blog from '../core/Blog'
import PageNotFound from '../core/PageNotFound'




const Router =()  => {
    return (
        
        <BrowserRouter>
       
          <Header />
        
        
            <Switch>
                <Route path ='/' exact  component = {Home} />
                <Route path ='/shop' exact  component = {Shop} />
                <Route path ='/Show/:id' exact  component = {Show} />
                <PrivateAdminRoute path ='/admin/dashbord' exact  component = {Navbar} />
                <Route path ='/signin' exact  component = {Signin} />
                <Route path ='/checkout' exact  component = {Checkout} />
                <Route path ='/signup' exact  component = {Signup} />
                 <PreventRouter path="/payment"  exact component={Paymen} />
                 <Route path="/blog" exact component ={Blog} />
                <Route path ='/contact' exact  component = {Contact} />
                <PreventRouter path='/Dashbord' exact component= {Dashborduser} />
                <Router path="*"  exact component={PageNotFound} />
            </Switch>
                   <Footer />
        </BrowserRouter>
    )
}

export default Router
