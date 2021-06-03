import React , {useState , useEffect} from 'react'
import { isAuthenticated } from '../Router/helpers'
import { listContact } from './ApiAdmin'
import moment from 'moment'
import { API_URL } from '../../config/config'
import Swal from 'sweetalert2'

function Contact(props) {
    const [contacts , setContacts] = useState([])

    const UserId = isAuthenticated().user._id
    const token  = isAuthenticated().token


    const deletecontact   =(contactId ,IdUser ) =>{


        Swal.fire({
            title: 'Are you sure?',
            text: 'You will Delete contact!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Delete contact.',
                'success'
              )
              fetch(`${API_URL}/contact/${contactId}/${IdUser}`  ,{
                method : "delete",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(res => {
                  if(res.message)
                  {
                    console.log("bad")
                  }
                  // window.location.reload(false);
                   props.history.push('/admin/contact')
                  
              })
              
              .catch(err =>console.log(err))



            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
       

    }



    
      
    useEffect(() => {
             listContact(UserId , token)
             .then(res => setContacts(res))
             .catch(err =>console.error(err))
    }, [props])

    return (
        <div>
              <div className="text-right alert alert-info dispaly-3">
                <h2>Total Contacts  :  <span className="badge badge-success">{contacts.length}</span> </h2>
                </div>
            <table className="table">
              <thead className="thead-dark">
               <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">message</th>
                <th scope="col">Date</th>
               
                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                       contacts &&  contacts.map((contact, i)=>
                           <tr key={i}>
                             <td>{contact.name}</td>
                             <td>{contact.email}</td>
                             <td>{contact.message}</td>
                             <td>{moment(contact.createdAt).fromNow() }</td>
                             <td>
                             <span onClick={ ()=> deletecontact(contact._id , UserId)}> <i    className=" btn btn-danger fas fa-trash-alt fa-2x"></i></span> 
                             </td>
                           </tr>
                        
                        )
                    }

                 </tbody>
            </table>
         
        </div>
    )
}

export default Contact
