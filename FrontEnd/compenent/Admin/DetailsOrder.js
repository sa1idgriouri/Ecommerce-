import React   ,{useState , useEffect} from 'react'
import { isAuthenticated } from '../Router/helpers'
import { getStatus, listOrderOne, updateStatus } from './ApiAdmin'
import ShowImage from './ShowImage'

function DetailsOrder(props) {
      const [oneorders , setOneOrders] = useState({})
      const [products , setProducts] = useState([])
      const [users , setUsers] = useState([])
      const [status , setStatus] = useState([])
      const [changestatus , setStatusChange] = useState([])
     const orderId  =props.match.params.id
     const {user , token } = isAuthenticated()

     const HandelHange  =(e)=>{
          setStatusChange(e.target.value)
     }

     const changeStatuss  =(userId , token , orderid ,changers )=>{
   
        updateStatus(userId ,token, orderid ,changers)
        .then(res =>{
          if(res.error)
          {
             return console.log(res.error)
          }
        
           props.history.push('/order')
        })
          
     }

     const LoadStatus =()=>{
       getStatus(user._id , token)
       .then(res =>setStatus(res.status))
       .catch(err =>console.log(err))
     }
     
       useEffect(() => {
          console.log(orderId)
           listOrderOne(orderId , user._id , token)
          .then(res =>setOneOrders(res))
          .catch(err =>console.log(err))
          listOrderOne(orderId , user._id , token)
          .then(res =>setUsers(res.user))
          .catch(err =>console.log(err))
          listOrderOne(orderId , user._id , token)
          .then(res =>setProducts(res.products))
          .catch(err =>console.log(err))
          LoadStatus()

       }, [])

   const UserInfo  = ()=>{
  
      
      return(
        <div className="col-md-6">
        <ul className="list-group">
          <li className="list-group-item active">info User</li>
          <li className="list-group-item"><strong>Name  :</strong>{users.name} </li>
          <li className="list-group-item"><strong>Email  :</strong>{users.email} </li>
          <li className="list-group-item"><strong>Address:   </strong>{oneorders.address} </li>
          <li className="list-group-item"><strong>Telephone:   </strong>{oneorders.Telephone}</li>
          <li className="list-group-item"><strong>Code Post:   </strong>{oneorders.codePost}</li>
          <li className="list-group-item"><strong>City:   </strong>{oneorders.City}</li>
          </ul>
        </div>

      )
       
                
          

   }
      



   
    return (
        <div>
              <div className="container">
                  <div className="row">
                   
                      <div className="col-md-6">
                      <ul class="list-group">
                        <li className="list-group-item active"> Details Order</li>
                        <li className="list-group-item"> <strong>Id Transcation :</strong>{oneorders.transaction_id} </li>
                        <li className="list-group-item"> <strong>Order Date     :</strong>{oneorders.createdAt} </li>
                        <li className="list-group-item"><strong>Status    :</strong>   
                           <br />
                           <br />
                         
                           <select onChange={ HandelHange} className="form-control">
                          <option>Select Status</option>
                             {status.map(s =>
                              
                              <option key={s}>{s}</option>
                              )}
                           
                           
                            
                            </select>
                          
                            <button onClick= { ()=>changeStatuss(user._id , token , orderId, changestatus) } type="button" class="btn btn-success m-3">save</button>

                          
                         
                          
                        </li>
                        
                        </ul>
                      </div>
                      {UserInfo()}
                     
                     
                  </div>

                    <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">image</th>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                         {
                           products.map(prodact =>
                             <tr key={prodact._id}>
                               <div className="bc">
                               <ShowImage style={{ width :"20px" }} itmes={prodact} url="prodact/photo"></ShowImage>
                               </div>
                              
                                <td>{prodact.name}</td>
                                <td>${prodact.price}</td>
                                 <td>{prodact.Count}</td>
                                 <td>${prodact.price * prodact.Count}</td>
                             </tr>
                            )
                         }
                        
                     
                    </tbody>
                    </table>
                  </div>
                 
           
    
        </div> 
    )
}

export default DetailsOrder
