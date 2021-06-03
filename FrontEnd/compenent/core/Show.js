import React , {useState , useEffect} from 'react'
import { useDispatch } from 'react-redux'
import ShowImage from '../Admin/ShowImage'
import { getOneProdact, related } from './ApiCore'

import { Card } from './Card'

function Show(props) {
    const prodactId = props.match.params.id
   const [prodact ,setProdact] = useState({})
   const [prodactrelated ,setProdactrelated] = useState([])
    useEffect(() => {
      
        getOneProdact(prodactId)
       
        .then(res =>  {
            setProdact(res)
            return related (prodactId)
        })
        .then (res => setProdactrelated(res))
    }, [props])
    return (
        <div>
                 {prodact &&(
                     <div className="container dark-grey-text mt-5">
                     <div className="row wow fadeIn">
                       <div className="col-md-6 mb-4">
                       <ShowImage   itmes={prodact} url="prodact/photo"/>
                       </div>
                       <div className="col-md-6 mb-4">
                         <div className="p-4">
                           <div className="mb-3">
                             <a href>
                               <span className="badge purple mr-1">{prodact.ctegory}</span>
                             </a>
                             <a href>
                               <span className="badge badge-danger mr-1">New</span>
                             </a>
                             <a href>
                               <span className="badge red mr-1">{prodact.name}</span>
                             </a>
                           </div>
                           <p className="lead">
                             <span className="mr-1">
                               <del>$700</del>
                             </span>
                             <span className="badge badge-info">${prodact.price}</span>
                           </p>
                           <p className="lead font-weight-bold">Description</p>
                           <p>{prodact.description}.</p>
                           
                           
                             
         
                         </div>
                       </div>
                     </div>
                     <hr />
                     {prodactrelated.length>0 && (
                     <div className="row d-flex justify-content-center wow fadeIn">
                       <div className="col-md-6 text-center">
                         <h4 className="my-4 h4">AUTRES PRODUITS DANS LA MÊME CATÉGORIE :</h4>
                
                       </div>
                     </div>
                     )}
                     <div className="row wow fadeIn">
                   
                         {prodactrelated.map((prodact) =>
                          <div key={prodact._id} className="col-lg-4 col-md-12 mb-4">
                          <Card prodact={prodact}  />
                          </div>
                         )}
                      
                         
                        
               
                       
                      
                      
                     </div>
                   </div>
                            

                 )}




              
                
        </div>
    )
}

export default Show
