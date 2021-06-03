import React from 'react'
import { Link } from 'react-router-dom'

const ProdactPage =({prodcatpre , total , paginate})  =>{
    const numbrepage =[]

    for(let i =1 ; i<= Math.ceil(total / prodcatpre) ; i++)
    {
    numbrepage.push(i)
    }
    return (
        <div>
            <nav className="mb-2">
                    <ul className="pagination justify-content-center">
                    <li class="page-item"><a class="page-link" >Previous</a></li>
                    {numbrepage.map(mnb =>
                        <li key={mnb} className="paginate"><span onClick={()=>paginate(mnb)} className="page-link" >{mnb}</span></li>
                        )}

                    <li class="page-item"><a class="page-link" >Next</a></li>
                        
                        
                      
                </ul>
        </nav>
            
        </div>
    )
}

export default ProdactPage
