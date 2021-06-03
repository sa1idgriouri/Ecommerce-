import React  , {useEffect , useState} from 'react'
import { Link , withRouter} from 'react-router-dom';
import { API_URL } from '../../config/config'
import { isAuthenticated } from '../Router/helpers';
import Swal from 'sweetalert2'
import { getAllCategory } from './ApiAdmin';

function AllCategory(props) {
     const [category , setCtegory] = useState([]);
 
    const {user , token} = isAuthenticated();

    const deleteCaategory   =(idCategory ,IdUser ) =>{


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
                'Delete Category.',
                'success'
              )
              fetch(`${API_URL}/category/${idCategory}/${IdUser}`  ,{
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
                  // window.location.reload(false);
                   props.history.push('/admin/category')
                  
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
    const [searchData, setSearchData] = useState({search: '' })
  

    const handleChange = (e) => {
    
        setSearchData({...searchData, [e.target.id]:e.target.value})
    
    }

    const onsbmit   =(e) =>{
      e.preventDefault()
     let {search}=  searchData
    if(search)
    {
        getAllCategory({search : search || undefined  }) 
        .then(res =>setCtegory(res))

    }
    else
    {
     

        getAllCategory() 
      .then(res =>setCtegory(res))
        
    }

    }
   useEffect(() =>  {
    getAllCategory() 
    .then(res =>setCtegory(res))

  
  } ,[props])
    return (
        <div>
          <div className="container">
                <div className="row">
                  <div className="col-md-6 mt-3">
                  <Link to='/addProdact'>
                    <button className ="btn btn-primary"><i className="fas fa-step-backward my-3 "></i>  Go To Add Category</button>
                  </Link>
                  </div>
                  <div className="col-md-6">
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
                 </div>
              </div>

         
 <div className="table-responsive">
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
         category &&  category.map((category , i) =>
          <tr key={i}>
               <td>{category.name}</td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td>
                   <div>
                   
                    <span onClick= {()=> deleteCaategory(category._id , user._id)}> <i    className=" btn btn-danger fas fa-trash-alt fa-2x"></i></span> 
                    
                     <Link to={`/editecategory/${category._id}`}>
                     <i className=" btn btn-success far fa-edit fa-2x"></i>
                     </Link>
                  
                   </div>
                   
                   
                  
               </td>
          </tr>
          )}
  
   
  </tbody>
</table>
</div>
            
        </div>
    )
}

export default withRouter(AllCategory) 