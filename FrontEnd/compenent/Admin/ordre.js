import React , {useState , useEffect} from 'react'
import { listOrder } from './ApiAdmin'
import { isAuthenticated } from '../Router/helpers';
import { Link } from 'react-router-dom';
import moment from 'moment'
import Swal from 'sweetalert2'
import { API_URL } from '../../config/config'
import {ExportCSV} from  '../Admin/ExportCsv';
import ProdactPage from './ProdactPage';

function Ordre(props) {
     const userId = isAuthenticated().user._id
     const token = isAuthenticated().token
     const [orders , setOrders] = useState([])
     const  [curentPage , setCourntPage] = useState(1)
     const [prodactPrepage  , setProderPage] = useState(5)
  
     const fileName ="order"

     const indexlastPordact = curentPage * prodactPrepage
     const indexfirstProdact = indexlastPordact-prodactPrepage
     const courntProdactpage =orders.slice(indexfirstProdact, indexlastPordact)

  const listOrde =(userId , token)=>{
      listOrder(userId , token)
      .then(res =>setOrders(res))
      .catch(err =>console.log(err))
  }

  const [searchData, setSearchData] = useState({search: '' })
  

  const handleChange = (e) => {
  
      setSearchData({...searchData, [e.target.id]:e.target.value})
  
  }

  const paginate  =(numbrepage) =>{
    setCourntPage(numbrepage)
  }

  const onsbmit   =(e) =>{
    e.preventDefault()
   let {search}=  searchData
  if(search)
  {
      listOrder(userId , token ,{search : search || undefined  }) 
      .then(res =>setOrders(res))

  }
  else
  {
   

    listOrde(userId , token)
      
  }

  }


  useEffect(() => {
       listOrde(userId , token)
  }, [props])


  const deleteOrder   =(idOrder ,IdUser) =>{


    Swal.fire({
        title: 'Are you sure?',
        text: 'You will Delete Category!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Delete Order.',
            'success'
          )
          fetch(`${API_URL}/order/${idOrder}/${IdUser}`  ,{
            method : "delete",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(res => {
              if(res.message)
              {
                console.log("bad")
              }
             
               props.history.push('/order')
              
          })
          
          .catch(err =>console.log(err))



        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
   

}



    return (
         <div>
        {orders.length >0  &&(
            <>

 
       <div className="container">
         <div className="row">
         <div className="col-md-8">
                  <div className="header_search">
                    <div className="header_search_content">
                      <div className="header_search_form_container">
                      <form  className="header_search_form clearfix">
                           <input  onChange={handleChange} id="search" name="search" type="search"  className="header_search_input" placeholder="Search for products..." />
                          <div className="custom_dropdown" style={{display: 'none'}}>
                       
                          </div> <button  onClick={onsbmit} className="header_search_button trans_300" value="Submit"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png"  alt="" /></button>
                        
                        </form>
                      </div>
                    </div>
                  </div>
                      </div>

                      <div className="col-md-4 mt-5">
                      <ExportCSV csvData={orders} fileName={fileName} />
                      </div>

         </div>
       </div>
      
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">status</th>
      <th scope="col">price</th>
      <th scope="col">date</th>
      <th scope="col">user</th>
      <th scope="col">Prodact</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {orders && courntProdactpage.map(order =>
         <tr key={order._id}>
          
          <td >
            <span  className={
              order.status =='Cancelled' ? 'badge badge-pill badge-danger' 
              : (order.status=="Delivered" ? 'badge badge-success' 
              : (order.status=="Shipped" ? 'badge badge-info'
               : (order.status=="Processing" ? 'badge badge-warning' : '')))}>
             {order.status}
             </span>
           
            </td>
          <td>${order.amount}</td>
          <td>{moment(order.createdAt).fromNow() }</td>
          <td>{order.user.name}</td>
          <td>{order.products.length} Items</td>
          <td>
            <div  >
              <Link to={`/oderdetals/${order._id}`}>
  
                <span className="badge badge-success "><i className="fas fa-eye fa-2x  "></i></span>
              </Link>
              <span onClick={() =>deleteOrder(order._id,userId)} className="badge badge-danger m-2"><i class="fas fa-trash fa-2x"></i></span>
            </div>
          </td>
          
     
           
         </tr>

      
      
      )}

      
          
   
   </tbody>
   </table>
   <ProdactPage 
     prodcatpre={prodactPrepage}
      total={orders.length}  
      paginate={paginate}
      />
   
            </>


        )}    
   
   {orders.length ===0 && (
            <div className="text-center">
            <h1>Ordes is Empty</h1>
             </div>
         )}
 
             
        </div>
    )
}

export default Ordre
