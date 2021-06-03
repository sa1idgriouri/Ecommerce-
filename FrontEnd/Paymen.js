import React , {useState , useEffect} from 'react'
import DropIn from "braintree-web-drop-in-react";
import toastr from 'toastr';
import 'toastr/build/toastr.css'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder2, getToken, payment } from './compenent/core/ApiCore'
import { EmptyCart, isAuthenticated } from './compenent/Router/helpers'

function Paymen(props) {
  const [data , setData] = useState({
    briantreeToke:null,
    error  :null,
    instance :{},
    addresss :'',
    telephone: '',
    codePost : '',
    City    : ''

  })

  const  handelchange =(e)=>{
    setData({...data , addresss:e.target.value })
  }

  const  handelchangeinput =(e)=>{
    setData({...data , telephone:e.target.value })
  }

  const  handelchangecodeP =(e)=>{
    setData({...data , codePost:e.target.value })
  }


  const  handelchangecity =(e)=>{
    setData({...data , City:e.target.value })
  }


 const userId = isAuthenticated() && isAuthenticated().user._id
 const token = isAuthenticated() && isAuthenticated().token
 let itemsprodact = useSelector(state =>state.cart.prodact)
 let dispatch = useDispatch()

 useEffect(() => {
      getToken(userId, token)
      .then(res => setData({...data ,briantreeToke:res.token}))
      .catch(err => setData({...data , error : err}))
 }, [props])
  const drop = ()=>
  (
     <div>
       {data.briantreeToke !==null && (
          <DropIn
          options={{ 
          authorization:data.briantreeToke,
           paypal: {
             flow: "vault",
            currency: 'USD'
          }
        }}
          onInstance={instance => data.instance = instance}
        />

       )}
     

      
     </div>
)
const total =()=>{
  return itemsprodact.reduce((total , prodcat)=> total+(prodcat.price * prodcat.Count) ,0)
}

const buy   =() =>{
  const addresss = data.addresss
  const tele= data.telephone
  const codeP = data.codePost
  const city = data.City
  data.instance.requestPaymentMethod()
  .then(data => 
   {
     let datapyment ={
       amount : total(),
       paymentMethodNonce: data.nonce
     }

     payment(userId , token ,datapyment)
     .then(res =>
       
       {

         const dataorder ={
           products:itemsprodact,
           transaction_id: res.transaction.id,
           amount        : res.transaction.amount,
           address       : addresss,
           Telephone     : tele,
           codePost      : codeP,
           City          : city
           

         }
         console.log(dataorder)
         createOrder2(userId , token ,dataorder)
         .then(res =>console.log(res))
         .catch(err =>console.error(err))
          EmptyCart (()=>{
           toastr.success("valide " , 'Payment is Valid ')
          
         })
         props.history.push('/checkout')
       
          
       
       })
      .catch(err =>toastr.error("invalide " , err.message))
      toastr.success("valide " , 'Payment is Valid ')
     
   })
 
  .catch(err => toastr.error("invalide " , err.message))
}   
    return (
       
            <section>
  {/*Grid row*/}
   <div className="container">
  <div className="row mt-5">
    {/*Grid column*/}
    <div className="col-lg-8 mb-4">
      {/* Card */}
      <div className="card wish-list pb-1">
        <div className="card-body">
         
        
          <div className="row">
            
            <div className="col-lg-6">
              {/* First name */}
              <div className="md-form md-outline mb-0 mb-lg-4">
              <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" className="form-control mb-0 mb-lg-2" />
             
              </div>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-lg-6">
              {/* Last name */}
              <div className="md-form md-outline">
              <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" className="form-control" />
               
              </div>
            </div>
           
          </div>
         
          <div className="md-form md-outline my-0">
          <label htmlFor="companyName">Company name (optional)</label>
            <input type="text" id="companyName" className="form-control mb-0" />
           
          </div>
         
        
          {/* Address Part 1 */}
          <div className="md-form md-outline mt-3">
          <label htmlFor="form14">Address 1</label>
            <input onChange={handelchange} type="text" id="form14" placeholder="House number and street name" className="form-control" />
           
          </div>
        
          <div className="md-form md-outline  mt-3">
          <label htmlFor="form15">Address2</label>
            <input type="text" id="form15" placeholder="Apartment, suite, unit etc. (optional)" className="form-control" />
           
          </div>
         
          <div className="md-form md-outline mt-3">
          <label htmlFor="form16">Postcode / ZIP</label>
            <input  onChange={handelchangecodeP} type="text" id="form16" className="form-control" />
         
          </div>
        
          <div className="md-form md-outline  mt-3">
          <label htmlFor="form17">Town / City</label>
            <input  onChange={handelchangecity} type="text" id="form17" className="form-control" />
          
          </div>
          
          <div className="md-form md-outline  mt-3">
          <label htmlFor="form18">Phone</label>
            <input onChange={handelchangeinput} type="number" id="form18" className="form-control" />
       
          </div>
    
          <div className="md-form md-outline">
          <label htmlFor="form19">Email address</label>
            <input type="email" id="form19" className="form-control" />
          
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
              <span className="badge badge-danger">${total()}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Maroc</span>
            </li>
    
          </ul>
          {drop()}
          <button onClick={buy} className="btn1">Pay</button>
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
  </div>

</section>
        
    )
}

export default Paymen
