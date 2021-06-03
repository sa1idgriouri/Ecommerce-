import React  , {useState ,useEffect  }from 'react'
import {getAllCategory ,searchBy}  from './ApiCore'
import { Card } from './Card'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'

function Shop() {

    const [categories, setCategories] = useState([])
    const [limit] = useState(6)
    const [skip, setSkip] = useState(0)
    const [size, setSize] = useState(0)
    const [prodactfilter , setProdactfilter] = useState([])
    const [myfilter, setMyfilter] = useState({
          category : [],
          price    :[]

    })

    const handelFilterByCategory = (data , filterBy)=>{

        setMyfilter({...myfilter , [filterBy] : data})

       
     
    }

    const LoadMore =()=>{
        const toskip = skip + limit
        searchBy(toskip, limit ,myfilter)
        .then(res => {
            setProdactfilter([...prodactfilter , ...res])
            setSize(res.length)
            setSkip(toskip)
          
        })
        .catch(err=>console.log(err))
    }


    const bottonload   =() =>{
        return(
            size > 0  && 
            size>= limit  && (

            <div className="text-center">
                <button onClick={LoadMore} className="btn btn-outline-dark">Load More</button> 
           </div>
            )

        )
         

    }

    useEffect(() => 
    {
        getAllCategory()
        .then(res => setCategories(res))
        .catch(err =>console.log(err))

        searchBy(skip, limit ,myfilter)
        .then(res => {
            setProdactfilter(res)
            setSkip(0)
            setSize(res.length)
        })
        .catch(err=>console.log(err))

    }
       , [myfilter])
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Shop</h1>
               
            </div>
        </div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-3">
                          <h3>Filtrer par catégorie </h3>  
                           <hr />
                        <FilterByCategory 
                           categoryes={categories}  
                           handelFilterByCategory={(data) =>handelFilterByCategory(data , 'category')}
                                       
                         />
                         <hr />
                         <h3>Filtrer par prix </h3> 
                         <FilterByPrice handelFilterByCategory={(data) =>handelFilterByCategory(data , 'price')} />
                        
                       </div>

                       <div className="col-md-9">
                      
                           <div className="row">
                            
                               {
                                   prodactfilter && prodactfilter.map((prodact ,i)=>

                                   <div key={prodact._id} className="col-md-4 mb-3">
                                       <Card  prodact={prodact}  />
                                    </div>
                                   
                                   )}
                                 

                                 {bottonload()}
                  
                           </div>

                           
                       </div>
                   </div>
               </div>
        </div>
    )
}

export default Shop
