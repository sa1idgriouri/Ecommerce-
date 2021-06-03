import React from 'react'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Dashbord from '../core/Dashbord'
import Prodact from './Prodact'


const Router =()  => {
    return (
        
        <BrowserRouter>
       
       
        
        
            <Switch>
               
                <Route path ='admin/prodact' exact  component = {Prodact} />
            
            </Switch>
          
        </BrowserRouter>
    )
}

export default Router