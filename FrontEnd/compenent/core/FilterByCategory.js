import React , {useState} from 'react'

function FilterByCategory({categoryes ,handelFilterByCategory}) {

    const [checked] = useState(new Set())

    const HandelCategory =(categoryes)=>{
        if(checked.has(categoryes._id))
        {
            checked.delete(categoryes._id)
        }
        else
        {
            checked.add(categoryes._id)
        }
        
        handelFilterByCategory( Array.from(checked))
    }
    return (
        <div>
             <ul>
                 {categoryes && categoryes.map((categoryes ,i) =>
                    
                         <li  key={i} className="list-unstyled my-4">
                         <input onClick={ ()=>HandelCategory(categoryes)} className="form-check-input" type="checkbox"  id={i}></input>
                         <label htmlFor={i} className="form-check-label mx-2">{categoryes.name}</label>
    
                     </li>
                    
                    )}
            
             </ul>
        </div>
    )
}

export default FilterByCategory
