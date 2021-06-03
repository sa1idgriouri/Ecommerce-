import React , {useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link  , withRouter} from 'react-router-dom'
import ShowImage from './compenent/Admin/ShowImage'
import { getToken} from './compenent/core/ApiCore'
import {isAuthenticated } from './compenent/Router/helpers'
import { deincremount, incremount ,  deteprodact } from './store/actions/cartAction'



function Checkout(props) {

      const [data , setData] = useState({
           briantreeToke:null,
           error  :null,
           instance :{},
           addresss :'',
           telephone: ''

         })

        const userId = isAuthenticated() && isAuthenticated().user._id
        const token = isAuthenticated() && isAuthenticated().token
        let itemsprodact = useSelector(state =>state.cart.prodact)
        let dispatch = useDispatch()

        useEffect(() => {
             getToken(userId, token)
             .then(res => setData({...data ,briantreeToke:res.token}))
             .catch(err => setData({...data , error : err}))
        }, [props])

  
 



         
    


    const total =()=>{
         return itemsprodact.reduce((total , prodcat)=> total+(prodcat.price * prodcat.Count) ,0)
    }


  
    return (
        <>
     

          <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Cart</h1>
               
            </div>
           </div>
           { itemsprodact.length  >0  &&(

<div className="card card1">
           
<div className="row">
  <div className="col-md-8 cart1">
    <div className="title1">
      <div className="row">
        <div className="col">
          <h4><b>Shopping Cart</b></h4>
        </div>
        <div className="col align-self-center text-right text-muted">3 items</div>
      </div>
    </div>

    {itemsprodact.map((prodact , i) =>
    
    <div className="row border-top border-bottom">
    <div className="row main align-items-center">
      <div  className=" k col-2">
          <ShowImage width={12} itmes={prodact} url="prodact/photo" />
      </div>
      <div className="col ml-5">
        <div className="row text-muted">{prodact.name}</div>
        <div className="row">{prodact.name}</div>
      </div>
      <div className="col">
          {prodact.Count  >1 && (
            <button onClick= {() =>dispatch(deincremount(prodact))} className=" p-1  bg-danger text-white ">-</button>
          )}

      
        <button   className="  p-2 m-3  border">{prodact.Count}</button>
        <button onClick= {() =>dispatch(incremount(prodact))} className=" p-1  bg-info text-white ">+</button>
       </div>
        
      <div className="col ">$ {prodact.price *prodact.Count} 
      <span onClick= {() =>dispatch(deteprodact(prodact._id))} className="close">✕</span></div>
    </div>
   </div>
    
    
    
    )}
   
    

  
    <div className="back-to-shop"><a href="#">←</a><span className="text-muted">Back to shop</span></div>
  </div>
  <div className="col-md-4 summary">
    <div>
      <h5><b>Summary</b></h5>
    </div>
   
  
    <div className="row" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}>
      <div className="col">TOTAL PRICE</div>
      <div className="col text-right "> <span className="badge badge-danger">${total()}</span></div>
      <hr />
      {isAuthenticated() &&(
          <>
         

        
          {/* <label htmlFor="addresss">address</label>
          <textarea  id="addresss" required onChange={handelchange}  col="2" className="form-control"></textarea>
          <label htmlFor="telephone">Telephone</label>
          <input  id="telephone"  required onChange={handelchangeinput}   className="form-control"></input> */}
             
            
         
        
          
             <Link to="/payment"><button className="btn1">Checkout</button></Link>
           
        
        </>
      )}
      {!isAuthenticated() &&(

        <Link to="/signin">
        <button className="btn btn-danger btn1">Go To Sign In</button>
       </Link>
      )


      }
        
    </div>
  </div>
</div>
</div>
 




         )}

         {itemsprodact.length ===0 && (
            <div className="text-center">
            <h1>Cart is Empty</h1>
             </div>
         )}

        
       
      </>
      
    )
}

export default withRouter(Checkout) 
