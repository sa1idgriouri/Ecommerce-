  let itmes = JSON.parse(localStorage.getItem('cart')) || []
  let  mystate ={
      prodact : itmes ,
      conut : itmes.reduce((total , prodacts) =>total + prodacts.Count  , 0)
  }
const cartReduser =(state =mystate , action )=>
{
    switch(action.type)
    {
        case "ADDTOCART" : 
        return  {
            ...state,
            prodact : action.payload , 
            conut : action.payload.reduce((total , prodact)=>total+ prodact.Count ,0)
        }

        case "INCRIMENT" : 
        return{
            ...state,
            prodact :action.payload,
            conut  : state.conut + 1
        }

        case "DEINCRIMENT" :
        return{
            ...state,
            prodact :action.payload,
            conut  : state.conut-1
        }
  
        case "DELET_PRODACT" : 
        return {
            ...state,
            prodact :action.payload,
            conut  : action.payload.reduce((total , prodact)=>total+ prodact.Count ,0)
        }

           
        
        default : 
      return state
        
    }
}

export  default  cartReduser