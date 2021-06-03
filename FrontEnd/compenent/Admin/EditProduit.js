
import React  , {useState ,useEffect} from 'react'
import { API_URL } from '../../config/config'
import { isAuthenticated } from '../Router/helpers'
import toastr from 'toastr';
import {Link } from 'react-router-dom'
import 'toastr/build/toastr.css'
import ShowImage from './ShowImage';

function EditProduit(props) {
    const ProdcatId = props.match.params.idPro
    const [prodact , setProdact] = useState({ })
    const [category , setCategory]    = useState([])

          const getAllCategory =()=>{
            fetch(`${API_URL}/category/`)
                .then(res =>res.json())
                .then(res =>setCategory(res.category))
                .catch(err =>console.log(err))
        }

            //
     const getOneProdact  =() => {
        fetch(`${API_URL}/prodact/${ProdcatId}` ,{
             method :"get",
             headers : {
                 "Content-Type": "application/json"
             }
        } )
        .then(res =>res.json())
        .then(res =>setProdact(res.prodact))
        .catch(err =>console.log(err))

     }


          
   
 
    useEffect(() => {
        getOneProdact()
        getAllCategory()
    }  , [])
  
  
    const [formData ,setFormData ] = useState(new FormData())


     const HandeltchangeProdact =(e)   =>{

        const value = e.target.id==="photo" ? e.target.files[0] : e.target.value
       
        formData.set(e.target.id , value)
         setProdact ({...prodact , [e.target.id] :value})

     }  
     
     const onSbmitProdact =(e)=>{
        e.preventDefault()
        const {user ,token} = isAuthenticated();

         fetch(`${API_URL}/prodact/${ProdcatId}/${user._id}` , {
            method : "Put" ,
            headers : {
                "accept" : "application/json",
               "Authorization" : `Bearer ${token}`
                },
                body  : formData
              
               })
             .then(res=>res.json())
             .then(res=> {
                 if(res.errors)
                 {
                    toastr.warning(res.errors , "Please  Check  Form !")
                 }
                 else
                 {
                    toastr.success("Produit is Upadete SuccessFully " , 'Update Prodact')
                 
                     
                     props.history.push('/prodact')
                     setFormData(new FormData())
                 }
              
                 
                
             })
             .catch(err => toastr.error( "Problem server " , 'Try agien'))
    }
     

    return (
        <div >
             <Link to='/prodact'>
                <button className ="btn btn-primary"><i className="fas fa-step-backward my-3 "></i>  Go To All Prodact</button>
            </Link>
               <h1 > Add New Prodact</h1>
            <hr />
            <form  onSubmit={onSbmitProdact}>
                 <div className="form-group">
                     <label htmlFor="name">Name Prodact</label>
                     <input 
                     type="text"
                     className="form-control"
                     placeholder="Add name category"
                     id="name"
                     onChange={HandeltchangeProdact}
                     value={prodact.name}
                     required
                     >    
                     </input>
                 </div>

                 <div className="form-group">
                     <label htmlFor=" description">Description</label>
                     <textarea 
                     type="text"
                     className="form-control"
                     rows="20"
                     cols="20"
                     id="description"
                     onChange={HandeltchangeProdact}
                     value={prodact.description}
                     required
                    
                     >    </textarea> 
                    
                 </div>


                 <div className="form-group">
                     <label htmlFor="price">price</label>
                     <input 
                     type="number"
                     className="form-control"
                     placeholder="Add price"
                     required 
                    id="price"
                    onChange={HandeltchangeProdact}
                    value={prodact.price}
                 
                     >    
                     </input>
                 </div>
                 
                  <div className="form-group">
                      <label htmlFor="category">Category</label>
                       
                        <select 
                         onChange={HandeltchangeProdact} 
                         id ="category"
                          className="form-control"
                          value={prodact.category}
                          name="category"
                          required
                          
                          >
                        <option value="0"></option>
                        {category.map((category , i) =>(
                        <option key ={i}  value={category._id}>{category.name}</option>

                        ))}
                       
                        </select>
                       
                    </div>

                    <div className="form-group">
                      <label htmlFor="shopping">Hopping</label>
                        <select 
                              onChange={HandeltchangeProdact}
                               id ="shopping" 
                               className="form-control"
                               value={prodact.shopping}
                               name="shipping"
                               >
                          <option  value="false">No</option>
                           <option  value="true">yes</option>
                       
                        </select>
                       
                    </div>
                 <div className="form-group">
                     <label htmlFor="Qauntity">Quantity</label>
                     <input 
                     type="number"
                     className="form-control"
                     placeholder="Add Quantity"
                     required 
                     id="Qauntity"
                     onChange={HandeltchangeProdact}
                     value={prodact.Qauntity}
                     >    
                     </input>
                 </div>

                 <div className="form-group">
                     <label htmlFor="photo">image</label>
                     <input 
                     type="file"
                     files ={prodact.photo}
                     className="form-control"
                     id="photo"
                     name="photo"
                     
                     onChange={HandeltchangeProdact}
                     >    
                     </input>
                     <div  className="edit mt-2 ml-2" style={{width:"300px"}}>
                     <ShowImage  url="prodact/photo" itmes={prodact} />
                     </div>
                     
                     
                 </div>

                 <button
                  type="submit" 
                  className="btn btn-outline-primary btn-block"
                  >Update rodact
                  </button>

            </form>
           
        </div>
    )
}

export default EditProduit