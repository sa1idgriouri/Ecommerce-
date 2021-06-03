import { API_URL } from "../../config/config"
import querystring from 'query-string'




export const listOrder  =(idUser , token ,limit) =>{
         

          return   fetch(`${API_URL}/order/${idUser}?limit=${limit}` ,{
            method : "get",
            headers : {
                "Content-Type": "application/json",
                Authorization : `Bearer ${token}`
            }
          })
              .then(res => res.json())
             

}


export const listContact  =(idUser , token) =>{
  return   fetch(`${API_URL}/contact/getAllContact/${idUser}` ,{
    method : "get",
    headers : {
        accept : "application/json",
        ContentType: "application/json",
        Authorization : `Bearer ${token}`
    }
  })
      .then(res => res.json())
}

export const getStatus =(idUser , token) =>{


  return   fetch(`${API_URL}/order/status/${idUser}` ,{
    method : "get",
    headers : {
        accept : "application/json",
        ContentType: "application/json",
        Authorization : `Bearer ${token}`
    }
  })
      .then(res => res.json())
     

}


export const updateStatus =(idUser , token , idOrder , status , params) =>{
  let query =querystring.stringify(params)

  return   fetch(`${API_URL}/order/${idOrder}/status/${idUser}?${query}` ,{
    method : "PATCH",
    headers : {
        "Content-Type": "application/json",
        Authorization : `Bearer ${token}`
    },
    body : JSON.stringify({status})

  })
      .then(res => res.json())
     

}





export const getProdcat  =(params) =>{


     let query =querystring.stringify(params)

          return   fetch(`${API_URL}/prodact?${query}` ,{
            method: "get",
            headers: {
              "accept" : "application/json",
              "Content-Type": "application/json"
            },
            
          } )
              .then(res => res.json())
              .then(res =>res.prodact)
              .catch(err=>console.log(err))

}

export  const getAllCategory = (params) =>{
  let query =querystring.stringify(params)
  return fetch(`${API_URL}/category?${query}` ,{
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



export const listOrderOne  =( idOrder ,idUser , token) =>{


  return   fetch(`${API_URL}/order/${idOrder}/${idUser}` ,{
    method : "get",
    headers : {
        accept : "application/json",
        "Content-Type": "application/json",
        Authorization : `Bearer ${token}`
    }
  })
      .then(res => res.json())
      .then(res =>res.order)
     

}