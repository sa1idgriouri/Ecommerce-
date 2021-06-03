import React  , {useState ,useEffect} from 'react'
import { API_URL } from '../../config/config'
import { isAuthenticated } from '../Router/helpers'
import toastr from 'toastr';
import {Link } from 'react-router-dom'
import 'toastr/build/toastr.css'

function Prodact(props) {

    const [prodact , setProdact] = useState({
        photo : "",
        name : "",
        description : "",
        price : 0,
        Qauntity : 0,
        shopping : false,
         category :0
          })
          
     const [category , setCategory]    = useState([])
    const getAllCategory =()=>{
        fetch(`${API_URL}/category`)
            .then(res =>res.json())
            .then(res =>setCategory(res.category))
            .catch(err =>console.log(err))
    }

    useEffect(() => getAllCategory(), [])
    const [formData , setFormData] = useState(new FormData())


     const HandeltchangeProdact =(e)   =>{

        const value = e.target.id==="photo" ? e.target.files[0] : e.target.value
        formData.set(e.target.id , value)
         setProdact ({...prodact , [e.target.id] :value})

     }  
     
     const onSbmitProdact =(e)=>{
        e.preventDefault()
        const {user ,token} = isAuthenticated();

         fetch(`${API_URL}/prodact/create/${user._id}` , {
            method : "Post" ,
            headers : {
                "accept" : "application/json",
               "Authorization" : `Bearer ${token}`
                },
                body  : formData
              
               })
             .then(res=>res.json())
             .then(res=> {
                 if(res.error)
                 {
                    toastr.warning(res.error , "Please  Check  Form !")
                 }
                 else
                 {
                    toastr.success("Produit is Create SuccessFully " , 'new Prodact')
                    setProdact({
                        photo : "",
                        name : "",
                        description : "",
                        price : 0,
                        Qauntity : 0,
                         shopping : false,
                         category :0
    
                     })
                     setFormData(new FormData());
                     props.history.push('/prodact')
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
                     required 
                     id="name"
                     onChange={HandeltchangeProdact}
                     value={prodact.name}
                   
                    
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
                     value={prodact.Quantity}
                     >    
                     </input>
                 </div>

                 <div className="form-group">
                     <label htmlFor="photo">image</label>
                     <input 
                     type="file"
                     className="form-control"
                     required 
                     id="photo"
                     name="photo"
                     onChange={HandeltchangeProdact}
                     >    
                     </input>
                 </div>

                 <button
                  type="submit" 
                  className="btn btn-outline-primary btn-block"
                  >Add new Prodact
                  </button>

            </form>
        </div>
    )
}

export default Prodact
