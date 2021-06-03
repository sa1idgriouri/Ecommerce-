import React , {useState , useEffect} from 'react'
import { getAllCategory, getProdcat } from '../core/ApiCore';
import { Card } from '../core/Card';




 const    Search =()  =>{

                const [searchData, setSearchData] = useState({search: '' , category:''})
                 const [prodact, setProdact] = useState([])
                 const [category , setCategory] = useState([])

            const handleChange = (e) => {

                setSearchData({...searchData, [e.target.id]:e.target.value})

            }

             const onSbmit   =(e) =>{
              e.preventDefault()
             let {search ,category }=  searchData
            if(search)
            {
                getProdcat ({search : search || undefined , category }) 
                .then(res =>setProdact(res))

            }
            else
            {
                setProdact([])
            }

            }

            useEffect(() => {
                 getAllCategory()
                 .then(res =>setCategory(res))
                 .catch(err =>console.log(err))
            }, [])

    return (
        <div>

                 <div className="container">
                   <div className="row">
                
                   <div className="col-lg-7 col-12 order-lg-2   order-3 text-lg-left text-right">
                  <div className="header_search">
                    <div className="header_search_content">
                      <div className="header_search_form_container1  ml-5">
                      <form onSubmit={onSbmit} className="header_search_form clearfix  ">
                         
                          <input onChange={handleChange} id="search" name="search" type="search"  className="header_search_input" placeholder="Search for products..." />
                            
                         
                          
                          <div className="custom_dropdown" style={{display: 'none'}}>
                       
                          </div> <button  className="header_search_button trans_300" ><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png"  alt="" /></button>
                        
                        </form>
                      </div>
                    </div>
                  </div>
                </div> 
                   </div>
                 </div>
                 

                      


                        <div className="row">
                      {prodact.map((prodact ,i) =>
                       <div   key={prodact._id} className="col-md-4 mt-5">
                       <Card   prodact={prodact}/>

             </div>
              )}
           </div>
            
        </div>
    )
}

export default Search
