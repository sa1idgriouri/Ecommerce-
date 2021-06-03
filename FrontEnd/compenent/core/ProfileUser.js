import React  , {useState , useEffect } from 'react'
import { isAuthenticated } from '../Router/helpers'
import { gitProfile } from './ApiCore'

function ProfileUser() {

    const [histroy , setHistroy ]= useState({})

    const userId = isAuthenticated().user._id
    const token    = isAuthenticated().token

    const getAlloder  = (userid , token)=>{
        gitProfile(userid, token)
        .then(res =>setHistroy(res))
        .catch(err =>console.error(err) )
    }


   useEffect(() => {
       getAlloder(userId , token)
   }, [])
    return (
        <div>
            <div className="text-center">
            <h1>Profile</h1>
            </div>
   
            <form >
            <div className="form-group col-md-6 offset-md-3">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input disabled type="text" className="form-control" id="exampleInputEmail1"  value={histroy.name} />
                    
                </div>
                <div className="form-group col-md-6 offset-md-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input disabled type="email" className="form-control" id="exampleInputEmail1" value={histroy.email} />
                   
                </div>
                <div className="form-group col-md-6 offset-md-3">
                    <label htmlFor="exampleInputPassword1">Role</label>
                    <input disabled type="text" className="form-control" id="exampleInputPassword1" value={isAuthenticated().user.role===0 ? 'User' : "admin"} placeholder="Password" />
                </div>
                
                <button type="submit" className="btn btn-raised btn-info  offset-md-3">Save</button>
                </form>
        </div>
    )
}

export default ProfileUser
