import React  , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/config'
import Swal from 'sweetalert2'
import { isAuthenticated } from '../Router/helpers';
import ShowImage from './ShowImage';
import { getProdcat } from './ApiAdmin';
import ProdactPage from './ProdactPage';

function AllProdact(props) {
     const [prodact , setProdact] = useState([]);
     const [searchData, setSearchData] = useState({search: '' })
    const  [curentPage , setCourntPage] = useState(1)
    const [prodactPrepage  ] = useState(5)


  

const handleChange = (e) => {

    setSearchData({...searchData, [e.target.id]:e.target.value})

}

const paginate  =(numbrepage) =>{
  setCourntPage(numbrepage)
}
  

    


    const {user , token} = isAuthenticated();

    const deleteProdact   =(idProdact ,IdUser ) =>{


        Swal.fire({
            title: 'Are you sure?',
            text: 'You will Delete Prodact!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Delete Category.',
                'success'
              )
              fetch(`${API_URL}/prodact/${idProdact}/${IdUser}`  ,{
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
                     return console.log("bad")
                  }
                  
                   props.history.push('/prodact')
                  
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
  
    const onsbmit   =(e) =>{
      e.preventDefault()
     let {search}=  searchData
    if(search)
    {
        getProdcat({search : search || undefined  }) 
        .then(res =>setProdact(res))

    }
    else
    {
     

      getProdcat()  
      .then(res =>setProdact(res))
        
    }

    }
  

          useEffect(() =>
          getProdcat()  
          .then(res => {
            setProdact(res) 
          }
            )
          ,[props])

          const indexlastPordact = curentPage * prodactPrepage
          const indexfirstProdact = indexlastPordact-prodactPrepage
          const courntProdactpage =prodact.slice(indexfirstProdact, indexlastPordact)
    return (
        <div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 mt-3">
                  <Link to='/admin/Allprodact'>
                         <button className ="btn btn-primary"><i className="fas fa-step-backward my-3 "></i>  Go To Add Prodact</button>
                   </Link>
                  </div>
                  <div className="col-md-6">
                  <div className="header_search">
                    <div className="header_search_content">
                      <div className="header_search_form_container">
                      <form   className="header_search_form clearfix" >
                           <input  onChange={handleChange } id="search" name="search" type="search"  className="header_search_input" placeholder="Search for products..." />
                          <div className="custom_dropdown" style={{display: 'none'}}>
                       
                          </div> <button  onClick={onsbmit} className="header_search_button trans_300" value="Submit"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png"  alt="" /></button>
                        
                        </form>
                      </div>
                    </div>
                  </div>
                      </div>
                 </div>
              </div>
            
 <div className="table-responsive" >
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">price</th>
      <th scope="col">Categroy</th>
      <th scope="col">Quantity</th>
      <th scope="col">Shopping</th>
      <th scope="col">image</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
        prodact &&  courntProdactpage.map((prodact , i) =>
          <tr>
               <td>{prodact.name}</td>
               <td>{prodact.description}</td>
               <td>{prodact.price}</td>
               <td>{prodact.category.name}</td>
               <td>{prodact.Qauntity}</td>
               
               <td>{ prodact.shopping===false ?"No" : "Yes"}</td>
               <div className="b" style={{width : "150px" }}>
               <td><ShowImage  style={{width : "150px" }} url="prodact/photo" itmes={prodact}  /></td>
               </div>
              
               <td>
                   <div>
                   
                   <span onClick={()=>deleteProdact(prodact._id , user._id)}><i className=" btn btn-danger fas fa-trash-alt fa-2x"></i></span> 
                 
                     <Link to={`/editeProduit/${prodact._id}`}>
                     <i className=" btn btn-success far fa-edit fa-2x"></i>
                     </Link>
                  
                   </div>
                   
                   
                  
               </td>
          </tr>
          )}
  
   
  </tbody>
</table>
</div>
     <ProdactPage 
     prodcatpre={prodactPrepage}
      total={prodact.length}  
      paginate={paginate}
      />
   
   
        </div>
    )
}

export default AllProdact
