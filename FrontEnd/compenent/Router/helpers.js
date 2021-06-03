export  const isAuthenticated = () =>{
    const jwt = localStorage.getItem('JWT_INFO')
    if(jwt)
    {
      return JSON.parse(jwt)
    }
    return false

}


export const EmptyCart =(callback)=>{

  localStorage.removeItem('cart')

  callback();
}