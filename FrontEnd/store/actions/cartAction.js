 import {uniqBy} from 'loadsh'
export  const addtocart = (itme)=>{
  
    let itmes =JSON.parse(localStorage.getItem('cart')) || []

    itmes =  uniqBy([{...itme , Count : 1 } ,...itmes] , '_id') 

    localStorage.setItem('cart' ,JSON.stringify(itmes) )
     return {
        type: "ADDTOCART",
        payload : itmes
     }
        
     

}


export const  incremount  =  (itme) =>{

    let items =JSON.parse(localStorage.getItem('cart'))

    items =items.map(prodact =>prodact._id ===itme._id ?{...itme, Count:prodact.Count+ 1 } : prodact)
    localStorage.setItem('cart' ,JSON.stringify(items) )

    return {
        type:"INCRIMENT",
        payload :items
    }

}


export const  deincremount  =  (itme) =>{

    if(itme.Count  >1)
    {
        let items =JSON.parse(localStorage.getItem('cart'))

        items =items.map(prodact =>prodact._id ===itme._id ?{...itme, Count:prodact.Count- 1 } : prodact)
        localStorage.setItem('cart' ,JSON.stringify(items) )
    
        return {
            type:"DEINCRIMENT",
            payload :items
        

    }
}
else
{
    return{
        type:null
    }

}

}

export const  deteprodact  =  (id) =>{

    let items =JSON.parse(localStorage.getItem('cart'))

     items= items.filter(prodact =>prodact._id !==id)
    localStorage.setItem('cart' ,JSON.stringify(items) )

    return {
        type:"DELET_PRODACT",
        payload :items
    }

}