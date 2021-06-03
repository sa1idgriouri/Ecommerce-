import React from 'react'

function FilterByPrice({handelFilterByCategory}) {
    const price =[
            {
                _id:1,
                name : "any",
                value :[]

              },

              {
                _id:2,
                name : "0$  to  $39 ",
                value :[0, 39]

              },


              {
                _id:3,
                name : "$40 to $79",
                value :[40, 79]

              },

              {
                _id:4,
                name : "$80 to $199",
                value :[80 , 119]

              },

              {
                _id:5,
                name : "$120 to 200$",
                value :[120 , 201]

              },

              {
                _id:6,
                name : "More",
                value :[201 , 99999999]

              },
             ]

             const handelprice =(e)=>{
                handelFilterByCategory(price[e.target.value]['value'])
             }
    return (
        <div>
            
            {price.map((price ,i) =>
            <div  key ={i}className="my-2">
              <label htmlFor ={`${i}-${price.name}`}>
              <input 
                   type="radio"
                    name="price" 
                    onChange={handelprice}
                    id={`${i}-${price.name}`}
                    value ={i}
                     />
                      {price.name}
             </label>
            </div>
            
             
            )}
           
        </div>
    )
}

export default FilterByPrice
