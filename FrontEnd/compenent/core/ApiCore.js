import { API_URL } from "../../config/config"
import querystring from 'query-string'



export const getProdcat  =(params) =>{

     let query =querystring.stringify(params)

          return   fetch(`${API_URL}/prodact?${query}`)
              .then(res => res.json())
              .then(res =>res.prodact)
              .catch(err=>console.log(err))

}


export  const getOneProdact  =(id) => {
    return fetch(`${API_URL}/prodact/${id}` ,{
         method :"get",
         headers : {
             "accept" : "application/json" ,
             "Content-Type": "application/json"
         }
    } )
    .then(res =>res.json())
    .then(res =>res.prodact)
    .catch(err =>console.log(err))

 }



export  const getAllCategory = () =>{
    return fetch(`${API_URL}/category` ,{
        method : "get",
        headers : {
            "accept" : "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(res =>res.json())
        .then(res =>res.category)
        .catch(err =>console.log(err))
} 



export  const  related = (id) =>{
    return fetch(`${API_URL}/prodact/related/${id}` ,{
        method : "get",
        headers : {
            "accept" : "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(res =>res.json())
        .then(res =>res.prodact)
        .catch(err =>console.log(err))
} 

export  const  getToken = (idUser , token) =>{
    return fetch(`${API_URL}/braintree/getToken/${idUser}` ,{
        method : "get",
        headers : {
            accept : "application/json",
            ContentType: "application/json",
            Authorization : `Bearer ${token}`
        }
    })
        .then(res =>res.json())
} 


export  const  payment = (idUser , token , datapayment) =>{
    return fetch(`${API_URL}/braintree/payment/${idUser}` ,{
        method : "Post",
        headers : {
            Accept : "application/json",
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`
        },
        body :JSON.stringify(datapayment)
    })
        .then(res =>res.json())
} 
//payment


export  const searchBy = (skip , limit , filters) =>{
    const data ={
        skip,
        limit, 
        filters,
       
    }
    return fetch(`${API_URL}/prodact/search` ,{
        method : "POST",
        headers : {
            "accept" : "application/json",
            "Content-Type": "application/json"
        },
        body : JSON.stringify(data)
    })
        .then(res =>res.json())
        .then(res =>res.products)
        .catch(err =>console.log(err))
} 


//
export  const createOrder = (userId ,token , dataOrder) =>{
    return fetch(`${API_URL}/order/create/${userId}` ,{
        method : "Post",
        headers : {
            Accept : "application/json",
            "Content-Type": "application/json",
             Authorization : `Bearer ${token}`
        },
        body : JSON.stringify(dataOrder)  
    })
        .then(res =>res.json())
        .then(res=>res.json())
} 

export  const createOrder2 = (userId ,token , dataOrder1) =>{
    return fetch(`${API_URL}/order/create/${userId}` ,{
        method : "POST",
        headers : {
            'Content-Type': 'application/json',
             Authorization : `Bearer ${token}`
        },
        body : JSON.stringify(dataOrder1)  
    })
        .then(res =>res.json())
       
} 




export const gitProfile    = (userId , token) =>{
   return  fetch(`${API_URL}/user/profile/${userId}` ,{
       method: "get",
       headers:{
           "Content-type" : "application/json",
            Authorization : `Bearer ${token}`

       }
   })
   .then(res=>res.json())
   .then(res =>res.user)

}