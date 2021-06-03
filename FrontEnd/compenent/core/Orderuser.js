import React , {useState , useEffect } from 'react'
import { isAuthenticated } from '../Router/helpers'
import { gitProfile } from './ApiCore'
import ProdactPage  from '../Admin/ProdactPage'

function Orderuser() {
    const [histroy , setHistroy ]= useState([])
    const  [curentPage , setCourntPage] = useState(1)
     const [prodactPrepage  , setProderPage] = useState(10)

     const indexlastPordact = curentPage * prodactPrepage
     const indexfirstProdact = indexlastPordact-prodactPrepage
     const courntProdactpage =histroy.slice(indexfirstProdact, indexlastPordact)
     const paginate  =(numbrepage) =>{
        setCourntPage(numbrepage)
      }

     const userId = isAuthenticated().user._id
     const token    = isAuthenticated().token

     const getAlloder  = (userid , token)=>{
         gitProfile(userid, token)
         .then(res =>setHistroy(res.history))
         .catch(err =>console.error(err) )
     }



    useEffect(() => {
        getAlloder(userId , token)
    }, [])


    return (
        <div className="table-responsive">
          {courntProdactpage.length >0 && (

          
     <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">name</th>
      <th scope="col">transact_id</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total </th>

    </tr>
  </thead>
  <tbody>
        {courntProdactpage.length >0 &&(
             courntProdactpage.map((orderuser ,i)=>
                <tr key={i}>
                    <td>{i}</td>
                    <td>{orderuser.name}</td>
                    <td>{orderuser.transact_id}</td>
                    <td>{orderuser.Quantity}</td>
                    <td>${orderuser.amount}</td>
        
                </tr>
              
              
             )



        )}
     
  
  </tbody>
  </table>
  )}
  {courntProdactpage.length==0 &&(
     <h1 className="text-center">Empty Order</h1>
  )}
 

   {courntProdactpage.length>0 &&(

      <ProdactPage 
      prodcatpre={prodactPrepage}
      total={histroy.length}  
      paginate={paginate}
      />
   )}
 
   
        </div>
    )
}

export default Orderuser
